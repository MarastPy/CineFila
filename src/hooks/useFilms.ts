import { useState, useEffect } from 'react';
import { Film } from '@/types/film';

export const useFilms = () => {
  const [allFilms, setAllFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        // Cache-busting: append timestamp to ensure fresh data
        const cacheBuster = `?t=${Date.now()}`;
        const baseUrl = import.meta.env.BASE_URL;
        const [filmsResponse, additionalResponse] = await Promise.all([
          fetch(`${baseUrl}data/all_html_data.json${cacheBuster}`),
          fetch(`${baseUrl}data/aditional_info.json${cacheBuster}`)
        ]);

        if (!filmsResponse.ok || !additionalResponse.ok) {
          throw new Error('Failed to fetch film data');
        }

        const filmsData: Film[] = await filmsResponse.json();
        const additionalData: any[] = await additionalResponse.json();

        // Merge additional info into films data
        const mergedFilms = filmsData.map(film => {
          const additional = additionalData.find(
            add => add.Film.Title_Original === film.Film.Title_Original
          );
          
          if (additional) {
            const parsedRanking = Number.parseInt(String(additional.Ranking ?? '').trim(), 10);
            const safeRanking = Number.isFinite(parsedRanking) ? parsedRanking : Infinity;

            return {
              ...film,
              Ranking: additional.Ranking,
              ParsedRanking: safeRanking,
              Review: additional.Review,
              Festival_Distribution_Only: additional.Festival_Distribution_Only,
              Sales: additional.Sales,
              Status: additional.Status,
              Download_poster: additional.Download_poster,
              Download_stills: additional.Download_stills,
              Download_presskit: additional.Download_presskit,
              Sharing: additional.Sharing,
              Trailer_url: additional.Trailer_url
            };
          }
          
          return {
            ...film,
            ParsedRanking: Infinity
          };
        });

        // Sort by ranking first, then by premiere date (newest first) for films without ranking
        mergedFilms.sort((a, b) => {
          const aHasRanking = a.ParsedRanking !== undefined && a.ParsedRanking !== Infinity;
          const bHasRanking = b.ParsedRanking !== undefined && b.ParsedRanking !== Infinity;
          
          // Films with ranking come first, sorted by ranking
          if (aHasRanking && bHasRanking) {
            return a.ParsedRanking! - b.ParsedRanking!;
          }
          if (aHasRanking && !bHasRanking) return -1;
          if (!aHasRanking && bHasRanking) return 1;
          
          // Both without ranking: sort by premiere date (newest first)
          const getPremiereDate = (film: Film): Date | null => {
            const raw = film.Premiere?.[0]?.Date?.trim();
            if (!raw) return null;

            // Common dataset formats: "MM/YYYY", "MM/YYYY" with leading zeros, or anything Date() can parse.
            const mmYYYY = raw.match(/^(\d{1,2})\/(\d{4})$/);
            if (mmYYYY) {
              const month = Number(mmYYYY[1]);
              const year = Number(mmYYYY[2]);
              if (month >= 1 && month <= 12) return new Date(year, month - 1, 1);
            }

            const parsed = new Date(raw);
            return isNaN(parsed.getTime()) ? null : parsed;
          };
          
          const aDate = getPremiereDate(a);
          const bDate = getPremiereDate(b);
          
          if (aDate && bDate) return bDate.getTime() - aDate.getTime(); // newest first
          if (aDate && !bDate) return -1;
          if (!aDate && bDate) return 1;
          return 0;
        });

        setAllFilms(mergedFilms);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return { allFilms, loading, error };
};

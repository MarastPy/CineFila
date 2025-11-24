import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-[#2b2b2b] text-white py-10 px-6 sm:px-8 lg:px-[2cm] text-center overflow-hidden mt-[60px] sm:mt-[90px]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Logo */}
        <img
          src="/images/logo/Cinefila_logo_white_web.svg"
          alt="Cinefila Logo"
          className="max-w-[250px] h-auto mx-auto mb-5 block"
        />

        <h2 className="text-[17px] font-normal mb-10 text-[#D9D9D9]" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Festival strategy | Sales | Distribution
        </h2>

        <hr className="border-white/20 mb-10" />

        {/* Definition */}
        <div className="relative max-w-[500px] mx-auto text-center space-y-3 py-8">
          {/* Opening quotation mark */}
          <div className="absolute -left-9 -top-4 text-[7em] text-white/50 font-serif leading-none">“</div>

          <p className="text-[13.4px] text-white/90 tracking-wide mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>
            cinefila / cinefil / cinéphile / cineast / cinéfilo / σινεφίλ / シネフィル /
          </p>

          <p className="text-[13.4px] text-white/60 italic mb-6 tracking-wider" style={{ fontFamily: 'EB Garamond, serif' }}>noun</p>

          <div className="text-[13px] text-white/80 leading-relaxed text-left" style={{ fontFamily: 'EB Garamond, serif' }}>
            <p className="text-[13.4px] pl-6 -indent-6">
              <span className="font-semibold">1.</span> A person who lives and breathes the cinema
            </p>

            <p className="text-[13.4px] pl-6 -indent-6">
              <span className="font-semibold">2.</span> A film lover; a person who is enthusiastically interested in and
              knowledgeable about cinema
            </p>
          </div>

          {/* Closing quotation mark */}
          <div className="absolute -right-11 -bottom-12 text-[7em] text-white/50 font-serif leading-none">”</div>
        </div>

        <hr className="border-white/20 mt-10" />

        {/* CTA Buttons */}
          <Button
            asChild
            variant="dark"
            size="lg"
            className="w-full sm:w-[200px] lg:w-[220px] h-[60px] sm:h-[70px] text-base font-bold"
          >
            <a href="/news">News</a>
          </Button>
          <Button
            asChild
            variant="dark"
            size="lg"
            className="w-full sm:w-[200px] lg:w-[220px] h-[60px] sm:h-[70px] text-base font-bold"
          >
            <a href="#whatcanwedo">What can we do for you</a>
          </Button>
          <Button
            asChild
            variant="dark"
            size="lg"
            className="w-full sm:w-[200px] lg:w-[220px] h-[60px] sm:h-[70px] text-base font-bold"
          >
            <a href="/workshops">Workshops</a>
          </Button>
          <Button
            asChild
            variant="dark"
            size="lg"
            className="w-full sm:w-[200px] lg:w-[220px] h-[60px] sm:h-[70px] text-base font-bold"
          >
            <a href="/catalogue">Line Up</a>
          </Button>
          <Button
            asChild
            variant="dark"
            size="lg"
            className="w-full sm:w-[200px] lg:w-[220px] h-[60px] sm:h-[70px] text-base font-bold"
          >
            <a href="#about">About us & contact</a>
          </Button>
      </div>
    </section>
  );
};

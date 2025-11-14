import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61572536315236",
      icon: Facebook
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cinefilacz/",
      icon: Instagram
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexandrahroncova/",
      icon: Linkedin
    },
    {
      name: "Vimeo",
      url: "https://vimeo.com/cinefilacz/",
      icon: null // Custom SVG for Vimeo
    }
  ];

  return (
    <footer className="bg-[#1c1c1c] text-white py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center space-y-8">
          <h3 className="font-serif text-[1.8rem] sm:text-[2.2rem] font-light tracking-wide">
            Follow us
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
              >
                {link.icon ? (
                  <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  // Vimeo SVG icon
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797z"/>
                  </svg>
                )}
                <span className="relative text-[0.95rem] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/60 text-[0.9rem] font-light">
              &copy; 2025 Cinefila. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

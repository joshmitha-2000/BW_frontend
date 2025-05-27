const logos = [
    "https://www.bullworkmobility.com/press/press4.webp",
    "https://www.bullworkmobility.com/press/press3.webp",
    "https://www.bullworkmobility.com/press/press5.webp",
    "https://www.bullworkmobility.com/press/press6.webp",
    "https://www.bullworkmobility.com/press/press7.webp",
    "https://www.bullworkmobility.com/press/press9.webp",
    "https://www.bullworkmobility.com/press/press1.webp",
  ];
  
  export default function LogoScroller() {
    return (
      <section className="overflow-hidden mt-3 bg-white py-8">
        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: "20s" }}
        >
          {/* Repeat logos twice for infinite scroll */}
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`logo-${idx}`}
              className="h-24 w-auto inline-block mr-8 flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
  
        {/* Inline style for keyframes */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee linear infinite;
            }
          `}
        </style>
      </section>
    );
  }
  
const awardLogos = [
    "https://www.bullworkmobility.com/awards/award2.webp",
    "https://www.bullworkmobility.com/awards/award3.webp",
    "https://www.bullworkmobility.com/awards/award2.webp",
    "https://www.bullworkmobility.com/awards/award5.webp",
    "https://www.bullworkmobility.com/awards/award6.webp",
    "https://www.bullworkmobility.com/awards/award7.webp",
    "https://www.bullworkmobility.com/awards/award1.webp",
  ];
  
  export default function LogoScroller2() {
    return (
      <section className="overflow-hidden bg-white py-8">
        <div
          className="flex whitespace-nowrap animate-marquee-reverse"
          style={{ animationDuration: "20s" }}
        >
          {[...awardLogos, ...awardLogos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`award-logo-${idx}`}
              className="h-24 w-auto inline-block mr-8 flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
  
        <style>
          {`
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-reverse {
              animation: marquee-reverse linear infinite;
            }
          `}
        </style>
      </section>
    );
  }
  
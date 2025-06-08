import "./Carousel.css";
import { ArrowRight2 } from "iconsax-react";

const images = [
  "https://images.ctfassets.net/j7912igus1qi/6MVCwRTzG7fsNKa6Yj6Ci7/167fd620f0bcb91d4c5abccfaf68e6be/project_line.jpg",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F2UH88V7UGnFP2oMf4wABG2%2F9740adaf6470da592e1676e75a5d648b%2FJD_thumbnail.png&w=1024&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F63HMm5qjmUYS9jlYEPstXY%2F41e56143b946f8fffe55dd3866906f7b%2FLA_garden_party.jpg&w=1024&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2FZJgqYkwvsIM0FWeLNaXXv%2Ffb5233ee69f8bfb0ae1a017611faa0f0%2Fgus-paint.png&w=1920&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F12TOBEJgZkNHTTrxERicZQ%2Fa1e9fbee48658cc6bc9141025581f2b8%2Fazuki.jpg&w=2048&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F5076kGetD6JAnNvEJwU5R8%2Fd167c02684fc3febf48dbf271010bc2c%2FRounded.png&w=3840&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2Faw7Yi0YEzbjRB99HI71wN%2F11ce5b85de754897acdbfef0bbaa00cf%2FScreenshot_2025-03-31_at_1.22.12%C3%A2__PM__1_.png&w=1280&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F5XIBLRI4a9u5GUHQZsz0vx%2Fd8474d01fdc848b0b7246bbedd10fe16%2Fnyc_party.jpg&w=1024&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F7vlDrZgEmEZfTOvvLofLsb%2F7531718befedaf807a4c20614b9e1c64%2Fruins.jpg&w=1024&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fj7912igus1qi%2F2u4sUeChrEZHm5cP8SEk9r%2Fa793a8db41c11fb860eac46a6c288474%2Fhilumia.jpg&w=1024&q=75",
];

const Carousel = () => {
  return (
    <div className="carousel-main">
      <div className="carousel-row left">
        <div className="carousel-track">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`slide-${idx}`}
              className="carousel-img"
            />
          ))}
        </div>
      </div>
      <div className="spacer" />
      <div className="carousel-row right">
        <div className="carousel-track reverse">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`slide-${idx}`}
              className="carousel-img"
            />
          ))}
        </div>
      </div>
      <div className="view-all">
        <span>VIEW ALL PRODUCTS</span>
        <ArrowRight2 size="20" color="white" />
      </div>
    </div>
  );
};

export default Carousel;

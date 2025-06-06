import "./Slide.css";

const images = [
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Ftcg-alpha-starter-deck.png&w=600&q=75",
  "https://www.azuki.com/_next/image?url=https%3A%2F%2Fstatic-content.azuki.com%2Fassets%2Fanthology_ep2%2Fraizan_poster.jpg&w=600&q=75",
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fwaiting-man.jpg&w=600&q=75",
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsisters.jpg&w=600&q=75",
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fsatoshi.jpg&w=600&q=75",
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbeanz-101.jpg&w=600&q=75",
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Fbrown-x-beanz-winter.jpg&w=600&q=75",
  "https://www.azuki.com/_next/image?url=%2Fhomepage%2FCarousel%2Forigin-of-the-garden.jpg&w=600&q=75",
];

const Slide = () => {
  return (
    <div className="slides horizontal-list">
      {images.map((src, idx) => (
        <div className="slideitem" key={idx}>
          <div className="slideimage">
            <img src={src} alt="" />
            <div className="slidetitle">
              <span>TCG Alpha Starter Deck</span>
              <div>TRADING CARD GAME</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide;

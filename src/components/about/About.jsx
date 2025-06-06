import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutcard">
        <div className="abouttypo">
          <div className="abouttitle">building the future of anime</div>
          <div className="aboutsubtitle">
            In 2022, Azuki set out to create a decentralized anime brand, where
            the community can co-create and contribute to the IP and stories we
            tell, forging a new model of community-driven entertainment.
          </div>
          <div className="aboutsubtitle">
            The Azuki community, through its creation of 100 subcommunities, a
            vast collection of fan and commissioned art, multiple community-led
            events around the world, and much more, has emphatically shown that
            it's possible to birth a new IP that originates from web3 in the
            fast world of anime.
          </div>
          <div className="aboutsubtitle">
            From creating the largest decentralized anime IP, to enriching the
            anime fandom experience with groundbreaking products, Azuki’s
            mission is to build the future of anime by harnessing the power of
            community and blockchain technology.
          </div>
          <div className="aboutsubtitle">
            We rise together. We build together. We grow together. いくぞ IKZ!
          </div>
        </div>
        <img
          src="https://www.azuki.com/_next/image?url=%2Fhomepage%2FManifestoSection%2Fshao-sisters-scene.jpg&w=1920&q=75"
          alt=""
          className="aboutimage"
        />
      </div>
    </div>
  );
};

export default About;

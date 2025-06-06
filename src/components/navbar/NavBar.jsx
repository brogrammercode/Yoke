import "./NavBar.css";

const NavBar = ({ navOnHero }) => {
  return (
    <div className={`navbar ${navOnHero ? "navbar-white" : "navbar-black"}`}>
      <div className="logo">YOKE</div>
      <div className="navsegment">
        <div className="navbuttons">ABOUT</div>
        <div className="navbuttons">GALLARY</div>
        <div className="navbuttons">
          <span>ACHIEVEMENTS</span>
        </div>
        <div className="navbuttons">SOCIALS</div>
        <div className="navbuttons">MORE</div>
      </div>
      <div className="navbuttons">CONNECT</div>
    </div>
  );
};

export default NavBar;

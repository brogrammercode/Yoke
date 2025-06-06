import "./Duo.css";

export const Duo = () => {
  return (
    <div className="duo-main">
      <div className="duo-each">
        <div className="duo-typo">
          <h1>anthology series</h1>
          <p>
            Enter the Garden is an anime anthology series created in
            collaboration with Dentsu and Goro Taniguchi
          </p>
          <div>LEARN MORE</div>
        </div>
        <img
          src="https://www.azuki.com/homepage/thumbnail-anthology.jpg"
          alt=""
          className="duo-image"
        />
      </div>
      <div className="duo-divider" />
      <div className="duo-each">
        <div className="duo-typo">
          <h1>anthology series</h1>
          <p>
            Enter the Garden is an anime anthology series created in
            collaboration with Dentsu and Goro Taniguchi
          </p>
          <div>LEARN MORE</div>
        </div>
        <img
          src="https://www.azuki.com/homepage/thumbnail-world.jpg"
          alt=""
          className="duo-image"
        />
      </div>
    </div>
  );
};

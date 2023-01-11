import React from "react";


const FootWears = () => {

  return (
    
    <div>
  
      <section id="footwear">
        <h1>shoes&amp;Boots👢🥾👞</h1>
        <div className="parent-cards">
          <div className="card" style={{ width: "18rem" }}>
            <img
              alt="Blue"
              className="card-img-top"
              src="imgOnLineStor/17.jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Suede Shoes</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button className="btn btn-primary">Buy</button>
                <div className="price">$ 30</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              alt="Gray"
              className="card-img-top"
              src="imgOnLineStor/14.jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Classic Shoes</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button className="btn btn-primary">Buy</button>
                <div className="price">$ 50</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              alt="Olive"
              className="card-img-top"
              src="imgOnLineStor/22.jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Shiny Boots</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button className="btn btn-primary">Buy</button>
                <div className="price">$ 10</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              alt="Pink"
              className="card-img-top"
              src="imgOnLineStor/13.png"
            />
            <div className="card-body">
              <h5 className="card-title">leather shoes</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button className="btn btn-primary">Buy</button>
                <div className="price">$ 45</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default FootWears;

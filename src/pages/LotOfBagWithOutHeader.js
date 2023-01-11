import React from "react";


const LotOfBags = () => {
  return (

      <div>
        <section id="bags">
          <h1>Kinds Of Bags 👜👝</h1>
          <div className="parent-cards">
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Blue"
                className="card-img-top"
                src="imgOnLineStor/1.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">casual Bag</h5>
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
                src="imgOnLineStor/2.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">School Bag</h5>
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
                  <div className="price">$ 90</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Olive"
                className="card-img-top"
                src="imgOnLineStor/3.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Classic Bag</h5>
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
                  <div className="price">$ 100</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Pink"
                className="card-img-top"
                src="imgOnLineStor/4.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">leather Bag</h5>
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
                  <div className="price">$ 405</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

  );
};

export default LotOfBags;

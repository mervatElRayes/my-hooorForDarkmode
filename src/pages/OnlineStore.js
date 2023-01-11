import React from "react";
import HeaderOnLinestor from "../components/HeaderOnLinestor";
import GlassesWithOutHeader from "../pages/GlassesWithOutHeader"
import LotOfBagWithOutHeader from "../pages/LotOfBagWithOutHeader";
import ClothesWithOutHeader from "../pages/ClothesWithOutHeader";
import FootWearWithOutHeader from "../pages/FootWearWithOutHeader";
import ContactUsWithOutHeader from "../pages/ContactUsWithOutHeader"

const OnlineStore = () => {
  return (
    <>
       <HeaderOnLinestor /> 
      <button id="myBtn" onclick="topFunction()" title="Go to top">
        <div className="icon-chevron-up" />
      </button>
      
      <main id="main">
    
        <GlassesWithOutHeader />
        <ClothesWithOutHeader />
        <FootWearWithOutHeader />
        <LotOfBagWithOutHeader />
        <ContactUsWithOutHeader />

  
        <div className="blackScreen" dir="rtl" id="blackScreen">
          <div style={{ color: "#fff" }} id="close">
            ✖
          </div>
          <article className="all-products" id="allproducts" />
          <article className="confirm-buy" dir="rtl">
            <div>
              <p>المجموع</p>
              <p id="totalPrice">$0</p>
            </div>
            <button className="btn btn-danger" id="danger">
              تنفيذ عملية الشراء
            </button>
          </article>
        </div>
      </main>

      
    </>
  );
};

export default OnlineStore;

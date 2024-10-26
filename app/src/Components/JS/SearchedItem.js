import "../style/SearchPage.css";
import React from "react";
import ServicePage from "./ServicePage.js";

export default function SearchedItem({results, someuserid, address}){
    const [serviceClicked, setServiceClicked] = React.useState(false);

    const title =results.title;
    const Image = results.image;
    const description = results.description;
    const reviews = results.reviews;

    const setterServiceClick = () => {
        setServiceClicked(true);
      };
    
      const resetServiceClick = () => {
        setServiceClicked(false);
      };

      console.log(results);
      
    return(
    <div>
        {serviceClicked && <ServicePage keepServicePage={resetServiceClick} results={results} someuserid={someuserid} address={address}/>}
        <div className="SearchPageContentContainer" onClick={setterServiceClick} results={results}>
        <div className="SPCCTitle">{title}</div>
        <div className="SPCCHor">
          <div className="SPCCImage"></div>
          <div className="SPCCDescription">{description}</div>
        </div>
        <div className="SPCCReviews"></div>
      </div>
    </div>
   );
}


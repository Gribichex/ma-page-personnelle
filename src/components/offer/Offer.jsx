
import { useTranslation } from "react-i18next";
import OfferCard from "./OfferCard";

function Offer() {
  const { t } = useTranslation();

   const firstOffer = {
       name : "Basic",
       content: "One page only static website creation",
       interest:"Ideal solution for a quick and simple presentation of the added-value of your business",
       delivery:2,
       revisions:2,
       assets: ["1 Page","Responsive Design"],
       price: ["19€"]
   } 

   const secondOffer = {
    name : "Standard",
    content: "Static website creation",
    interest:"Ideal solution for a comprehensive showcase of any business or association",
    delivery:7,
    revisions:7,
    assets: ["5 Pages","Responsive Design"],
    price: ["49€"]
} 


const thirdOffer = {
  name : "Premium",
  content: "Dynamic website creation",
  interest:"Ideal solution for a web application handling server-stored data",
  delivery:21,
  revisions:10,
  assets: ["7 Pages","Responsive Design","Creation of related server, APIs and databases"],
  price: ["129€"]
} 



  return (
    <div className="offer-container">
      <h2 className="offer-answer">{t("Offers")}</h2>
      <div className="card-grid">
        <OfferCard {...firstOffer}/>
        <OfferCard {...secondOffer}/>
        <OfferCard {...thirdOffer}/>
      </div>
    </div>
  );
}

export default Offer;

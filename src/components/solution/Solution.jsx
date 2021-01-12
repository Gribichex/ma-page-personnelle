
import { useTranslation } from "react-i18next";
import Card from "./Card";

import fast_svg from "../../medias/icons/fast.svg";
import responsive_svg from "../../medias/icons/responsive.svg";
import dynamic_svg from "../../medias/icons/dynamic.svg";
function Solution() {
  const { t } = useTranslation();

   const firstSolution = {
       logo : fast_svg,
       title: "Fast",
       content:"Fast Loading and fluid interaction"
   } 

   const secondSolution = {
    logo : responsive_svg,
    title: "Responsive",
    content:"Display is adapted for every device from mobile to desktop"
} 

const thirdSolution = {
    logo : dynamic_svg,
    title: "Dynamic",
    content:"Various possible interaction with server or other websites"
} 

  return (
    <div className="container">
      <h3 className="solution-ask">{t("Problem-to-solve")}</h3>

      <h2 className="solution-answer">{t("Answer")}</h2>

      <div className="card-grid">
        <Card {...firstSolution}/>
        <Card {...secondSolution}/>
        <Card {...thirdSolution}/>
      </div>
    </div>
  );
}

export default Solution;

import React from "react";
import CardDescriptionOrg from "../organisms/CardDescription.org";
import FeatureDescription from "../organisms/FeatureDescription";

function PricingCard({children}) {
  return (
    <div className="w-[308px] h-[616px] bg-white mt-[48px] rounded-lg shadow-md ">
      {children}
    </div>
  )
}

export default PricingCard;

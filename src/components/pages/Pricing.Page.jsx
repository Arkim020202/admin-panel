import React from "react";
import PageTitle from "../atoms/PageTitle";
import Description from "../atoms/SubjectOrDescription";
import Consultation from "../molecules/Consultation";
import TogglePeriod from "../molecules/TogglePeriod";
import PricingCard from "../templates/PricingCard";
import CardDescriptionOrg from "../organisms/CardDescription.org";
import FeatureDescription from "../organisms/FeatureDescription";
import CardDescriptionMol from "../molecules/CardDescription.mol";
import PriceMol from "../molecules/Price.mol";
import BuyButton from "../atoms/BuyButton";
import CardDescription from "../atoms/CardDescription";
import CardTitle from "../atoms/CardTitle";
import DollarIcon from "../atoms/DollarIcon";
import Price from "../atoms/Price";
import PricePerTime from "../atoms/PricePerTime";
import TitleFeature from "../atoms/TitleFeature";
import CardFeature from "../molecules/CardFeature";
import BuildEfficientlyOrg from "../organisms/BuildEfficiently.org";
import FrequentlyQuestions from "../organisms/FrequentlyQuestions";
import { Period } from "../../service/atom";
import { useRecoilValue } from "recoil";



function Pricing() {
  const period = useRecoilValue(Period)
  return (
    <div className="h-[90.7%] overflow-y-auto px-8 bg-[#F4F6F8] ">
      <PageTitle title="Pricing"/>
      <Description className="text-[40px] font-bold text-[#161C24]  h-[55px] w-[601px] ml-[50px] mt-[56px] tracing-[-0.84px]  flex items-center cursor-default " >Find a plan that's right for you</Description>
      <Consultation/>
      <TogglePeriod/>
      <div className="w-full pl-[50px] pr-[58px] flex gap-14  ">
      <PricingCard>

        <CardDescriptionOrg>
            <CardDescriptionMol>
              <CardTitle>Standard</CardTitle>
              <CardDescription>
                For early-stage startups that want to spend more time developing and less on manual operations.
              </CardDescription>
            </CardDescriptionMol>
            <PriceMol>
              <DollarIcon/>
              <Price>{period === "Monthly" ? (49) : (520)}</Price>
              <PricePerTime>{period === "Monthly" ? ("mo") : ("year")}</PricePerTime>
            </PriceMol>
            <BuyButton className='w-[41.23%] h-[42px] px-5  border-[1px] border-primary text-[14px] font-semibold tracking-[-0.41px] text-primary rounded-lg mt-[17px] ml-[27px] mb-[37px] '>Buy Standard</BuyButton>
        </CardDescriptionOrg>


        <FeatureDescription>
          <TitleFeature>All core features, including:</TitleFeature>
          <CardFeature>Only Basic Components</CardFeature>
          <CardFeature><p  className='font-bold text-black'>12+</p> Adv. Components</CardFeature>
          <CardFeature><p  className='font-bold text-black'>5</p> - Landing page</CardFeature>
          <CardFeature><p  className='font-bold text-black'>3</p> Dashboard Layouts</CardFeature>
          <CardFeature>Documentation</CardFeature>
          <CardFeature>Access to support forums</CardFeature>
        </FeatureDescription>
      </PricingCard>

      <PricingCard>

        <CardDescriptionOrg>
            <CardDescriptionMol>
              <CardTitle  >Multisite<button className="w-[79.5px] h-[19px] bg-[#FFC107] text-[10px] font-bold tracking-[-0.1px] mt-1 rounded-2xl px-2 cursor-default ">Most Popular</button></CardTitle>
              <CardDescription>
                For agile startups that want to grow their revenue with quick experiments and data-driven decision making.
              </CardDescription>
            </CardDescriptionMol>
            <PriceMol>
              <DollarIcon/>
              <Price>{period === "Monthly" ? (149) : (1520)}</Price>
              <PricePerTime>{period === "Monthly" ? ("mo") : ("year")}</PricePerTime>
            </PriceMol>
            <BuyButton className='w-[41.23%] h-[42px] px-5  border-[1px] border-primary text-[14px] font-semibold tracking-[-0.41px] text-white bg-primary rounded-lg mt-[17px] ml-[27px] mb-[37px] '>Buy Multisite</BuyButton>
        </CardDescriptionOrg>


        <FeatureDescription>
          <TitleFeature>Everything in Standard +:</TitleFeature>
          <CardFeature>Offline viewing</CardFeature>
          <CardFeature><p  className='font-bold text-black'>Unlimited</p> projects</CardFeature>
          <CardFeature><p  className='font-bold text-black'>Unlimited</p> storage</CardFeature>
          <CardFeature><p  className='font-bold text-black'></p> Custom domain support</CardFeature>
          <CardFeature>Bulk editing</CardFeature>
          <CardFeature>12 / 5 support</CardFeature>
        </FeatureDescription>
      </PricingCard>

      <PricingCard>

        <CardDescriptionOrg>
            <CardDescriptionMol>
              <CardTitle>Extended</CardTitle>
              <CardDescription>
                For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.
              </CardDescription>
            </CardDescriptionMol>
            <PriceMol>
              <DollarIcon/>
              <Price>{period === "Monthly" ? (490) : (5030)}</Price>
              <PricePerTime>{period === "Monthly" ? ("mo") : ("year")}</PricePerTime>
            </PriceMol>
            <BuyButton className='w-[41.23%] h-[42px] px-5  border-[1px] border-primary text-[14px] font-semibold tracking-[-0.41px] text-primary rounded-lg mt-[17px] ml-[27px] mb-[37px] '>Buy Extended</BuyButton>
        </CardDescriptionOrg>


        <FeatureDescription>
          <TitleFeature>Everything in Multisite +:</TitleFeature>
          <CardFeature>Workshop</CardFeature>
          <CardFeature><p  className='font-bold text-black'>Dedicated</p> hardware</CardFeature>
          <CardFeature><p  className='font-bold text-black'>99.9% uptime</p> guarantee</CardFeature>
          <CardFeature><p  className='font-bold text-black'></p> Advanced analytics</CardFeature>
          <CardFeature>3rd party integrations</CardFeature>
          <CardFeature>24 / 7 support</CardFeature>
        </FeatureDescription>
      </PricingCard>
      </div>

      <BuildEfficientlyOrg/>
      <FrequentlyQuestions/>
      
      
    </div>
  )
}

export default Pricing;

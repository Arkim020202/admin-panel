import React from "react";
import Description from "../atoms/SubjectOrDescription";

function FrequentlyQuestions() {
  return (
    <div className="w-full px-[50px] h-[404px] mt-[133px] cursor-default">
      <Description className="text-[32px] font-medium tracking-[-0.64px] text-[#161C24] mb-[53px]  ">
        Frequently Asked Questions
      </Description>

      <div className="w-full  h-full flex flex-wrap gap-x-14 ">
        <div className="w-[27.22%] h-[110px] ">
          <Description className=" text-[16px] font-medium tracking-[-0.32px] mb-[14px] ">
            Will i be charged now for?
          </Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">
            Vestibulum pulvinar est at erat laoreet fringilla. Nullam imperdiet,
            augue non vestibulum triuam quat maxim felis.
          </Description>
        </div>

        <div className="w-[27.22%] h-[110px] mr-5 ">
          <Description className=" text-[16px] font-medium tracking-[-0.32px] mb-[14px] ">
            How does a subscription work?
          </Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">
            Donec tempus imperdiet libero quis ultricies. Donec nunc nisi,
            imperdiet nec porta ultrices, accumsan a nibh.
          </Description>
        </div>

        <div className="w-[27.22%] h-[110px] ">
          <Description className=" text-[16px] font-medium tracking-[-0.32px]  mb-[14px]  ">
            Can I cancel anytime?
          </Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">
            Yes, Pellentesque habitant morbi tristique senectus et netus
            fficitur eget lacus eu, gravida blandit sem. Duis aliquam convallis
            tempor.
          </Description>
        </div>

        <div className="w-[27.22%] h-[110px] ">
          <Description className=" text-[16px] font-medium tracking-[-0.32px]  mb-[14px]  ">
            How long is my personal?
          </Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">
            Aliquam vel sodales est. Mauris eu dignissim dolor. Praesent
            scelerisque dolor risus, quis viverra interdum turpis tincidunt
            interdum.
          </Description>
        </div>

        <div className="w-[27.22%] h-[110px] mr-5 ">
          <Description className=" text-[16px] font-medium tracking-[-0.32px]  mb-[14px]  ">
            What are Multisite plan?
          </Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">
            Quisque accumsan odio sed congue u eleifend est porttitor nisi
            lobortis, sit aget dolor rhoncus tincidunt vel a mauris.
          </Description>
        </div>

        <div className="w-[27.22%] h-[110px] ">
          <Description className=" text-[16px] font-medium tracking-[-0.32px]  mb-[14px]   ">
            Are the files downloadable?
          </Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fitur eget lacus eu, gravida blandit sem.
          </Description>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyQuestions;

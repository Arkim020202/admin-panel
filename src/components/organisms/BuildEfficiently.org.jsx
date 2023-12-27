import React from 'react'
import BuildEfficiently from "../molecules/BuildEfficiently";
import EditIcon from "../atoms/EditIcon";
import FilterIcon from "../atoms/FilterIcon";
import RotatIcon from "../atoms/RotatIcon";
import TagIcon from "../atoms/TagIcon";
import FileIcon from "../atoms/FileIcon";
import TrendingUpIcon from "../atoms/TrendingUpIcon";
import Description from "../atoms/SubjectOrDescription";

function BuildEfficientlyOrg(){
  return (
    <>
    <Description className="text-[32px] font-medium text-[#161C24]  h-[55px] w-[601px] ml-[50px] mt-[75px] mb-2 tracing-[-0.84px]  flex items-center cursor-default " >Everything you need to build efficiently</Description>
    <Description className="text-[15px] font-normal text-[#637381] w-[47%] pl-[3px] h-[28px]   ml-[50px] cursor-default " >Start building your app using our tools, be efficient, spend less time with details more time with your business</Description>

    <div className="w-full h-[397px] px-[50px] mt-[75px] flex items-center flex-wrap content-between cursor-default ">
        <BuildEfficiently className='w-[29.22%] h-[155px]  mr-[45px]'>
          <EditIcon/>
          <Description className=" text-4 font-medium tracking-[-0.32px] mb-[6px] text-[#161C24]">Create and Edit Projects</Description>

          <Description className=" text-[15px] font-normal text-[#637381] ">Donec posuere felis sit amet felis max imus roin consectetur quis leo id eleifuet, sapien quis fringilla finibus,</Description>

        </BuildEfficiently>

        <BuildEfficiently className='w-[29.22%] h-[155px] mr-[50px]'>
            <FilterIcon/>
            <Description className=" text-4 font-medium tracking-[-0.32px] mb-[6px] text-[#161C24] ">Search and Filter</Description>
            
            <Description className=" text-[15px] font-normal text-[#637381] ">Vestibulum in neque augue. Vivamus sed tempor mi. Integer dolor urna, dictum a arcu vitae, efficitur semper lorem.</Description>
        </BuildEfficiently>

        <BuildEfficiently className='w-[29.23%] h-[155px] '>
            <RotatIcon/>
            <Description className=" text-4 font-medium tracking-[-0.32px] mb-[6px] text-[#161C24] ">Real Time Updates</Description>
          
            <Description className=" text-[15px] font-normal text-[#637381] ">Maecenas nec mauris dui. Sed ut mi a nibh rhoncus blandit. Cras accumsan, eros in malesuada convallis.</Description>
        </BuildEfficiently>


        <BuildEfficiently className='w-[29.22%] h-[155px] mr-[45px] '>
            <TagIcon/>
            <Description className=" text-4 font-medium tracking-[-0.32px] mb-[6px] text-[#161C24] ">Meta Information</Description>
          
            <Description className=" text-[15px] font-normal text-[#637381] ">Aenean justo lorem, semper non lectus quis, porta semper enim. Integer posuere lorem eu neque pellentesque.</Description>
        </BuildEfficiently>

        <BuildEfficiently className='w-[29.22%] h-[155px] mr-[50px] '>
            <FileIcon/>
            <Description className=" text-4 font-medium tracking-[-0.32px] mb-[6px] text-[#161C24] ">Pre-rendered Results</Description>
          
            <Description className=" text-[15px] font-normal text-[#637381] ">Donec cursus libero non nibh consectetur sodales tincidunt vitae turpis. Duis feugiat at lorem id iaculis.</Description>
        </BuildEfficiently>
            
        <BuildEfficiently className='w-[29.3%] h-[155px]  '>
            <TrendingUpIcon/>
            <Description className=" text-4 font-medium tracking-[-0.32px] mb-[6px] text-[#161C24] ">Simple Analytics</Description>
          
            <Description className=" text-[15px] font-normal text-[#637381] ">Nulla imperdiet sem quis ipsum condi mentum po ris sit amet libero et turpis vestibulum faucibus at nec lacus.</Description>
        </BuildEfficiently>

      </div>

      </>
  )
}

export default BuildEfficientlyOrg
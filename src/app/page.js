import image from "next/image";
import Link from 'next/link';

function Book({title, lineType, color, subtitle, toUrl}) {

  return (
      <Link class="moleskine-wrapper max-w-[25%] min-w-[10em]" href={"/"+toUrl}>
        <div class="moleskine-notebook responsive-paper-size relative transition-all ease-in-out duration-400 rounded-[5px_15px_15px_5px] origin-left-center inline-block m-[30px] perspective-[800px] rotate-z--10 rotate-y--50">
          <div class={`notebook-cover ${color} responsive-paper-size absolute rounded-[5px_15px_15px_5px] z-[10] transition-all duration-500 transform-style-3d origin-left-center`}>
          <div class="notebook-skin h-[25%] font-main shadow-notebook-skin bg-nccb mt-[50%] p-[15px] text-[12px] relative z-[10] text-dark text-left"><div>{title}</div></div>
            <div class="custom-gradient absolute w-[10px] h-[calc(100%+2px)] top-[-1px] right-[25px] rounded-[2px] z-[100] transition-all duration-2000 ease ">
            </div>
          </div>
      <div class={`notebook-page bg-notebookBackground notebook-page-${lineType} responsive-paper-size absolute z-0 rounded-[5px_16px_16px_5px] overflow-hidden transition-[height] duration-500 ease-in-out transition-[weight] duration-500 ease-in-out`}>
      </div>
      </div>
      <p class="text-show text-balance opacity-0 font-size-12 text-center  text-black font-main">{subtitle}</p>
    </Link>
 )
}
function BookA({title, lineType, color, subtitle, toUrl}) {

  return (
      <div class="moleskine-wrapper max-w-[25%] min-w-[10em]">
        <div class="moleskine-notebook responsive-paper-size relative transition-all ease-in-out duration-400 rounded-[5px_15px_15px_5px] origin-left-center inline-block m-[30px] perspective-[800px] rotate-z--10 rotate-y--50">
          <div class={`notebook-cover ${color} responsive-paper-size absolute rounded-[5px_15px_15px_5px] z-[10] transition-all duration-500 transform-style-3d origin-left-center`}>
          <div class="notebook-skin h-[25%] font-main shadow-notebook-skin bg-nccb mt-[50%] p-[15px] text-[12px] relative z-[10] text-dark text-left"><div>{title}</div></div>
            <div class="custom-gradient absolute w-[10px] h-[calc(100%+2px)] top-[-1px] right-[25px] rounded-[2px] z-[100] transition-all duration-2000 ease ">
            </div>
          </div>
      <div class={`notebook-page bg-notebookBackground notebook-page-${lineType} responsive-paper-size absolute z-0 rounded-[5px_16px_16px_5px] overflow-hidden transition-[height] duration-500 ease-in-out transition-[weight] duration-500 ease-in-out`}>
      </div>
      </div>
      <p class="text-show text-balance opacity-0 font-size-12 text-center  text-black font-main">{subtitle}</p>
    </div>
 )
}
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center  align-center min-w-screen">
    <div className="font-main responsive-text-size-h1  flex justify-center align-center w-[100%] h-[20%] pt-2 transition-all duration-500 ease-in-out opacity-1"> 
        DUM_DEV 
    </div> 
    <div className="font-main responsive-text-size-h2  flex justify-center align-center w-[100%] h-[20%] pt-3 pb-2 transition-all duration-500 ease-in-out opacity-1"> 
        Library
    </div>

    <div className="w-full bg-inherit text-center font-main">
        Manage By,
        Ryu, Hyun Seok
      </div>
       <div className="flex flex-row items-center justify-between responsive-screen-padding">
     <Book title={"Tech Stack"} lineType={"squared"} color={"bg-nccs"} subtitle={"To Be Realiable"} toUrl={"stack"}/>
     <Book title={"My CV"} lineType={"ruled"} color={"bg-black"}subtitle={"Work hard"} toUrl={"cv"}/>
     <a className="  max-w-[25%] min-w-[10em]" href="https://typer.notion.site/17f9fc5379604ce0b0e5f9ea1870d8ff?pvs=4" target="_blank" rel="noopener noreferrer">
       <BookA title={"Projects"} lineType={"dotted"} color={"bg-ncct"} subtitle={"Make Result"} toUrl={"projects"}/>
      </a>
      <a className=" max-w-[25%] min-w-[10em]" href="https://typer.notion.site/NLP-10411c378ddf44bfb88757b8b3c27b81?pvs=4" target="_blank" rel="noopener noreferrer">
       <BookA title={"AI"} lineType={"dotted"} color={"bg-ncco"} subtitle={"Step On Ground"} toUrl={"articles"}/>
     </a>
    </div>
      
    </main>
  );
}

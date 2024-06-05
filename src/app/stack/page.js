'use client'
import styles from './stack.module.css';
import { Canvas } from "@react-three/fiber";
import { useState,useEffect } from 'react';
import { Box } from "./cube";

export const LightSource = () => {
    return (
      <>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
      </>
    );
  };

  
function stackFlowElem(title, array) {
  return (
    <div className='text-size-6 text-main border-t-[solid 0.15rem black] border-b-[solid 0.15rem black] font-w-400 overflow-hidden'>
        <div className='left-[19vw] animate-textLoopIn1 hover:animate-none m-2'>
            <h2>{title}</h2>
        </div>
        <div className='left-[09vw] flex m-2 flex-row z-[11] animate-textLoopIn hover:animate-none'>
            { array.map(e => {
                return <p className=""key={e}>{e}</p>
            }) }
        </div>
       
    </div>
  )
}

function stackElem(title, array) {
    return (
        <div>
          <div className='group text-size-6 text-main border-t-[solid 0.15rem black] transition-all duration-500 ease-in-out border-b-[solid 0.15rem black] font-w-400 overflow-hidden'>
            <div className='left-[19vw] m-2 animate-textIn group-hover:text-[2rem] group-hover:z-[12] transition-all duration-750 '>
                <h2>{title}</h2>
            </div>
            <div>
                <h2 className='absolute top-[20vh] left-[25vw] text-[0px] m-2 animate-textIn group-hover:responsive-text-size-h0 transition-all duration-750  group-hover:z-[12]'>{title}</h2>
            </div>
        
            <div className='absolute animate-textIn top-[40vh] m-2  z-[11] left-[25vw] transition-all duration-750'>
                {array.map((e,idx) => {
                    return <p className={`w-[43vw] h-[auto] top-[calc(10vh)] text-[0px]  group-hover:text-[1rem]  group-hover:z-[12] transition-all duration-750`} key={e}>{e} </p>
                })}
           </div>
           
           {/* <div className='absolute w-[100vw] h-[15vh] bottom-9 overflow-visible'>
                    <Canvas>
                        <LightSource />
                         <Box />
                        {array.map((e,idx) => {
                            return <Box key={e} position={[idx*10,0,0]} />
 
                        })}
                   </Canvas>
           </div> */}
           </div>
           <div className='w-4 h-2 bg-inherit'/>
        </div>

    )
  }
 

function stackFlows() {
    
    const stacks = {
    "Those are Skills that I can you well or Properly": [''],
    Interpreter: ["Python", "TypeScript/JavaScript",],
    NativeLang : [ "C/C++" ],
    UsableOS : ["Linux/Ubuntu", "MacOS"],
    AI : ["Pytorch", "Scikit-learn"],
    FrontFramework : ["React", "ReactNative","Next.js"],
    BackFramework  : [ "Docker", "Nest.js"],
    DB : [ "MongoDB", "PostgreSQL", "MySQL"],
    ORM : [ "Mongoose", "TypeORM"],
    Math : [ "Diffential Equation", "Linear Algebra", "Monte Calro" ]
   }

   return (
    <div className={styles.stackFlows}>
        {Object.keys(stacks).map((e) => {
            return stackFlowElem(e, stacks[e])
        })}
    </div>
   )
}

function stackTable() {const stacks = {
    "About My Skills": ['In this page, I wrote the tech skills that I can use well or properly. Using well mean that I can use the langauge and environtal tools to build program and can find information that \
     requires for project. and Properly mean that I can use the langauge and understand inside of environmental or argorithm inside.'],
    Interpreter: ["Python", "TypeScript/JavaScript",],
    NativeLang : [ "C/C++" ],
    UsableOS : ["Linux/Ubuntu", "MacOS", "PintOs(learning)"],
    AI : ["Pytorch(learning)", "Scikit-learn"],
    FrontFramework : ["React", "ReactNative","Next.js"],
    BackFramework  : [ "Docker", "Nest.js"],
    DB : [ "MongoDB", "PostgreSQL", "MySQL", "WanDB(learning)"],
    ORM : [ "Mongoose", "TypeORM"],
    Math : [ "Diffential Equation(learning)", "Linear Algebra(learning)", "Monte Calro" ]
   }

   return (
    <div className="relativew-full h-full bg-fancyWhite ">
        {Object.keys(stacks).map(e => {
            return stackElem(e, stacks[e])
        })}
  
        
    </div>
   )
}
export default function Home() {
    const [game, setGame] = useState(false);
    useEffect(() => {
    },[game]);  
    const handleClick = (e) => {
        e.preventDefault();
        if(game) setGame(false);
        if(!game) setGame(true);
    }
    return (
        <div className="absolute h-[100vh] w-[100vw] background-image-center overflow-hidden">
        <div className='absolute h-[90vh] w-[90vw] border-4 background-image-center '>
            <main className={`relative flex flex-col  h-full w-full, texp-10 t-lg `}  >
                <div className='absolute sh-[2rem] w-[90vw] left-[80%] top-[2vh] text-size-2 font-dc' onClick={e => handleClick(e)}>Make it Flow!</div>
                {
                    game ? 
                     <div className="font-main w-full p-5 h-[90vh]  top-10 left-[90vw]  align-center pt-4 transition-all duration-500 ease-in-out opacity-1">
                      {stackFlows()}
                    </div> :
                     <div className="w-[100%] h-[90vh] font-main transition-all duration-500 ease-in-out opacity-1">
                            <img className='absolute  shadow-xl left-[22vw] top-[15vh] w-[50vw] h-[90vh] contrast-[0.9] brightness-[1]' src='/image/paper-texture/1-rot.jpg'/>
                      {stackTable()}
                   </div> 
            }       
            </main>
        </div>
        </div>
    )
} 
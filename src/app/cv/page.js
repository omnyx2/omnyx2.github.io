// pages/index.js
'use client'
import { useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CV from './cv'
import { Sphere } from 'three';

const education =[]
const volunterr = []
const award =[]
const project = []
const activities = []


export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        router.push('/');
    }, 800);
  }
  useEffect(() => {
    if(loading){
    setAnimation("animate-fadeOut");
    setLoading(true);
    }
  },[loading]);
 
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center">
       
      <div className={`absolute z-[1] mx-auto w-[70.7vh] h-[100vh] background-image-left paper-texture-3 paper-texture-3 animate-fadeIn ${animation}`} >
       <p onClick={handleClick} className="animate-pulse animate-textIn left-[20%] p-4 w-[60%] absolute top-[10%] text-balance text-center font-main text-xl"> &copy; Read Another </p>
       <p className="absolute top-[8rem] left-[0%] h-[50%] text-balance text-center font-main text-sm animate-textIn "> As an a person, who has a lot and various curiosity I just want to show to world that life doesn&apos;t needs to be align, as the law of natural is based on chaos, if you put effort then anything will be shine </p>
       <p className="absolute top-[80%] left-[0%] text-balance text-center font-main text-sm animate-textIn "> If the letter size is too small to read, I don&apos;t recommand to use &lt; ctrl + &gt; or &lt; command + &gt; it will be better to use &lt; ctrl + scroll &gt; or using touchpad to zooming Because this page have responsive design for all device </p>
        <div className="absolute top-[14rem] w-[70.7vh] h-[30vh] shadow-md bg-fancyWhite make-paper-inset">
        <Canvas>
        <mesh>
          <ambientLight intensity={0.1} />  
          <directionalLight color="red" position={[0, 0, 5]} />
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial />    
        </mesh>
       </Canvas>
          <p className='text-balance text-center pt-1 font-main text-sm animate-textIn'> Three.js: Red Sphere  </p>
        </div>
       
      </div>
    
      <div className={`absolute z-[1] mx-auto w-[70.7vh] h-[100vh] background-image-right paper-texture-3 paper-texture-3 animate-fadeIn ${animation}`}/>
      
      <main className={`translate-y-0 container mx-auto p-4 z-[2] m-0 ml-[50%] w-[70.7vh] h-[100vh] rounded-lg  color-drak article-p pr-6 animate-textIn ${animation}`}>
        {/* <div className={`${animation}`}>
        <h1 className="text-3xl font-bold mb-4">Jane Doe</h1>
        <p className="text-lg text-gray-600 mb-8">Frontend Developer</p>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <div>
            <h3 className="text-lg font-semibold">Frontend Developer</h3>
            <p className="text-gray-600">ABC Company - Jan 2020 to Present</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">XYZ University - Graduated in 2019</p>
          </div> */}
          <CV/>
        {/* </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-600">JavaScript</li>
            <li className="text-gray-600">React.js</li>
            <li className="text-gray-600">HTML</li>
            <li className="text-gray-600">CSS</li>
          </ul>
        </div>
        </div> */}
      </main>
    </div>
  )
}



import { educations, works, skills, langauges, projects} from './cv.data'


function templateBindJobCompanyPositionType1({job,company,position}) {
    return (
        <div className="article-p-2 py-1">

            <div>
                <h3>{job}</h3>
                <h4>{company}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}
function templateSkill({skill}) {
    return (
        <li>{skill}</li>
    )
}
function templateLanguage({langauge, level, score, grade}) {
    const BuildChart = ({chartMaxScore, myScore}) => {
        const chart = []
        for(let i=0; i<chartMaxScore; i++) {
            if(myScore > i){ chart.push(<p className="w-1em h-full bg-orange mr-[1px] " key={i} > </p>);}
            if(myScore <= i){ chart.push(<p className="w-1em h-full bg-[#ccc] mr-[1px]" key={i}>   </p>);}
        }
        
        return [...chart]
    }
  
  return <div className="article-p-2 py-[0.5em]">
    <div className='w-[22em] h-auto flex flex-row justify-between'>
        <div className='w-auto'>{langauge}:{level} </div>
        <div className='w-auto text-left'>{grade}</div>
    </div>
        <div className='ml-[2em] w-[20em] h-[0.5em] my-1 grid grid-cols-6 grid-flow-col'>
            <BuildChart chartMaxScore={score[0]} myScore={score[1]}/>
        </div>
    </div>
}
function templateEducation ({title, date, lines}) {
    return (
        <div className="article-p-2">
             <div className="grid grid-cols-cvwork">
                <h3>{date}</h3>
                <div>
                    { lines.map((item, index) => {
                        return <div key={index}> &#183; {item}</div>
                    })}
                </div>
             </div>
            
        </div>
    )
}
function templateWork({title, date, job, company, position, list}) {
  return(
    <div className="article-p-2 pt-1">
        <div className="grid grid-cols-cvwork">
            <div className=" ">
                <p className="text-[1em] ">{date}</p>
                <p>{position}</p>
            </div>
          
           
            <div className='w-full grid gird-row-5 grid-flow-row gap-0'>
            <div>
                <div>
                    <div className='w-[100%] flex justify-between'>
                        <div className='font-bold'>{job}</div>
                        <p className='font-notoserif text-[0.8em] font-[200]'>{company}</p>
                    </div>
                </div>
            </div>
            <div>
                    <h3 className="color-olive">{title}</h3>
                </div>
            { list.map((item, index) => {
                return <div key={index}>  &#183; {item}</div>
            })}
            </div>
        </div>
    </div>
  )
}

function templateProject({title, date, job, institution, position, list}) {
    return(
      <div className="article-p-2 pt-1">
          <div className="grid grid-cols-cvwork">
              <div className=" ">
                  <p className="text-[1em] ">{date}</p>
                  <p>{position}</p>
              </div>
              <div className='w-full grid gird-row-5 grid-flow-row gap-0'>
              <div>
                  <div>
                      <div className='w-[100%] flex justify-between'>
                          <div className='font-bold'>{job} &lt; {title} &gt; </div>
                          <p className='font-notoserif text-[0.8em] font-[200]'>{institution}</p>
                      </div>
                  </div>
              </div>
              { list.map((item, index) => {
                  return <div key={index}>  &#183;  {item}</div>
              })}
              </div>
          </div>
      </div>
    )
  }

function profile() {
    return (
        <div className='flex flex-row justify-between article-p-2'>
            <div>
                <p className='w-[100%] text-[2em] font-bold'>
                    Ryu, Hyun Seok
                </p>
                <p className='text-[1.5em] text-bold'>
                    Backend Developer
                </p>
            </div>
            <div> 
                <div className="h-[1.5em]"/>
                <p className=' w-[10vw] text-[1.4em] font-bold'>
                    contact
                </p>
                
                <p className='text-[1em] article-p-2  text-bold '>
                    Seoul, South Korea
                </p>
                <p className='text-[1em] article-p-2  text-bold'>
                    hyeonseok@gm.gist.ac.kr
                </p>
                <p className='text-[0.8em] article-p-2  text-bold'>
                    +82 10-2590-2746
                </p>
            </div>
        </div>
    )
}

function CV() {
    return (
        <div className='article-p-2'>
            <div className='h-[10vh]'>
                {profile()}
            </div>
            <div className="text-[1.4vh] text-fancyBlue font-bold font-main indent-[1.5em] line-clamp-1 pt-0" >Summary</div>
            <div className="leading-0 text-[1em] ml-[2em] article-p-2 pb-2  indent-0 ">
                Highly motivated and results-oriented Full Stack Developer with experience in building and managing web applications, machine learning systems, and automation projects. Proven ability to lead and collaborate effectively in both team and individual settings. Possesses a strong foundation in various programming languages and frameworks, including JavaScript (React, Next.js), C/C++, Python (PyTorch, Scikit-learn), SQL databases, and cloud platforms (Docker).
            </div>
            <div className="mt-1">
                <p className='text-[1.3vh] text-fancyBlue indent-[1.5em] font-main font-bold pt-0'>Work Experience</p>
                {works.map((work, index) => {
                    return templateWork({...work})
                })}
            </div>
            <div className=" text-oliva">
                <p className="text-[1.3vh] text-fancyBlue indent-[1.5em] font-main font-bold pt-0 ">Projects</p>
                {projects.map((project, index) => {
                    return templateProject({...project})
                })}
            </div>
            <div>
            <p className="text-[1.3vh] text-fancyBlue indent-[1.5em] font-main font-bold pt-0 ">Education</p>
                {educations.map((education, index) => {
                    return templateEducation(education)
                })}
            </div>
            <div>
            <p className="text-[1.3vh] text-fancyBlue indent-[1.5em] font-main font-bold pt-1 ">Skills</p>
                <ul>
                {skills.map((skill, index) => {
                    return <p className="article-p" key={index}>{skill}</p>
                })}
                </ul>
            </div>
            <div>
            <p className="text-[1.3vh] text-fancyBlue indent-[1.5em] font-main font-bold pt-1 ">Language</p>
            <div className='grid grid-cols-3 '>
                {Object.keys(langauges).map((langauge, index) => {
                    return templateLanguage(langauges[langauge])
                })}
            </div>    
            </div>
        </div>
    )
}

export default CV
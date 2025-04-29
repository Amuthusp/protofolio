import { MdDescription } from "react-icons/md"
import ImageWebsite1 from "../assets/ecommerce-websites.jpg"
import ImageWebsite2 from "../assets/food-ecommerce.jpg"
import ImageWebsite3 from "../assets/website-blog.jpg"
export default function Projects(){
 const config={
    projects:[
        {
            image:ImageWebsite1,
            Description:'A ecommerce Website. Built with Mern Stack',
            link:'https://favicon.io/emoji-favicons/beating-heart/'
        },
        {
            image:ImageWebsite2,
            Description:'Food Ecommerce website like swiggy, Built with Angular & .Net',
            link:'https://www.google.com/search?q=whatsapp&rlz=1C1GCEA_enIN1136IN1136&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQ0zNTEzMjg3OTRqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8'
        },{
            image:ImageWebsite3,
            Description:'Basic Blog Website. Built with Next js and MangoDB',
            link:'https://favicon.io/emoji-favicons'
        }
    ]
 }

 return <section id="projects" className=" flex flex-col px-5 py-20 justify-center bg-secondary">
    <div className="w-full">
        <div className="flex flex-col py-5 ">
        <h1 className='text-4xl text-white border-b-4  border-secondary mb-5 w-[110px] font-bold w-[170px] '>projects</h1>
        <p>These are some of my best project. I have built these with react,MERN,vanilla.Css Check them out. </p>
    </div>
     </div>
        
    <div className="w-full">
    <div className="flex flex-col md:flex-row px-10 gap-5">
        {config.projects.map((project)=>(
            
            <div className="relative">
        <img className="h-[200px] w-[500px]" src={project.image}/>
        <div className="project-desc">
            <p className="text-center py-5 px-5">{project.Description}</p>
            <div className="flex justify-center">
            <a className="btn" target="_blank" herf={project.link}>View project</a>
        </div>
        </div>
        

        </div>
        ))}
        
      
    </div>
        
    </div>
     </section>   
}
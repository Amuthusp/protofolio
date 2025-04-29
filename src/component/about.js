
import AboutImg from '../assets/about.png'
export default  function About(){
    const config={
        line1:' Hi, My Name  is SP Amuthu. I am a Full Stack Developer .I build beautiful websites with React.js and tailwind CSS',
        line2:'I am Proficient in Frontend skills like React.js, Redux, ReduxToolKit, Axiox,Tailwind Css, Sass, Css3 and many more ',
        line3:'In backend I know Node.js, Express.js, SQL, Python and Javascript'
    }
    return <section id='about' className='flex  flex-col md:flex-row bg-primary px-5'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg}/>
        </div>  
        <div className=  ' md:w-1/2 flex justify-center' >
              <div className='flex flex-col justify-center text-white '>
              <h1 className='text-4xl text-white border-b-4  border-primary mb-5 font-bold w-[170px] '>About Me</h1>
              <p className='text-white pb-5 '>{config.line1}</p>
              <p className='pb-5' >{config.line2} </p>
              <p>{config.line3} </p>
              </div>
          
        </div>
    </section>
}
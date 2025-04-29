
import ResumeImg from '../assets/resume.jpg'
export default  function Resume(){
    const config={
        link:'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf'
    }

    return <section id='resume' className='flex  flex-col md:flex-row bg-primary px-5'>
        <div className='md:w-1/2 py-5 flex  justify-center md:justify-end '>
            <img className='w-[200px]' src={ResumeImg}/>
        </div>  
        <div className=  ' md:w-1/2 flex justify-center' >
              <div className='flex flex-col justify-center text-white '>
              <h1 className='text-4xl text-white border-b-4  border-primary mb-5 font-bold w-[140px] '>Resume</h1>
              <p className='text-white pb-5 '> You can view my Resume <a  className="btn" href={config.link}>Download</a> </p>
              </div>
          
        </div>
    </section>
}
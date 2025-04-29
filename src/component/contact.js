
export default  function  Contact(){

    const config={
        email:'amuthuspdhrcse@gmail.com',
        phone:'6374959199'
        

    }
    return <section id="contact" className='flex  flex-col  bg-secondary px-5 py-32'>
          
        <div className=  '  flex  flex-col items-center' >
              
              <h1 className='text-4xl text-white border-b-4  border-primary mb-5 font-bold w-[140px] '>Contact</h1>
              <p className='text-white pb-5 py-5 '>If you want to discuss more  in detail, please contact me</p>
            <p className="py-5"> <span className='font-bold '>Email:</span>{config.email}</p>
            <p> <span className='font-bold '>Mobile:</span> {config.phone}</p>
            
        </div>
    </section>
}
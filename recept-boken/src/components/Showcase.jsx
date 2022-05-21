const Showcase = () => {
  return (
    <>
      <section className='bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-center'>
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                Välkommen till
                <span className='text-info'> Recept Boken</span>
              </h1>
              <p className='lead my-4'>
                Välkommen till recept boken: En websida som hjälper dig att
                smaka på den utsökta maten genom att ta upp de berömda recepten.
                Recepten hämtar vi för dig genom ett API anrop till themealdb
              </p>

              <button className='btn btn-info bg-lg mb-3'>
                <a href='https://themealdb.com' className='link-light'>
                  Läs mer om themealdb.com
                </a>
              </button>
            </div>
            {/* <img
              className='img-fluid w-50 d-none d-sm-block'
              src='/showcase.png'
              alt=''
            /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase

import { Link } from 'react-router-dom'

const FoodItem = () => {
  return (
    <>
      <section className='p-5'>
        <div className='container'>
          <div className='row'>
            <div className='row text-center'>
              <div className='col-md'>
                <div className='card bg-light text-dark mb-2'>
                  <img src='/fishpie' className='card-img-top' alt='...' />
                  <div className='card-body text-center'>
                    <h5 className='card-title mb-3'>Fish Pie</h5>
                    <p className='card-text'>
                      Put the potatoes in a large pan of cold salted water and
                      bring to the boil. Lower the heat, cover, then simmer
                      gently for 15 minutes until tender.
                    </p>
                    <Link
                      to='#tothismealdetailpageprop'
                      className='btn btn-primary'
                    >
                      Gå till maten på detalj
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md'>
                <div className='card bg-light text-dark mb-2'>
                  <img
                    src='/reacheadofish'
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body text-center'>
                    <h5 className='card-title mb-3'>Recheado Masala Fish</h5>
                    <p className='card-text'>
                      Soak all the spices, ginger, garlic, tamarind pulp and
                      kashmiri chilies except oil in vinegar. Add sugar and
                      salt. Also add turmeric powder.
                    </p>
                    <Link
                      to='#tothismealdetailpageprop'
                      className='btn btn-primary'
                    >
                      Gå till maten på detalj
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md'>
                <div className='card bg-light text-dark mb-2'>
                  <img src='/escofish' className='card-img-top' alt='...' />
                  <div className='card-body text-center'>
                    <h5 className='card-title mb-3'>Escovitch Fish</h5>
                    <p className='card-text'>
                      Rinse fish; rub with lemon or lime, seasoned with salt and
                      pepper or use your favorite seasoning. I used creole
                      seasoning. Set aside or place.
                    </p>
                    <Link
                      to='#tothismealdetailpageprop'
                      className='btn btn-primary'
                    >
                      Gå till maten på detalj
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FoodItem

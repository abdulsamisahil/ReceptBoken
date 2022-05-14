const SearchRecipe = () => {
  return (
    <>
      <section className='bg-primary text-light p-4'>
        <div className='container'>
          <div className='d-md-flex align-items-center justify-content-between'>
            <h3 className='mb-3 mb-md-0'>Sök för recept</h3>
            <div className='input-group'>
              <input
                type='text'
                className='form-control w-25'
                placeholder='Ange mat här...'
              />
              <button className='btn btn-dark btn-lg' type='button'>
                Sök
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchRecipe

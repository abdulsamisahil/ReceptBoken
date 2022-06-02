
const SearchRecipe = ({ setSearch, requestApi, value, meals }) => {

  const handleSearch = () => {

   /*  if (meals.length === 0) {
      return (
        <div className="container">Ingen recept hittades...</div>
      )  
    } */
    if (value !== '') {
      requestApi()
      setSearch('')
    } else {
      alert('Vänligen mata in matnamn')
      return
    }
  }
  return (
    <>
      <section className='text-dark p-4'>
        <div className='container'>
          <div className='d-md-flex align-items-center justify-content-between'>
            <h3 className='mb-3 mb-md-0'>Sök efter recept</h3>
            <div className='input-group'>
              <input
                type='text'
                className='form-control w-25'
                placeholder='Ange mat här...'
                value={value}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <input
                className='btn btn-dark btn-lg'
                type='button'
                value='Sök'
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchRecipe

import React, { useEffect, useState, useRef } from 'react';

const SearchRecipe = (props) => {
  const inputRef = useRef();


  const search = (event) => {
    if (event.keyCode === 13) {
      fetchRecipes();
    }
  }

  const fetchRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => {
        props.setMeals(data.meals);
      })

  }


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
                ref={inputRef}
                onKeyUp={search}
              />
              <button className='btn btn-dark btn-lg' type='button' onClick={() => { fetchRecipes() }}>
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

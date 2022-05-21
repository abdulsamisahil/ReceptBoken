import axios from 'axios'

export const getFood = async (foodName) => {
  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`

  const response = await axios.get(API_URL)

  return response.data.meals
}

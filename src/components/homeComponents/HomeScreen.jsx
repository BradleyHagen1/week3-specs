import { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import RecipeContainer from './RecipeContainer'
import axios from 'axios'


const HomeScreen = () => {  
  const [recipes, setRecipes]=useState([])
const url = 'https://recipes.devmountain.com'

  const getRecipes = () => {
    console.log('hit')
    axios
        .get(`${url}/recipes`)
        .then((res) => {
          setRecipes(res.data)
          console.log(res.data)
        })

        .catch(err => console.log(err)) 
  }
  
  useEffect (() => {
    getRecipes()
  },[]) 

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  )
}


export default HomeScreen
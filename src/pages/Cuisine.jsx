import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CardCuisine, Grid } from '../components/styles/Container.styled';

function Cuisine() {

  const [ cuisine, setCuisine ] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const recipes = await data.json();
    setCuisine(recipes.results);

  }

  useEffect(()=> {
    getCuisine(params.type)
    console.log("ulaz");
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map(item=> {
        return(
          <CardCuisine key = {item.id}>
            <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
          </CardCuisine>
        )
      })}
    </Grid>
  )
}

export default Cuisine
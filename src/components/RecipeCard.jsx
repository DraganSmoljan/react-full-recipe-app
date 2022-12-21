import React from 'react'

function RecipeCard({title, image}) {
  return (
    <>
    <p>{title}</p>
    <img src={image} alt="" />
    </>
  )
}

export default RecipeCard
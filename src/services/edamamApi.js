import { useState, useEffect } from "react";

export const GetRecipes = () => {
  const [recipesData, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const ID = "d3936985";
      const KEY = "e1971e786db3a05b837cfd472cbd39f0";

      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`
        );
        const recipesData = await response.json();
        setRecipes(recipesData.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, [query]);

  return [recipesData];
};

export default GetRecipes;

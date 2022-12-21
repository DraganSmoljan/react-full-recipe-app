import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import RecipeCard from "../components/RecipeCard";
import { Card, Gradient, Grid } from "../components/styles/Container.styled";


function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const params = useParams();

    useEffect(()=>{
        getSearched(params.searched);
    },[params.searched])

    const getSearched = async (searchedParams)=> {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${searchedParams};
        `)
        const searchedRecipes = await api.json();
        setSearchedRecipes(searchedRecipes.results);
        console.log("result", searchedRecipes)

    }

  return (
    <Grid>
        {
            searchedRecipes.map((result)=> {
                return(
                    <Card key={result.id}>
                        <Link to={"/recipe/" + result.id}>
                            <RecipeCard title={result.title} image={result.image} />
                        </Link>
                        <Gradient/>
                    </Card>
                )
            })
        }
    </Grid>
  )
}

export default Searched
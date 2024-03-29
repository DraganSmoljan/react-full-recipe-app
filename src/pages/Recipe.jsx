
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DetailWrapper, Info, Button } from "../components/styles/Container.styled";


function Recipes() {

  const params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    fetchDetails(params.name)
  }, [params.name]);

  const fetchDetails = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const details = await api.json();
    setDetails(details);
  }


  return (
    <DetailWrapper
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 0.5}}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (<div>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </div>
        )}
        {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>
        )}

      </Info>
    </DetailWrapper>
  )
}

export default Recipes
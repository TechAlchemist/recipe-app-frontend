import { useState } from 'react';
import RecipeContainer from '../components/RecipeContainer';

const HomePage = (props) => {

    const [ searchState, setSearchState ] = useState({
        search: ''
    });

    const [recipesState, setRecipesState] = useState({
        recipes: null
    })

    function handleChange(event) {
        setSearchState((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));   
    }

    function callAPI(query) {
        let url = 
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=True&instructionsRequired=True&instructionsRequired=True&apiKey=${process.env.REACT_APP_API_KEY}`
    
        return fetch(url)
        .then(res => res.json() )
        .then(recipes => setRecipesState({recipes: recipes}))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        callAPI(searchState.search)
    }


    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                    type='text' 
                    name='search'
                    placeholder='recipe'
                    onChange={handleChange} 
                    value={searchState.search}
                    id='search'
                />
                
                <button type='submit' > Search </button>
            </form>

            <div>
                {
                recipesState.recipes &&  
                    <RecipeContainer recipes={recipesState.recipes.results} /> 
                }
            </div>
        

        </div>
    )
}

export default HomePage;
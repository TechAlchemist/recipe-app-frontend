import React from 'react';
import Recipe from './Recipe';

function RecipeContainer( {recipes } ) {
    return (
        <div>
            <h1> Recipe Container </h1>
            { 
            recipes.map((recipe, idx) => 
                <Recipe key={idx} recipe={recipe} />
                )
             }    
    
        </div>
    );
}

export default RecipeContainer;
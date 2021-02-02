

function Recipe( { recipe } ) {
    return (
        <div>
            <h1> {recipe.title} </h1>
            <img src={recipe.image} alt={recipe.title} />
            <hr />
        </div>
    );
}

export default Recipe;
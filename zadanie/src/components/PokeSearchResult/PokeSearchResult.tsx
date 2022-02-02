import React from "react";
import"./PokeSearchResult.css";

const PokeSearchResult = () => {

    const selectedPokemon = true;
    return (
        <div className="poke-result-card">
            {
                    selectedPokemon
                    ?(
                        <div>
                            {/*add img*/}
                            <p>Name: Pikachu</p>
                            <p>Id: Some id</p>
                            <p>Height: some height</p>
                            <p>Weight: some weight</p>
                            <p>Base exp:100xp</p>
                        </div>
                    )
                    :(
                        <h2>Welcome to the Pokedex</h2>
                    )}

        </div>
    );
}

export default PokeSearchResult;
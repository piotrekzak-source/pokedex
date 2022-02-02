import React from "react";
import Pokedex from "./Pokedox/Pokedex";
import "./App.css";

interface AppState {
	searchField:string;
	allPokemons:any;
	searchedPokemons:any;
	selectedPokemon:any;
}



class App extends React.Component<any, AppState> {
	state = {
		searchField: "",
		allPokemons: [],
		searchedPokemons: [],
		selectedPokemon:undefined,
	};

	render() {
		return (
			<div className="App">
				<h1>Pokedex</h1>
				<Pokedex />
			</div>
		);
	}
}

export default App;

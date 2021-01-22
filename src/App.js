import React from "react";
import "./styles.css";
import { mockPokemonData } from "./mock/pokeData";
import PokeCard from "./components/PokeCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: mockPokemonData
    };
  }

  pokeCards() {
    console.log(mockPokemonData);
    return this.state.cards.map((item) => (
      <PokeCard key={item.name} item={item} />
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to your second mini challenge!</h1>
        {this.pokeCards()}
      </div>
    );
  }
}
export default App;

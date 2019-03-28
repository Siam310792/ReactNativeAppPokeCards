
import React from "react";
import { SearchBar } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
//import SearchBarPokemon from "../components/SearchBarPokemon";

class SearchBarPokemon extends React.Component {
   
  

    render() {
    
      return (
        <SearchBar
          placeholder="Type Here..."
          onChange={HomeScreen.handleNameChange}
          nbItem={HomeScreen.state.itemCount}
          value={HomeScreen.state.pokemonName}
        />
      );
    }
  }
export default SearchBarPokemon
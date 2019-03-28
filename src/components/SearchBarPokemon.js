
import React from "react";
import { SearchBar } from "react-native-elements";

function SearchBarPokemon(props) {

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={props.onChange}
      nbItem={props.nbItem}
      value={props.value}
    />
  );
}

export default SearchBarPokemon
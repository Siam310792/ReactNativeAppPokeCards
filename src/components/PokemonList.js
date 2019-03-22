import React from "react";
import { FlatList } from "react-native";
import PokemonListItem from "./PokemonListItem";

function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => <PokemonListItem card={item} />}
      keyExtractor={card => card.id}
      numColumns={2}
    />
  );
}

export default PokemonList;

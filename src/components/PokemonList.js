import React from "react";
import { FlatList } from "react-native";
import PokemonListItem from "./PokemonListItem";

function PokemonList({ pokemons, navigation }) {
  return (
    <FlatList
      style={{
        flex: 0
      }}
      data={pokemons}
      renderItem={({ item }) => (
        <PokemonListItem card={item} navigation={navigation} />
      )}
      keyExtractor={card => card.id}
      numColumns={2}
    />
  );
}

export default PokemonList;

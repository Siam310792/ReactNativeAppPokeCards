import React from "react";
import { Image } from "react-native";

function PokemonListItem({ card }) {
  return (
    <Image
      style={{
        height: 200,
        width: 150,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        alignContent: "space-around"
      }}
      source={{ uri: card.imageUrl }}
    />
  );
}

export default PokemonListItem;

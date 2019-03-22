import React from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import PokemonList from "../components/PokemonList";
import SearchBarPokemon from "../components/SearchBarPokemon";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  render() {
    return (
      <View>

<SearchBarPokemon>

</SearchBarPokemon>

      <PokemonList
        pokemons={this.state.cards}
        navigation={this.props.navigation}
      />
      
      </View>
      
    );
  }

  fetchData = () => {
    fetch("https://api.pokemontcg.io/v1/cards?pageSize=10")
      .then(results => {
        console.log(results);
        return results.json();
      })
      .then(data => {
        this.setState({ cards: data.cards });
      })
      .catch(() => {});
  };

  // Fetch de l'api
  componentDidMount() {
    this.fetchData();
  }
}

export default HomeScreen;

import React from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar } from "react-native-elements";
import PokemonList from "../components/PokemonList";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  render() {
    return (
      <PokemonList
        pokemons={this.state.cards}
        navigation={this.props.navigation}
      />
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

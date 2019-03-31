import React from "react";
import { View, AsyncStorage } from "react-native";
import { Text, Image } from "react-native-elements";
import PokemonList from "../components/PokemonList";
import buttonStyles from "../style/ButtonStyles";

  export default class FavoritesScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: this.props.navigation.getParam("cards"),
        navigation : this.props.navigation.getParam("navigation")
      };
    }

    async getKey() {
      try {
        const value = await AsyncStorage.getItem('favoritesStore');
        this.setState({cards: value});
      } catch (error) {
        console.log("Error retrieving data" + error);
      }
    }

    render() {
      return (
        <PokemonList
            pokemons={this.state.cards}
            navigation={this.props.navigation}
        />
      );
    }
  }

  //componentDidMount = () => AsyncStorage.getItem('favorites').then((value) => this.setState({ 'favoritesCards': value }))

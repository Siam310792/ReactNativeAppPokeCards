import React from "react";
import { View, AsyncStorage } from "react-native";
import { Text, Image } from "react-native-elements";
import PokemonList from "../components/PokemonList";
import buttonStyles from "../style/ButtonStyles";

  export default class FavoritesScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favoritesCards: this.retrieveItem("favorites").then((goals) => {
            this.setState({favoritesCards : goals});
          }).catch((error) => {
          console.log('Promise is rejected with error: ' + error);
          }), 
        navigation : this.props.navigation.getParam("navigation")
      };
    }

    async retrieveItem(key) {
      try {
        const retrievedItem =  await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
      } catch (error) {
        console.log(error.message);
      }
        return
      };

    render() {
      return (
        <Text>Page des favoris</Text>
        /*<PokemonList
            pokemons={this.state.favoritesCards}
            navigation={this.props.navigation}
        />*/
      );
    }
  }

  //componentDidMount = () => AsyncStorage.getItem('favorites').then((value) => this.setState({ 'favoritesCards': value }))

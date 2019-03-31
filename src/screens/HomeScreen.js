import React from "react";
import { View, AsyncStorage, TouchableOpacity } from "react-native";
import PokemonList from "../components/PokemonList";
import Navigationbar from "../components/Navigationbar";
import Store from '../Store';
import SearchBarPokemon from "../components/SearchBarPokemon";
import buttonStyles from "../style/ButtonStyles";
import { Image, Text } from "react-native-elements";
import styles from "../style/Styles";


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentPage: Store.currentPage,
      itemCount: 0,
      nbPage: 0,
      pokemonName: Store.pokemonName
      //favorites : []
    };
  }

  _onPressButtonFavorites() {
    this.props.navigation.navigate("Favorites", { cards : this.state.cards, navigation : this.props.navigation });
  }

  firstPage = () => {
    let currentPage = this.state.currentPage;
    if (currentPage > 1) {
      this.fetchData(1);
    }
  };

  lastPage = () => {
    let currentPage = this.state.currentPage;
    if (currentPage < this.state.nbPage) {
      this.fetchData(this.state.nbPage);
    }
  };

  nextPage = () => {
    let currentPage = this.state.currentPage;
    if (currentPage < this.state.nbPage) {
      currentPage++;
      this.fetchData(currentPage);
    }
  };

  previousPage = () => {
    let currentPage = this.state.currentPage;
    if (currentPage > 1) {
      currentPage--;
      this.fetchData(currentPage);
    }
  };

  handleNameChange = pokemonName => {
    Store.pokemonName = pokemonName
    
    this.setState({ pokemonName });
  };

  //the functionality of the retrieveItem is shown below
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
      <View>
        <View>
          <SearchBarPokemon value={this.state.pokemonName} onChange={this.handleNameChange} nbItem={this.state.itemCount}/>
          <TouchableOpacity activeOpacity={0.5} onPress={this._onPressButtonFavorites.bind(this)}>
            <Image
              source={require('../../assets/goldstar.png')}
              style={buttonStyles.imageIconStyle}
            />
          </TouchableOpacity>
        </View>


        <Navigationbar
          currentPage={this.state.currentPage}
          firstPage={this.firstPage.bind(this)}
          previousPage={this.previousPage.bind(this)}
          nextPage={this.nextPage.bind(this)}
          lastPage={this.lastPage.bind(this)}
          nbPage={this.state.nbPage}
        />

        <PokemonList
          pokemons={this.state.cards}
          navigation={this.props.navigation}
        />
      </View>
    );
  }

  
  fetchData = (currentPage) => {
    let request = null
    
    request = new Request(`https://api.pokemontcg.io/v1/cards?page=${currentPage}&pageSize=32&name=${this.state.pokemonName}`)


    fetch(request)
      .then(results => {
        const itemCount = results.headers.get("Total-Count");
        const totalPage =
          Math.trunc(itemCount / results.headers.get("Page-Size")) + 1;
        this.setState({ nbPage: totalPage, itemCount: itemCount });
        return results.json();
      })
      .then(data => {
        this.setState({ cards: data.cards });
      })
      .catch(() => {});
      Store.currentPage = currentPage
      this.setState({ currentPage });
  };

  // Fetch de l'api
  componentDidMount() {
    this.fetchData(this.state.currentPage);
    //AsyncStorage.getItem('favorites').then((value) => this.setState({ 'favorites' : value }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokemonName !== this.state.pokemonName) {
      this.fetchData(1);
    }
  }
}

export default HomeScreen;

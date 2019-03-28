import React from "react";
import {View} from "react-native";
import { SearchBar } from "react-native-elements";
import PokemonList from "../components/PokemonList";
import Navigationbar from "../components/Navigationbar";
import Store from '../Store';
import SearchBarPokemon from "../components/SearchBarPokemon";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentPage: Store.currentPage,
      itemCount: 0,
      nbPage: 0,
    pokemonName: "",
    pokemonExactName: ""
    };
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
    if (this.state.pokemonExactName !== "") {
      this.props.history.push('/index')
    }
    this.setState({ pokemonName, pokemonExactName: "" });
  };



  render() {
    return (
      <View>
<SearchBar value={this.state.pokemonName} onChange={this.handleNameChange} nbItem={this.state.itemCount}/>


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
    this.state.pokemonExactName !== "" ?
    request = new Request(`https://api.pokemontcg.io/v1/cards?page=${currentPage}&pageSize=32&name="${this.state.pokemonExactName}"`)
    :
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
      console.log(this.state.currentPage)
      Store.currentPage = currentPage
      this.setState({ currentPage });
      console.log(this.state.currentPage)
  };

  // Fetch de l'api
  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokemonName !== this.state.pokemonName) {
      this.fetchData(1);
    }
  }

}

export default HomeScreen;

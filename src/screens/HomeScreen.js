import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  StyleSheet,
  Header
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar } from "react-native-elements";
import PokemonList from "../components/PokemonList";
import styles from "../style/Styles";

function NavigationBar(props) {
  return (
    <View style={styles.navBar}>
      <View
        style={{
          flexDirection: 'row',
          margin: "auto",
          lineHeight: 30,
          textAlign: "center",
          verticalAlign: "middle",
          justifyContent: "space-between",
          width: "15%"
        }}
      >
        {props.currentPage === 1 ? (
          <Button
            style={styles.previousButton}
            title="<<"
            color='#f1f1f1'
            onPress={props.firstPage}
            disabled
          />
        ) : (
          <Button
            style={styles.previousButton}
            title="<<"
            color='#f1f1f1'
            onPress={props.firstPage}
          />
        )}
        {props.currentPage === 1 ? (
          <Button
            style={styles.previousButton}
            title="<"
            color='#f1f1f1'
            onPress={props.previousPage}
            disabled
          />
        ) : (
          <Button
            style={styles.previousButton}
            title="<"
            color='#f1f1f1'
            onPress={props.previousPage}
          />
        )}
      </View>

      <Text>{props.currentPage}</Text>

      <View
        style={{
          flexDirection: 'row',
          margin: "auto",
          lineHeight: 30,
          textAlign: "center",
          verticalAlign: "middle",
          justifyContent: "space-between",
          width: "15%"
        }}
      >
        {props.currentPage === props.nbPage ? (
          <Button
            style={styles.nextButton}
            title=">"
            color='#f1f1f1'
            onPress={props.nextPage}
            disabled
          />
        ) : (
          <Button
            style={styles.nextButton}
            title=">"
            color='#f1f1f1'
            onPress={props.nextPage}
          />
        )}
        {props.currentPage === props.nbPage ? (
          <Button
            style={styles.nextButton}
            title=">>"
            color='#f1f1f1'
            onPress={props.lastPage}
            disabled
          />
        ) : (
          <Button
            style={styles.nextButton}
            title=">>"
            color='#f1f1f1'
            onPress={props.lastPage}
          />
        )}
      </View>
    </View>
  );
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentPage: 1,
      itemCount: 0,
      nbPage: 0
    };
  }

  render() {
    return (
      <View>
        <NavigationBar
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

  fetchData = currentPage => {
    let request = new Request(
      `https://api.pokemontcg.io/v1/cards?page=${currentPage}&pageSize=32`
    );

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
    currentPage = currentPage;
    this.setState({ currentPage });
  };

  // Fetch de l'api
  componentDidMount() {
    this.fetchData();
  }
}

export default HomeScreen;

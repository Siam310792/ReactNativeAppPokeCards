import React from "react";
import { Image, TouchableOpacity, AsyncStorage } from "react-native";

class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      navigation: props.navigation
    };
  }

  _onPressButton() {
    this.props.navigation.navigate("Details", { card: this.props.card, name: this.props.card.name });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPressButton.bind(this)}
        underlayColor="white"
      >
        <Image
          style={{
            height: 220,
            width: 150,
            margin:16,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-start",
            alignContent: "space-around"
          }}
          source={{ uri: this.state.card.imageUrl }}
        />
      </TouchableOpacity>
    );
  }
}

export default PokemonListItem;

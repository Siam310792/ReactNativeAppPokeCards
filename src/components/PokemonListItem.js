import React from "react";
import { Image, TouchableOpacity, Alert } from "react-native";

class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      navigation: props.navigation
    };
  }

  _onPressButton() {
    this.props.navigation.navigate("Details", { card: this.props.card });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPressButton.bind(this)}
        underlayColor="white"
      >
        <Image
          style={{
            height: 200,
            width: 150,
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

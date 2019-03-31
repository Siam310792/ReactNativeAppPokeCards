import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Text } from "react-native-elements";

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card : this.props.navigation.getParam("card"),
      onFavorite : false,
      sourceImage : require('../../assets/whitestar.png')
    };
  }

  async storeItem(key, item) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

  _onPressStar() {
    if (this.state.onFavorite) {
      this.setState( { sourceImage: require('../../assets/goldstar.png') } )
      this.setState( { onFavorite : false })
      storeItem('favorites', this.state.card)
    } else {
      this.setState( { sourceImage: require('../../assets/whitestar.png') } )
      this.setState( { onFavorite : true })
    }
  }

  render() {
   
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          background: "green"
        }}
      >
      <TouchableOpacity activeOpacity={0.5} onPress={ this._onPressStar.bind(this) } >
      <Image source={this.state.sourceImage}  
        style={{ width: 20, height: 20 }} 
        />
      </TouchableOpacity>

        <Text h4>{this.state.card.name}</Text>
        <Image
          source={{ uri: this.state.card.imageUrl }}
          style={{ width: 400, height: 550 }}
        />
      </View>
    );
  }
}

export default DetailsScreen;

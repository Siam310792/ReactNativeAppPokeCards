import React from "react";
import { View, TouchableOpacity, AsyncStorage } from "react-native";
import { Image, Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons'

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card : this.props.navigation.getParam("card"),
      onFavorite : false,
      favoritesArray : []
    };
  }

  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state
    return {      
      headerTitle: `${params.name}`,
      headerRight: (            
        //<Icon.Button name="favorite-border" backgroundColor="transparent" color="#007aff" onPress={() => this._onPressStar.bind(this)} />
        <Icon.Button name="favorite-border" backgroundColor="transparent" color="#007aff" />
      )
    }
  }

  async storeItem(key, item) {
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteItem(key, item) {
    try {
        var jsonOfItem = await AsyncStorage.deleteItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

  _onPressStar() {
    if (this.state.onFavorite) {
      this.deleteItem('favorites', this.state.card);
      this.setState({onFavorite:false});
    } else {
      this.storeItem('favorites', this.state.card);
      this.setState({onFavorite:true});
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          background: "green"
        }}
      >

        <Image
          source={{ uri: this.state.card.imageUrl }}
          style={{ width: 400, height: 550 }}
        />
      </View>
    );
  }

  componentDidMount() {
    
  }
}

export default DetailsScreen;

import React from "react";
import { View, ScrollView } from "react-native";
import { Image, Text } from "react-native-elements";
class DetailsScreen extends React.Component {
  render() {
    const card = this.props.navigation.getParam("card");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text h4>{card.name}</Text>
        <Image
          source={{ uri: card.imageUrl }}
          style={{ width: 400, height: 550 }}
        />
      </View>
    );
  }
}

export default DetailsScreen;

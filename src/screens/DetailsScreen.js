import React from "react";
import { View ,ScrollView} from "react-native";
import { Image,Text } from "react-native-elements";
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     
        <Text h1>Pokemon</Text>
        <Image
        source={{ uri: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image/visual-reverse-image-search-v2_1000x560.jpg" }}
        style={{ width: 300, height: 500 }}/>
  
      </View>
    );
  }
}

export default DetailsScreen;

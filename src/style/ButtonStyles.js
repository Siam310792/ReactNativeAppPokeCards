import { StyleSheet } from "react-native";

export default buttonStyles = StyleSheet.create({
  previousButton: {
    flex: 0,
    color: "black",
    marginRight: 10,
    padding : 8
  },
  nextButton: {
    flex: 0,
    color: "black",
    marginLeft: 10,
    padding: 8
  },
  navBar: {
    flexDirection: 'row', 
    justifyContent:'space-around', 
    marginLeft:50,
    marginRight:50,
    marginTop:20
  },
  imageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});


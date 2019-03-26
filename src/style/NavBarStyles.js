import { StyleSheet } from "react-native";

export default navBarStyles = StyleSheet.create({
  navBar: {
    flexDirection: 'row', 
    justifyContent:'space-around', 
    marginLeft:50,
    marginRight:50,
    marginTop:20
  },
  navBarPrevious: {
    flex:1,
    flexDirection: 'row',
    paddingRight: "20%",
    lineHeight: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "15%"
  },
  navBarNext: {
    flex:1,
    flexDirection: 'row',
    paddingLeft:"20%",
    lineHeight: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "2%"
  }
});


import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  StyleSheet,
  Header
} from "react-native";
import navBarStyles from "../style/NavBarStyles";
import buttonStyles from "../style/ButtonStyles";


function Navigationbar(props) {
    return (
      <View >
      <View style={navBarStyles.navBar}>

      {props.currentPage === 1 ? (
        <View style={navBarStyles.navBarPrevious} >
            <Button
              style={buttonStyles.previousButton}
              title="<<"
              color='#f1f1f1'
              onPress={props.firstPage}
              disabled
            />
            <Button
              style={buttonStyles.previousButton}
              title="<"
              color='#f1f1f1'
              onPress={props.previousPage}
              disabled
            />
            </View>
          ) : (
        <View style={navBarStyles.navBarPrevious}>
            <Button
                style={buttonStyles.previousButton}
                title="<<"
                color='#f1f1f1'
                onPress={props.firstPage}
            />
            <Button
                style={buttonStyles.previousButton}
                title="<"
                color='#f1f1f1'
                onPress={props.previousPage}
            />
        </View>
          )}
  
        <Text>{props.currentPage}</Text>
  
        {props.currentPage === props.nbPage ? (
        <View style={navBarStyles.navBarNext}>
          
            <Button
              style={buttonStyles.nextButton}
              title=">"
              color='#f1f1f1'
              onPress={props.nextPage}
              disabled
            />
            <Button
              style={buttonStyles.nextButton}
              title=">>"
              color='#f1f1f1'
              onPress={props.lastPage}
              disabled
            />
            </View>
          ) : (
              <View style={navBarStyles.navBarNext}>
            <Button
              style={buttonStyles.nextButton}
              title=">"
              color='#f1f1f1'
              onPress={props.nextPage}
            />
            <Button
              style={buttonStyles.nextButton}
              title=">>"
              color='#f1f1f1'
              onPress={props.lastPage}
            />
            </View>
          )}
        </View>
      </View>
    );
  }

  export default Navigationbar
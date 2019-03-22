import React from "react";
import { View, Text, Button, Image } from "react-native";

function PokemonCard({card}){
  return <Image style={{width: 50, height: 50}} source={{uri: card.imageUrl}} />
} 

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      cards: [],
      currentPage: 0,
      itemCount: 0,
      nbPage: 0,
      pokemonName: "",
      pokemonExactName: ""
    }
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {
            this.state.cards.map(card => <PokemonCard card={card} />)
          }
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
    );
  }

fetchData = (currentPage) => {
  let request = null
  
  request = new Request(`https://api.pokemontcg.io/v1/cards?page=${currentPage}&pageSize=32&name=Charizard`)
 
  fetch(request, )
  .then(results => {
    console.log(results)
    const itemCount = results.headers.get("Total-Count")
    const totalPage = Math.trunc(itemCount/results.headers.get("Page-Size")) + 1
    this.setState({nbPage:totalPage, itemCount:itemCount})
    return results.json()
  }).then(data => {
    this.setState({cards:data.cards})
  })
  this.setState({currentPage})
}

  // Fetch de l'api
  componentDidMount() {
    this.fetchData(this.state.currentPage)
  }
}

export default HomeScreen;

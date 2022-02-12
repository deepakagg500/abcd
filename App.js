import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alphabet from "./components/Alphabet/Alphabet";
import AlphabetHome from "./components/AlphabetHome";
import AlphabetHomeV2 from "./components/AlphabetHomeV2";
import {Component} from "react";
import {availableColors} from "./constants/constants";


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      color:"#d94a3c"
    }
  }

  componentDidMount() {
    this.changeBackgroundColor();
  }

  changeBackgroundColor = () =>{
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    // let colorChose = availableColors[Math.floor(Math.random()*availableColors.length)]
    this.setState({
      color:randomColor
    });
  }
  render(){
    return (
        <View style={[styles.container,{backgroundColor:this.state.color}]}>
          <AlphabetHomeV2
              backGroundColor={this.changeBackgroundColor}
          />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  home: {
    flex:1
  }
});

import React, {Component} from "react";
import {Button, Dimensions, FlatList, ScrollView, StyleSheet, View} from "react-native";
import Alphabet from "./Alphabet/Alphabet";
import {availableAlphabets} from "../constants/constants";
import Draggable from "react-native-draggable";
import AlphabetHome from "./AlphabetHome";
import {shouldThrowAnErrorOutsideOfExpo} from "expo/build/environment/validatorState";

const {width,height} = Dimensions.get('window')

export default class AlphabetHomeV2 extends Component{

    constructor() {
        super();

        this.state={
            data: null
        }
    }

    componentDidMount() {
        let data = [];
        let count = 0
        availableAlphabets.forEach(letter =>{
            data.push({"letter":letter,"id":count});
            count = count+1
        })
        this.setState({
            data:data
        })
    }

    renderAlphabet = ({item}) => {
       return(
           <Alphabet
               width = {80}
               height = {80}
               fontSize = {15}

            currentAlphabet={item.letter}
        />)
    }

    render() {
        return(<View style={styles.alphabetHomeV2}>

              <FlatList data={this.state.data}
                        keyExtractor={(item, index) => item.id}
               renderItem={this.renderAlphabet}
               numColumns={4}
              >
              </FlatList>

            <View
                style={[{marginTop:20},{marginRight: width/10}]}
            >
            <Button
                title = {"change Background"}
                onPress={this.props.backGroundColor}
            />
            </View>
        </View>)
    }

}


const styles = StyleSheet.create({
    alphabetHomeV2: {
        marginTop: height / 10,
        marginLeft: width / 20,
        marginRight: width / 20,
        width:'100%',
    },
});


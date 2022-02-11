import React, {Component} from "react";
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import Alphabet from "./Alphabet/Alphabet";
import {availableAlphabets} from "../constants/constants";
import Draggable from "react-native-draggable";

const {width,height} = Dimensions.get('window')

export default class AlphabetHome extends Component{

    constructor() {
        super();
    }

       render() {
           return(<View style={styles.alphabetHome}>
                   <ScrollView
                       horizontal
                       pagingEnabled
                       showsHorizontalScrollIndicator={false}
                   >
                       {
                           availableAlphabets.map((alphabet,index) =>{
                               return(
                               <View
                                   key ={index}
                                   style={styles.alphabet}>
                                   <Draggable x={50} y={50}>
                                   <Alphabet
                                       currentAlphabet={alphabet}
                                   />
                                   </Draggable>
                               </View>
                               );
                           })
                       }

                   </ScrollView>
           </View>)
        }

    }


const styles = StyleSheet.create({
    alphabetHome: {
        flex:1
    },
    alphabet:{
        flex:1,
        alignItems:"center",
        width: width/2.5,
        marginTop: height/2
    }
});


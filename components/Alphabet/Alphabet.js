import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {availableColors} from "../../constants/constants";
import * as Speech from 'expo-speech';
import {setStatusBarNetworkActivityIndicatorVisible} from "expo-status-bar";
export default class Alphabet extends Component{

    constructor(props) {
        super(props);
        // Sound.setCategory('Playback');
        this.state={
            currentColor:'00BCD4',
            borderColorChose:'00BCD4',
            sound:null
        }
    }

    componentDidMount() {
        this.assignColor();
    }

    assignColor = () =>{
        let colorChose = "#" + Math.floor(Math.random()*16777215).toString(16);
        let borderColorChose = "#" + Math.floor(Math.random()*16777215).toString(16);
        // let colorChose = availableColors[Math.floor(Math.random()*availableColors.length)]
        // let borderColorChose = availableColors[Math.floor(Math.random()*availableColors.length)]

        if(colorChose === borderColorChose){
            this.assignColor();
            return;
        }

        this.setState({
            currentColor: colorChose,
            borderColorChose: borderColorChose
        })
    }

    speakTheWord = (word) =>{
        Speech.stop();
        Speech.speak(word);
    }

    alphabetClicked = () =>{
       this.assignColor();
       this.speakTheWord(this.props.currentAlphabet);
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.alphabetClicked}
                    style={[styles.roundButton1,{backgroundColor: this.state.currentColor},
                        {borderColor: this.state.borderColorChose},
                        {height: this.props.height},
                        {width: this.props.width},
                    ]}
                >
                    <Text style={[styles.textStyle,{fontSize: this.props.fontSize}]}>{this.props.currentAlphabet}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    roundButton1: {
        // width: 80,
        // height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
        borderWidth:10,
        borderColor:'red',
    },
    textStyle:{
        // fontSize:15,
    },
});
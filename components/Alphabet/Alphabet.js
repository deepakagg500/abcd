import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {availableColors} from "../../constants/constants";
const Sound = require('react-native-sound');
export default class Alphabet extends Component{
    constructor(props) {
        super(props);
        // Sound.setCategory('Playback');
        this.state={
            currentColor:'00BCD4',
            borderColorChose:'00BCD4',
        }
    }

    componentDidMount() {
        this.assignColor();
    }

    assignColor = () =>{
        let colorChose = availableColors[Math.floor(Math.random()*availableColors.length)]
        let borderColorChose = availableColors[Math.floor(Math.random()*availableColors.length)]

        if(colorChose === borderColorChose){
            this.alphabetClicked();
            return;
        }

        this.setState({
            currentColor: colorChose,
            borderColorChose: borderColorChose
        })
    }

    alphabetClicked = () =>{

        let alphabetSound = new Sound('/../assets/sounds/test.mp3', Sound.MAIN_BUNDLE, (error)=>{
            if(error){
                console.log(error);
            }
        });

        alphabetSound.play((success => {
            if(!success){
                console.log("Sound did not play properly");
            }
        }))

       this.assignColor();
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.alphabetClicked}
                    style={[styles.roundButton1,{backgroundColor: this.state.currentColor}, {borderColor: this.state.borderColorChose}]}
                >
                    <Text style={styles.textStyle}>{this.props.currentAlphabet}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    roundButton1: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
        borderWidth:10,
        borderColor:'red',
    },

    textStyle:{
        fontSize:30,
    },
});
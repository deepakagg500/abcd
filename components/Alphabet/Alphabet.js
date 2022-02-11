import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {availableColors} from "../../constants/constants";
import {Audio} from "expo-av";
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


    playSound = async (fileName) =>{

        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/test.mp3')
        );

        this.setState({
            sound:sound
        })

        console.log('Playing Sound');
        await this.state.sound.playAsync();
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
        this.playSound("test.mp3").then((sound)=>{
            this.state.sound.unloadAsync();
        })
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
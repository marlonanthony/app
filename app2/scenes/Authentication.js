import React, { Component } from 'react'
import {StyleSheet,Text,View,TextInput} from 'react-native'
import ViewContainer from '/Users/DinoDecosta/app/app2/components/ViewContainer'
import StatusbarBackground from '/Users/DinoDecosta/app/app2/components/StatusbarBackground'


export default class Authentication extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }


  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View>
            <TextInput 
                style={styles.textInput}
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                placeholder='EMAIL'
                placeholderTextColor='black'
            />
            <View style={styles.hairline} />
            <TextInput 
                style={styles.textInput}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                placeholder='PASSWORD'
                placeholderTextColor='black'
                secureTextEntry={true}
             />
            <View style={styles.hairline}/>
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
    textInput: {
        height: 30,
        marginTop: 20,
        padding: 25,
    },
    hairline: {
        height: 1,
        backgroundColor: 'black',
        marginLeft: 30,
        marginRight: 30
    }
})



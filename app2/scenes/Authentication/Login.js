import React, { Component } from 'react'
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image,TouchableHighlight} from 'react-native'
import ViewContainer from '/Users/DinoDecosta/app/app2/components/ViewContainer'
import StatusbarBackground from '/Users/DinoDecosta/app/app2/components/StatusbarBackground'
import {styles} from '/Users/DinoDecosta/app/app2/scenes/Authentication/styles.js'

export default class Login extends Component{
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

        <View style={styles.logo}>
            <Image 
            style={{width: 70, height: 70, marginLeft: 25, marginTop: 25}}
            source={require('/Users/DinoDecosta/app/app2/resources/pic9.jpg')}/>
        </View>

        <View style={styles.inputButtons}>
            <TextInput 
                style={styles.textInput}
                autoCapitalize='none'
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                placeholder='EMAIL'
                placeholderTextColor='black'
                autoCorrect={false}
                returnKeyType='next'
                keyboardAppearance='dark'
            />
            <View style={styles.hairline} />

            <TextInput 
                style={styles.textInput}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                placeholder='PASSWORD'
                placeholderTextColor='black'
                secureTextEntry={true}
                autoCorrect={false}
                returnKeyType='go'
                keyboardAppearance='dark'
             />
            <View style={styles.hairline}/>
        </View>

        <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.register}>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
      </ViewContainer>
    )
  }
}




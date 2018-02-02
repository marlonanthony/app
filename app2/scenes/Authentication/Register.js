import React, { Component } from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import ViewContainer from '/Users/DinoDecosta/app/app2/components/ViewContainer'
import StatusbarBackground from '/Users/DinoDecosta/app/app2/components/StatusbarBackground'
import {styles} from '/Users/DinoDecosta/app/app2/scenes/Authentication/styles.js'

export default class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            verifyPassword: ''
        }
    }

    render() {
        return(
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.logoReg}>
                    <Image 
                    style={{width: 90, height: 90, marginLeft: 25, marginTop: 25}}
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

                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({verifyPassword: text})}
                        value={this.state.verifyPassword}
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
                        <Text style={styles.loginButtonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </ViewContainer>
        )
    }
}
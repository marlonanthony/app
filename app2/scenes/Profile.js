import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import ViewContainer from '/Users/DinoDecosta/app/app2/components/ViewContainer.js'
import StatusbarBackground from '/Users/DinoDecosta/app/app2/components/StatusbarBackground.js'

export default class Profile extends Component {
    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.profilePicture}>
                    <View style={styles.profileBorder}>
                        <Image 
                            style={{width: 90, height: 90, marginTop: 25, marginLeft: 25}}
                            source={require('/Users/DinoDecosta/app/app2/resources/pic1.jpg')}/>
                    </View>
                </View>

                <View style={styles.name}>
                    <Text style={styles.nameText}>Marlon Decosta</Text>
                </View>

                <View style={styles.runnersDescription}>
                    <Text style={styles.runnersDescriptionText}>MARLON IS A READER AND PROGRAMMER</Text>
                    <Text style={styles.runnersDescriptionText}>HE ONLY RESPECTS AUTHENTICITY</Text>
                    <Text style={styles.runnersDescriptionText}>HE LIVES IN NEW JERSEY, USA</Text>
                </View>

                <View style={styles.personalDescription}>
                    <View style={styles.columnOne}>
                        <Text style={styles.personalDescriptionText}>COUNTRY OF BIRTH</Text>
                        <Text style={styles.personalDescriptionText}>YEAR OF BIRTH</Text>
                        <Text style={styles.personalDescriptionText}>CURRENT COUNTRY</Text>
                    </View>
                    <View style={styles.columnTwo}>
                        <Text style={styles.personalDescriptionText}>UNITED STATES</Text>
                        <Text style={styles.personalDescriptionText}>28.10.1983</Text>
                        <Text style={styles.personalDescriptionText}>UNITED STATES</Text>
                    </View>
                </View>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    profilePicture: {
        alignItems: 'center',
        marginTop: 80,

    },
    profilePictureBorder: {
        borderWidth: 1,
        borderColor: '#2C0F66',
        height: 110,
        width: 110,
        borderRadius: 55,
        overflow: 'hidden',
    },
    name: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 24
    },
    nameText: {
        fontSize: 24,
        color: '#2C0F66',
    },
    runnersDescription: {
        alignItems: 'center',
        marginBottom: 100,
        paddingRight: 35,
        paddingLeft: 35,
    },
    runnersDescriptionText: {
        fontSize: 12
    },
    personalDescription: {
        flex: 1,
        flexDirection: 'row',
    },
    personalDescriptionText: {
        fontSize: 12,
        marginBottom: 40
    },
    columnOne: {
        flex: 1,
        paddingLeft: 70
    },
    columnTwo: {
        flex: 1,
        paddingLeft: 70
    }
})
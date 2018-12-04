import React, { Component } from "react";
import { Text, View, Button, TextInput, StyleSheet, Image } from "react-native";
import QueryForm from "./queryForm";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require("./images/logo.png")}
                    />
                    <Text style={styles.title}>
                        An app for fetching earthquakes made with react-native
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <QueryForm navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 150,
        textAlign: 'center'
    }
})
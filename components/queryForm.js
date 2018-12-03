import React from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MESSAGES } from '../constants';


export default class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            magnitude: ''
        }
    }

    handlePress(){
        this.props.navigation.navigate('Earthquakes', {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            magnitude: this.state.magnitude
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={MESSAGES.startDatePlaceHolder}
                    returnKeyType="next"
                    style={styles.input}
                    onSubmitEditing={() => this.textInput.focus()}
                    value={this.state.startDate}
                    onChangeText={(date) => { this.setState({ startDate: date }) }}
                />
                <TextInput
                    returnKeyType="next"
                    placeholder={MESSAGES.endDatePlaceHolder}
                    style={styles.input}
                    value={this.state.endDate}
                    onChangeText={(date) => { this.setState({ endDate: date }) }}
                    ref={(input) => this.textInput = input}
                />
                <TextInput
                    returnKeyType="go"
                    placeholder={MESSAGES.magnitudeDatePlaceHolder}
                    style={styles.input}
                    ref={(input) => this.textInput = input}
                    value={this.state.magnitude}
                    onChangeText={(magnitude) => { this.setState({ magnitude: magnitude }) }}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.handlePress}
                >
                    <Text style={styles.buttonText}>
                        GO!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 0.5
    },
    buttonContainer: {
        backgroundColor: "#2980b9",
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 0.5
    },
    buttonText: {
        textAlign: 'center',
        color: "#FFFFFF",
        fontWeight: "bold"
    }
}
);
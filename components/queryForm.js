import React from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MESSAGES } from '../constants';
import DatePicker from 'react-native-datepicker';


export default class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            magnitude: ''
        };
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        this.props.navigation.navigate('Earthquakes',
            {
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                magnitude: this.state.magnitude
            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePicker
                style = {styles.DatePicker}
                customStyles = {styles.input}
                mode = "date"
                date = {this.state.startDate}
                placeholder = {MESSAGES.startDatePlaceHolder}
                format="YYYY-MM-DD"
                showIcon = {false}
                confirmBtnText = "Confirm"
                cancelBtnText = "Cancel"
                onDateChange = {(date) => this.setState({startDate: date})}
                />
                <DatePicker
                style = {styles.DatePicker}
                mode = "date"
                date = {this.state.endDate}
                showIcon = {false}
                placeholder = {MESSAGES.endDatePlaceHolder}
                format="YYYY-MM-DD"
                confirmBtnText = "Confirm"
                cancelBtnText = "Cancel"
                onDateChange = {(date) => this.setState({endDate: date})}
                />
                <TextInput
                    returnKeyType="go"
                    placeholder={MESSAGES.magnitudeDatePlaceHolder}
                    style={styles.input}
                    ref={(input) => this.textInput = input}
                    keyboardType = "number-pad"
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
    },
    DatePicker: {
        borderWidth: 0,
        width: "100%",
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 0.5
    }
}
);
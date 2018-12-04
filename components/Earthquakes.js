import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MESSAGES, COLOR } from "../constants";

const USGS_WEB_API = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson"

export default class Earthquakes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        };
    }

    showPlace = (item) => {
        const place = item.properties.place.split("of");
        return (
            <View style={styles.placeContainer}>
                <Text style={styles.upperText}>
                    {place[1] ? place[0] + "of" : ""}
                </Text>
                <Text style={styles.lowerText}>
                    {place[1] ? place[1] : place[0]}
                </Text>
            </View>
        );
    }

    showMag = (item) => {
        const mag = item.properties.mag;
        if (mag >= 1 && mag < 3)
            bgcolor = COLOR.one;
        else if (mag >= 3 && mag < 5)
            bgcolor = COLOR.three;
        else if (mag >= 5 && mag < 7)
            bgcolor = COLOR.five;
        else if (mag >= 7 && mag < 9)
            bgcolor = COLOR.six;
        else if (mag >= 9 && mag <= 10)
            bgcolor = COLOR.seven;

        return (<View style={{ ...styles.magContainer, backgroundColor: bgcolor }}>
            <Text style={{ padding: 20 }}>
                {item.properties.mag}
            </Text>
        </View>);
    }

    componentDidMount() {
        const startDate = this.props.navigation.getParam("startDate", "2014-01-01");
        const endDate = this.props.navigation.getParam("endDate", "2014-01-11");
        const magnitude = this.props.navigation.getParam("magnitude", "6");

        this.setState({ loading: true })
        fetch(USGS_WEB_API
            + `&starttime=${encodeURIComponent(startDate)}&endtime=${encodeURIComponent(endDate)}&minmagnitude=${encodeURIComponent(magnitude)}`
        )
            .then(res => res.json())
            .then(resJson => this.setState({ data: resJson.features, loading: false }))
            .catch(err => {
                console.error(err)
                alert(error)
                this.setState({ loading: false })
            });
    }

    render() {
        return (
            <View
                style={styles.flatListContainer} >
                <FlatList
                    ItemSeparatorComponent={
                        () => <View
                            style={styles.ItemSeparator}
                        />
                    }
                    data={this.state.data}
                    renderItem={({ item }) => <TouchableOpacity style={styles.listitem}>

                        <View >
                            {this.showMag(item)}
                        </View>
                        <View >
                            {this.showPlace(item)}
                        </View>
                    </TouchableOpacity>}
                    keyExtractor={({ id }, item) => id}
                />
                {
                    this.state.loading &&
                    <View style={styles.loader}>
                        <ActivityIndicator size='large' />
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
        flex: 1
    },
    ItemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
    },
    listitem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    magContainer: {
        height: 40,
        width: 40,
        justifyContent: 'flex-start',
        borderRadius: 20,
    },
    loader: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    placeContainer: {
        paddingLeft: 15,
    },
    upperText: {
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: "Cochin",
        color: '#616161'
    },
    lowerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#212121'
    }
});
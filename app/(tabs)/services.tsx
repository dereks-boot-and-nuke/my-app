import { StyleSheet, ScrollView, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabServicesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Investigate anyone</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.boxLarge} />
            <View style={styles.boxSmall} />
            <Text>Some Cards</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    boxSmall: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'skyblue',
    },
    boxLarge: {
        width: 300,
        height: 300,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: 'steelblue',
    },
});

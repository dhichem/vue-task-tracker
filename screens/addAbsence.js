import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddAbsence({ navigation }) {

    const [reason, setReason] = useState("");

    return (
        <View>
            <Text style={styles.titre}>{navigation.getParam('dateString')}</Text>
            <TextInput
                style={styles.input}
                placeholder="Raison de l'absence"
                onChangeText={(val) => setReason(val)}
            />
            <Button
                style={styles.button}
                title='Submit'
                onPress={() => navigation.navigate('CalendarAbsence', { date: navigation.getParam('dateString'), reason: reason })}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titre: {
        margin: 12,
        padding: 10,
        textAlign: 'center',
    },
});
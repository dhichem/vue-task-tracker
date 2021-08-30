import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Card from '../shared/card';

export default function home({ navigation }) {

    return (
        <View>
            <Text style={styles.title}>Rapport d'absence</Text>
            <Card>
                <Text>aaaffffffffffaaa</Text>
            </Card>
            <Text style={styles.title}>Rapport dépense</Text>
            <Card>
                <Text>abbbbbbbbbbbb</Text>
            </Card>
            <Text style={styles.title}>Rapport temps</Text>
            <Card>
                <Text>aqqqqqqqqqqqaaa</Text>
            </Card>
        </View>
    );
}




const styles = StyleSheet.create({
    title: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
});
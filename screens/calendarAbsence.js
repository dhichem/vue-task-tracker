import { vi } from 'date-fns/locale';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';
import { FAB } from 'react-native-paper';

export default function CalendarAbsence({ navigation }) {
    let startDate = '';
    let absentDate = [];
    let reason = [];


    if (navigation.getParam('date')) {
        absentDate.push(navigation.getParam('date'));
        reason.push(navigation.getParam('reason'));
    }

    let mark = {};

    absentDate.forEach(day => {
        mark[day] = {
            selected: true, selectedColor: 'blue',
        };
    });



    return (
        <>
            <Calendar
                onDayPress={(response) => startDate = response}

                markedDates={
                    mark
                }

            />

            {(absentDate.length != 0) ? (
                <View style={styles.container} >

                    <Text style={styles.text}> {absentDate[0]}</Text>
                    <Text style={styles.text}> {reason[0]}</Text>

                </View>
            ) : console.log(absentDate.length)
            }

            <FAB
                active={'true'}
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.navigate('AddAbsence', startDate)}
            />
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        margin: 20,
        borderRadius: 15,
        backgroundColor: '#6698FF'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    text: {
        color: '#FFFFFF'
    },
});

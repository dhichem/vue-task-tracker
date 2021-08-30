import { createStackNavigator } from 'react-navigation-stack';
import CalendarAbsence from '../screens/calendarAbsence';
import AddAbsence from '../screens/addAbsence';
import Header from '../shared/header';
import React from 'react';

const screens = {
    CalendarAbsence: {
        screen: CalendarAbsence,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Absence' />
            }
        }
    },
    AddAbsence: {
        screen: AddAbsence,
    },
};


// home stack navigator screens
const AbsenceStack = createStackNavigator(screens);

export default AbsenceStack;
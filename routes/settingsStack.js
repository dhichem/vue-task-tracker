import { createStackNavigator } from 'react-navigation-stack';
import Settings from '../screens/settings';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
};

// home stack navigator screens
const SettingsStack = createStackNavigator(screens);

export default SettingsStack;
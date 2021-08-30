import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import AddAbsence from '../screens/addAbsence';

const MyComponent = () => (
    <FAB
        active={'true'}
        style={styles.fab}
        small
        icon="plus"
        onPress={() => this.props.navigation.navigate('AddAbsence')}
    />
);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default MyComponent;
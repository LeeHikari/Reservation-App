import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export function Account(props: any) {
    const { navigation } = props;
    const [name, setName] = React.useState('');

    const handleLogout = () => {
        props.history.push('/login');
    }

    return (
        <View>
            <Text>Account</Text>
            Welcome User!<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        backgroundColor: 'white',
    },
});

// TextInput
// style it
// make it a controlled component (useState)
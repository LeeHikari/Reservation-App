import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export function Home(props: any) {
    const {navigation} = props;
    const [name, setName] = React.useState('');



    return (
        <View>
            <Text>Home</Text>
            {/* <TextInput style={styles.input} value={name} onChangeText={setName} /> */}
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
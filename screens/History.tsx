import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, Linking, TouchableOpacity} from 'react-native';


type HomeProps = {
    data: any[];
}



export function History({ data }: HomeProps) {
    const [name, setName] = React.useState('');

 

    return (
        <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.row} >
                  
                    <Text style={styles.text}>{item.id}</Text>
                    <Text style={styles.yearText}>({item.guests})</Text>
                </View>
            )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    row: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'darkblue',
    },
    text: {
        flex: 1,
        fontSize: 20,
    },
    yearText: {
        marginLeft: 10,
        fontSize: 10,
    },
    img: {
        height: 80,
        width: 80,
        marginRight: 10,
    },
});


// TextInput
// style it
// make it a controlled component (useState)
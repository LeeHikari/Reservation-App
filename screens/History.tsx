import { booleanLiteral } from '@babel/types';
import React from 'react';
import { StyleSheet, FlatList, Linking, TouchableOpacity, Text} from 'react-native';

import { View } from '../components/Themed';


type HomeProps = {
    data: any[];
}

export function History({ data }: HomeProps) {;


    function SplitDate(item : any, boolVal : boolean){
        var splitObjs = item.startTime.split('T');
        if(boolVal){
            return splitObjs[0];
        }
        else{
            return splitObjs[1];
        }
    }

    return (     
        <View style={styles.container} >
            <View style={styles.row}>
                <Text style={[styles.text, {flex: 2}]}>Name</Text>
                <Text style={styles.text}>Date</Text>
                <Text style={styles.text}>Time</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} onPress={() => Linking.openURL(`http://localhost:19006/Home`)}>
                        <Text style={[styles.text, {flex: 2}]}>{item.person.fullname}</Text>
                        <Text style={styles.text}>{SplitDate(item, true) }</Text>
                        <Text style={styles.text}>{SplitDate(item, false)}</Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'darkblue',
    },
    text: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
    },
    yearText: {
        marginLeft: 10,
        fontSize: 10,
    },
});
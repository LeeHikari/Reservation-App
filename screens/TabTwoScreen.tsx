import React, { useState} from 'react';
import { StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';

import { View } from '../components/Themed';
import { GetReservations, GetReservationsId } from '../services/reservations'
import { History } from './History';


export function TabTwoScreen() {;

    const [reservations, setReservations] = useState<any[]>([]);
    const [reservationId, setReservationId] = useState('');
    const [loading, setLoading] = useState(false);

    function getReservations() {
        setLoading(true);
        if(reservationId != ""){
            GetReservationsId(reservationId).then(data => {

                let listRes = [];
                listRes.push(data);
                setReservations(listRes);
                  setLoading(false);
              });
        }
        else{
            GetReservations().then(data => {                
                setReservations(data);
                  setLoading(false);
            });
        }
    }

    return (     
        <View style={styles.container} >
            <TouchableOpacity style={styles.btn} onPress={getReservations}>Refresh</TouchableOpacity>
            <TextInput style={styles.input} placeholder="Search by Id" value={reservationId} onChangeText={setReservationId} />
            <History data={reservations}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: '100%'
    },
    text: {
        flex: 1,
        fontSize: 20,
    },
    yearText: {
        marginLeft: 10,
        fontSize: 10,
    },
    input: {
      backgroundColor: '#fff',
      padding: 5,
      borderRadius: 8,
      margin: '15px',
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 1,
    },
    btn: {
      elevation: 8,
      backgroundColor: "#2c80ec",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold'

    },
    img: {
        height: 80,
        width: 80,
        marginRight: 10,
    },
});

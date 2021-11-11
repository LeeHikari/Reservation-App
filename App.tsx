import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { GetReservations } from './services/reservations';

export default function App() {
  const [reservations, setReservations] = useState<any[]>([]);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  function search() {
    GetReservations.then(data=>{

    })
    setLoading(true);
    Re().then(data => {
        setMovies(data.Search);
        setLoading(false);
    });
}


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';;
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';




const App = () => {
  useEffect(()=>{
    console.log("Clean App js code");
  },[])
 
  return (
    <View style={{flex:1,backgroundColor:'lightcyan',justifyContent:'center'}}>
      <Text style={{color:'blue',fontWeight:'bold',fontSize:20,textAlign:'center',textTransform:'capitalize'}}>Splash Screen App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

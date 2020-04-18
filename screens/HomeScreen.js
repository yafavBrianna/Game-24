import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
   
    <View style={styles.container}>
      <Text style={styles.titleText}>Game24!</Text>
      <Text styles={styles.stars}>🌟🌟🌟🌟</Text>
 <TouchableOpacity style={styles.gameButton} onPress={()=> navigation.navigate('GameScreen')}>
     <Text style={styles.gametext}>Go To Game!</Text>
     </TouchableOpacity>
    </View>
  );
}

// We need this when using a custom font
const fontFamilyPicker = Platform.select({
  android: { fontFamily: 'Roboto' },
  web: { fontFamily: './assets/fonts/Roboto' }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
   titleText:{
     fontSize:40,
   },
  gametext:{
   fontSize:30,
  },
gameButton: {
  width: 220,
  height: 60,
  textAlign:"center",
  backgroundColor: 'red',
  borderRadius :6,
},
stars:{
  fontSize:50,
}
});
import React, { useState } from 'react';
import { StyleSheet, Text, View,Button, Switch   } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


 const TeladePreferencias = () =>{

  const [selectedPicker, setSelectedPicker] = useState('Claro');

  const [fontSize, setFontSize] = useState(12);
  
  const [nightMode, setNightMode] = useState(false);


const ResetarPefrencias = () =>{
  
  setSelectedPicker ('Claro');
  
  setFontSize (12);

  setNightMode (false);

 };

 return (

    <View style = {styles.container}>

        <Text style = {styles.title}>  Aplicativo de Configurações de Preferência </Text>

        <Text style = {styles.label}> Temas: </Text>
        <Picker
          selectedValue={selectedPicker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedPicker(itemValue)
          }>
            <Picker.Item label="Claro" value= "Claro"/>
            <Picker.Item label="Escuro" value= "Escuro"/>
            <Picker.Item label="Automático" value= "Automático"/>
        </Picker>

        <Text style = {styles.label}>Tamanho da fonte:  {fontSize}</Text>
        <Slider
          style = {styles.label}
          minimumValue={12}
          maximumValue={30}
          step={1}
          value={fontSize}
          onValueChange={(value) =>
            setFontSize(value)
          }
        />

        <View  style = {styles.switchContainer}>
          <Text  style = {styles.label}> Modo Noturno: </Text>
            <Switch
              value = {nightMode}
              onValueChange={(value) =>
                setNightMode(value)
              }
            />
        </View>
        <Text>{nightMode ? 'Ativado' : 'Desativado'}</Text>

         <Button title='Resetar Preferências' onPress={ResetarPefrencias}/>     
    </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    paddingTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
})

 
export default TeladePreferencias;
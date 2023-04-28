

import React, {useState} from 'react';
import colors from './src/utils/colors'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme,View,Button} from 'react-native';

import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';


export default function App() {
  
  const [capital, setCapital] = useState(null);
  const [interes,setInteres ] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('')
  
  const calculate = () =>{
    reset();
    if(!capital){
        setErrorMessage("Añade la cantidad que quieres solicitar")
    } else if (!interes) {
      setErrorMessage("Añade el interes del prestamo")
    } else if (!months) {
      setErrorMessage("Selecciona los meses a pagar")
    } else {
      const i = interes/ 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee*months).toFixed(2)
      })
      
    }


  }


  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }
  return (

  
    <>
      <StatusBar backgroundColor="#0098D3" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form setCapital={setCapital} 
              setInteres={setInteres} 
              setMonths={setMonths} 
              />
      </SafeAreaView>
      <ResultCalculation 
      capital={capital}
      interes={interes}
      months={months}
      total={total}
      errorMessage={errorMessage}
      />

      <Footer calculate={calculate} />
      
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
   
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position: 'absolute'

  }
})


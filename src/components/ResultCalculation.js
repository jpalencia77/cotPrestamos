import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
  const {capital, interes, months, total, errorMessage} = props
  
    return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          
        {/*  <View style={styles.value}>
            <Text>Cantidad solicitada: </Text>
            <Text>{capital}</Text>
      </View>*/}
          <DataResult title="Cantidad solicitada:" value={`${capital} $ `} />
          <DataResult title="Interés %:" value={`${interes} % `} />
          <DataResult title="Plazos: " value={`${months} meses `} />
          <DataResult title="Pago mensual: " value={`${total.monthlyFee} $ `} />
          <DataResult title="Total a pagar:" value={`${total.totalPayable} $ `} />
        </View>
      ) }

      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  )
}

function DataResult(props) {
  const {title, value} = props;

  return(
      <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
          </View>
  )
}

const styles = StyleSheet.create({
    error :{
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    content: {
      marginTop: 0,
      marginHorizontal: 40
    },
    boxResult: {
      padding: 30,

    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20
    },
    value: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    }
})
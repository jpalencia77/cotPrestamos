import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../utils/colors';

import { Picker } from '@react-native-picker/picker';

export default function Form(props) {
    const valorInicial = 'Seleccionar meses'
    const {setCapital, setInteres, setMonths} = props
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                        placeholder='Cantidad' 
                        placeholderTextColor='black'
                        keyboardType='numeric' 
                        style={styles.input}
                        onChange={e => setCapital(e.nativeEvent.text)}
                        
                        
                        
                />
                <TextInput 
                    placeholder='Interés'
                    placeholderTextColor='black' 
                    keyboardType='numeric' 
                    style={[styles.input, styles.inputPorcentaje]}
                    onChange={e => setInteres(e.nativeEvent.text)}>

                 </TextInput>
            </View>
           
           <Picker 
           selectedValue={valorInicial}
           style={ pickerSelectStyles.inputAndroid} 
           onValueChange={(value) => setMonths(value)}
           >
            <Picker.Item label='Selecciona los plazos' value={null} />
            <Picker.Item label='3 meses' value={3} />
            <Picker.Item label='6 meses' value={6} />
            <Picker.Item label='12 meses' value={12} />
            <Picker.Item label='24 meses' value={24} />
           </Picker>
           
           {/* <RNPickerSelect
            style={ pickerSelectStyles.inputAndroid}
            onValueChange={(value) => setMonths(value)}
            placeholder={{label: 'Selecciona los plazos',
                         value: null}}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12},
                { label: '24 meses', value: 24},
            ]}
        />
        */}
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 15,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 52,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 20,
        

    },
    inputPorcentaje: {
       width: '40%',
       marginLeft: 5, 
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white'
    }
})
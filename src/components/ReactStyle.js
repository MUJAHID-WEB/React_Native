import { View, Text, StyleSheet } from "react-native";
import ExtStyles from '../styles/styles'

const ReactStyle =()=>{
    return(
        <View>
            <Text style={{color:'red', fontSize:25}}>
                Style in React Native
            </Text>

            <Text style={{color:'red'}}>
                Md. Mujahidul Islam
            </Text>                     
            <Text style={{color:'red'}}>
                Md. Mujahidul Islam
            </Text>                     
            <Text style={InStyles.textBox}>
                Md. Mujahidul Islam
            </Text>                     
            <Text style={InStyles.textBox}>
                Md. Mujahidul Islam
            </Text>                     
            <Text style={ExtStyles.textStyle}>
                Md. Mujahidul Islam
            </Text>       

            <Text style={[ExtStyles.textStyle, {fontWeight: 700, paddingBottom: 20}]}>
                Md. Mujahidul Islam
            </Text>               
                                
        </View>
    )
}

const InStyles = StyleSheet.create({
    textBox:{
        fontSize: 20,
        color:'white',
        backgroundColor:'black',
        height: 100,
        textAlignVertical:'center',
        textAlign:'center',
        borderColor: 'red',
        borderWidth: 3,
        margin: 10,
        borderRadius: 15
        
    }
})

export default ReactStyle;
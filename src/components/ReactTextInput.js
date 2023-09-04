import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";

const ReactTextInput =()=>{
    const [name, setName] = useState('')

    return(
        <View>
            <Text style={{color:'red', fontSize:25}}>
                Text Input in React Native
            </Text>

            <Text style={{color:'blue', fontSize:35}}>
                {name}
            </Text>

            <TextInput 
                style={InStyles.textInput}
                value={name}
                placeholder="Please Enter your name"
                onChangeText={(text)=>setName(text)}
            />

            <Button title="Clear" onPress={()=>setName('')}/>
             
                                
        </View>
    )
}


const InStyles = StyleSheet.create({
    textInput:{
        fontSize: 20,
        color:'black',
        height: 50,
        borderColor: 'blue',
        borderWidth: 3,
        margin: 10,
        borderRadius: 15
        
    }
})

export default ReactTextInput;
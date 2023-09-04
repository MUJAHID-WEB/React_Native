import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [display, setDisplay] = useState(false)

    const clearData = () => {
        setName('')
        setEmail('')
        setPassword('')
        setDisplay(false)
    }

    return (
        <View>
            <Text style={{ color: 'red', fontSize: 25 }}>
                Text Input in React Native
            </Text>

            <TextInput
                placeholder="Enter your name"
                style={InStyles.textInput}
                value={name}
                onChangeText={(text) => { setName(text) }}

            />
            <TextInput
                placeholder="Enter your email"
                style={InStyles.textInput}
                value={email}
                onChangeText={(text) => { setEmail(text) }}

            />
            <TextInput
                placeholder="Enter your password"
                style={InStyles.textInput}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => { setPassword(text) }}

            />

            <View style={{ marginBottom: 10 }}>
                <Button title="Get Details" onPress={() => { setDisplay(true) }} />
            </View>

            <Button title="Clear Data" onPress={clearData} />

            <View>
                {
                    display ?
                        <View>
                            <Text style={{ fontSize: 25 }}>{name}</Text>
                            <Text style={{ fontSize: 25 }}>{email}</Text>
                            <Text style={{ fontSize: 25 }}>{password}</Text>
                        </View>
                        : null
                }
            </View>
        </View>
    );
}


const InStyles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        color: 'black',
        height: 50,
        borderColor: 'blue',
        borderWidth: 3,
        margin: 10,
        borderRadius: 15

    }
})

export default Form;
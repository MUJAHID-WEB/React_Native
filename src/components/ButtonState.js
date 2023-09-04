import { useState } from 'react';
import { View, Text, Button } from 'react-native';


const ButtonState = () => {

    const [data, setData] = useState(200)
    const num =() =>{
        setData(405)
    }
  
    return (
        <View>
            <Text style={{ fontSize: 30, }}>Button with onPress Event </Text>

            <Text style={{ fontSize: 30, }}>{data} </Text>

            <Button title='Press' onPress={num}/>

        </View>
    )
}

export default ButtonState;
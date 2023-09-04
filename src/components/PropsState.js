import { useState } from 'react';
import { View, Text, Button } from 'react-native';


const PropsState = () => {

    const [data, setData] = useState(200)

  
    return (
        <View>
            <Text style={{ fontSize: 30, }}>Props with state </Text>

            <Text style={{ fontSize: 30, }}>{data} </Text>

            <Button title='Update' onPress={()=>setData(450)}/>

            <User num={data} age={30}/>

        </View>
    )
}

const User = (props) =>{
    return(
        <View>
            <Text style={{ fontSize: 30, }}>Props Data </Text>
            <Text style={{fontSize:24}}> {props.num} </Text>
            <Text style={{fontSize:24}}> {props.age} </Text>
        </View>
    )
}



export default PropsState;
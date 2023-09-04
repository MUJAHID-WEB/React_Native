import { View, Text, Button } from 'react-native';

const ViewText = () => {
  let name = 'Mujahidul'
  let lastName = 'Islam'

  const age = 20
  return (
    <View>
      <Text style={{ fontSize: 20, }}>Mujahid </Text>
      <Text style={{ fontSize: 20, }}>Mujahid </Text>

      <Button title="Click" color={'black'} />

      <Text style={{ fontSize: 20, }}>{name} </Text>
      <Text style={{ fontSize: 20, }}>{name} {lastName} </Text>
      <Text style={{ fontSize: 20, }}>{name + ' ' + lastName} </Text>
      <Text style={{ fontSize: 20, }}>{age} </Text>
      
      <Text style={{ fontSize: 20, }}>{age < 30 ? 'You are underage' : 'You are eligible'} </Text>
      {
        age < 18 ?
          <Text style={{ fontSize: 20, color: 'red' }}> You are underage </Text>
          :
          <Text style={{ fontSize: 20, color: 'green' }}>You are eligible </Text>
      }
    </View>
  )
}

export default ViewText;
import React from "react";
import { 
  View, 
  Text, 
  Button
} from "react-native";
import CompanyData from "./src/components/CompanyDate";
import ViewText from "./src/components/ViewText";
import ButtonState from "./src/components/ButtonState";
import PropsState from "./src/components/PropsState";
import ReactStyle from "./src/components/ReactStyle";
import TextInput from "./src/components/ReactTextInput";
import ReactTextInput from "./src/components/ReactTextInput";
import Form from "./src/components/Form";
import ListReact from "./src/components/ListReact";
import ClassCom from "./src/components/ClassCom";


const App = () => {
  return (
    <View>
      {/* <ViewText />
      <CompanyData/>
      <ButtonState/>
      <PropsState /> 
      <ReactStyle />
      <ReactTextInput /> 

      <Form /> 
      <ListReact /> */}
      <ClassCom />

    </View>
  )

}



// function App(): JSX.Element {
//   return (
//     <View>
//       <Text>Text, View & Button</Text>
//     </View>
//   );

// }

export default App;
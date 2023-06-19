import React from "react";
import { Text, View } from "react-native";
import Productlist from "./components/FlatList";
// import FlatList from "./components/FlatList";



const App = () =>{
  return (
    <View style={{flex:1}}>
      <Productlist/>
      
    </View>
    
  )
}

export default App;
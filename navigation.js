import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import Homescreen from "./src/screens/Homescreen";
import Workout from "./src/screens/Workout";
import Fitscreen from "./src/screens/Fitscreen";
import Splashscreen from "./src/screens/Splashscreen"
import Restscreen from "./src/screens/Restscreen";

const Navigation = () => {
  const Stack =createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown:false}}/> */}
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}}/>
        <Stack.Screen name="Workout" component={Workout}  options={{headerShown:false}}/>
        <Stack.Screen name="Fitscreen" component={Fitscreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Restscreen" component={Restscreen} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import Animated,{useSharedValue, withSpring} from 'react-native-reanimated';



export default function Splash() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(()=>{
    ring1padding.value=0;
    ring2padding.value=0;
    setTimeout(()=> ring1padding.value =withSpring( ring1padding.value+6),100) ;
    setTimeout(()=> ring2padding.value =withSpring( ring2padding.value+8),300)
  },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-black">
      <StatusBar style="light" />
      <Animated.View className="bg-rose-300 rounded-full" style={{padding:ring2padding}}>
      <Animated.View className="bg-rose-300 rounded-full" style={{padding:ring1padding}}>
      <Image source={require("../images/logo2.png")}
      className="rounded-full"
        style={{ height: 250, width: 250, borderRadius: 200/2, overflow: 'hidden', borderWidth: 3, borderColor: 'black' }} />
        </Animated.View>
        </Animated.View>
      <View className="flex items-center space-y-2">
        <Text className="font-bold text-white tracking-widest text-6xl p-top-7" >Pro-Fit</Text>
        <Text className="font-medium text-white tracking-widest text-lg p-top-5">Your Home Gym!</Text>
      
      </View>
    </View>
  )

}





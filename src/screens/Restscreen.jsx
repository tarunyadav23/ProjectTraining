import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React ,{useEffect, useState}from 'react'
import { useNavigation } from '@react-navigation/native';

const Restscreen = () => {
  const navigation=useNavigation();
  let timer=0;
  const [timeLeft,setTimeLeft]=useState(3);
  const startTime=() => {
    setTimeout(()=>{
      if(timeLeft <= 0){
        navigation.goBack();
        clearTimeout(timer)
      }
      setTimeLeft(timeLeft-1)
    },1000)
  }
  useEffect(()=>{
    startTime();
    return()=> clearTimeout(timer);
  })
  return (
    <SafeAreaView>
      <Image source={require('../images/break1.jpg')}style={{width:'100%',height:380,marginTop:40}}/>
      <Text style={{fontSize:30,fontWeight:'900',marginTop:50,textAlign:'center'}}>CATCH A BREATH!</Text>
      <Text style={{fontSize:40,fontWeight:'800',marginTop:50,textAlign:'center'}}>{timeLeft}</Text>
    </SafeAreaView>
  )
}

export default Restscreen

const styles = StyleSheet.create({})

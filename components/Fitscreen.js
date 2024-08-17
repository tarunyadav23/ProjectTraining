import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessItems } from '../../Context';


const Fitscreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const {completed,setCompleted,minutes,setMinutes,calories,setCalories,workout,setWorkout}=useContext(FitnessItems)

  return (
    <SafeAreaView>
      <Image style={{ width: '100%', height: 400, marginTop: 35 }} source={{ uri: current.image }} />
      <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 30, fontSize: 30, fontWeight: 'bold' }}>{current.name}</Text>
      <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 30, fontSize: 30, fontWeight: 'bold' }}>x{current.sets}</Text>
      {index + 1 >= exercise.length ? (
        <Pressable onPress={() => {
          navigation.navigate('HomeScreen')
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000)
        }}
          className='bg-blue-600 ml-auto mr-auto  ' style={{ borderRadius: 8, padding: 10, width: 150, marginTop: 30 }}>
          <Text className='text-center text-white font-bold text-2xl'>DONE</Text>
        </Pressable>
      ) : (
        <Pressable onPress={() => {
          navigation.navigate('Restscreen')
          setCompleted([...completed,current.name])
          setWorkout(workout+1)
          setMinutes(minutes+2.5)
          setCalories(calories+6.30)
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000)
        }}
          className='bg-blue-600 ml-auto mr-auto  ' style={{ borderRadius: 8, padding: 10, width: 150, marginTop: 30 }}>
          <Text className='text-center text-white font-bold text-2xl'>DONE</Text>
        </Pressable>
      )}

      <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }}>
        <Pressable
        disabled={index==0}
        onPress={()=>{
          navigation.navigate('Restscreen');
          setTimeout(()=> {
            setIndex(index-1)
          },2000)
        }} className='bg-green-500 p-2' style={{ borderRadius: 8, marginHorizontal: 12, width: 100 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>PREVIOUS</Text>
        </Pressable>
        {index + 1 >= exercise.lenght ? (
          <Pressable onPress={() => {
            navigation.navigate('Homescreen')
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000)
          }} className='bg-green-500 p-2' style={{ borderRadius: 8, marginHorizontal: 12, width: 100 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SKIP</Text>
          </Pressable>
        ) : (<Pressable onPress={() => {
          navigation.navigate('Restscreen')
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000)
        }} className='bg-green-500 p-2' style={{ borderRadius: 8, marginHorizontal: 12, width: 100 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SKIP</Text>
        </Pressable>)}

      </Pressable>
    </SafeAreaView>
  )
}

export default Fitscreen
import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import fitness from '../constants/fitness'
import { useNavigation } from '@react-navigation/native';
import Workout from '../src/screens/Workout';


const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable onPress={() => navigation.navigate('Workout',{
          image:item.image,exercises:item.exercises,id:item.id
        })}
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }} key={key}>
          <Image style={{ width: "95%", height: 140, borderRadius: 7 }} source={{ uri: item.image }} />
          <Text  style={{position:'absolute',color:'white',fontSize:16,fontWeight:'bold',left:20,top:25}}>{item.name}</Text>
        </Pressable>
      ))}
      <Text>FitnessCards</Text>
    </View>
  )
}

export default FitnessCards
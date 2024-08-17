import { View, Text, Image, Pressable,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute} from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { FitnessItems } from '../../Context';
const Workout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {completed,setCompleted}=useContext(FitnessItems)

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} className='bg-white pt-5' style={{marginTop:30}}>

      <Image style={{ width: "100%", height: 170 }} source={{ uri: route.params.image }} />
      <AntDesign onPress={() => navigation.goBack} style={{ position: 'absolute', top: 15, left: 20 }} name="arrowleft" size={28} color="white" />
      {route.params.exercises.map((item, index) => (
        <Pressable className='flex-row items-center' style={{ margin: 10 }} key={index}>
          <Image style={{ width: 90, height: 90 ,border:5,borderColor:'black'}} source={{ uri: item.image }} />
          <View className='ml-10'>
            <Text style={{ fontSize: 17, fontWeight: 'bold',width:170 }}>{item.name}</Text>
            <Text style={{ marginTop: 4, fontSize: 18, color: 'bg-gray-500' }}>x{item.sets}</Text>
          </View>
          {completed.includes(item.name)?(
            <AntDesign name="checkcircle" size={24} color='green' style={{marginLeft:40}}/>
          ):(null)}
        </Pressable>
      ))}

    </ScrollView>
    <Pressable onPress={()=>{navigation.navigate('Fitscreen',{
      exercises:route.params.exercises
    })
    setCompleted([]);
    }} className="bg-blue-600 p-5 ml-auto mr-auto" style={{marginVertical:2,borderRadius:6,width:150}}>
      <Text style={{fontSize:18,fontWeight:'600'}}className='text-center text-white'>START</Text>
    </Pressable>
    </>
  )
}

export default Workout
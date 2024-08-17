import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FitnessCards from '../../components/FitnessCards'
import { ScrollView } from 'react-native'
import { FitnessItems } from '../../Context'

const Homescreen = () => {
    const {minutes,calories,workout}=useContext(FitnessItems)
    return (
        
            <ScrollView className='bg-red-600 p-10 '
                style={{ height: 200, width: '100%' }}>
                <Text className='text-white font-bold' style={{ fontSize: 18 }}>YOUR HOME GYM</Text>
                <View className='flex-row items-center justify-between mt-5'>
                    <View>
                        <Text className="text-white font-bold text-center"style={{fontSize:18}}>{workout}</Text>
                        <Text className="text-neutral-300 mt-1" style={{fontSize:17}}>WORKOUTS</Text>

                    </View>
                    <View>
                        <Text className="text-white font-bold text-center"style={{fontSize:18}}>{calories}</Text>
                        <Text className="text-neutral-300 mt-1" style={{fontSize:17}}>KCAL</Text>


                    </View>
                    <View>
                        <Text className="text-white font-bold text-center"style={{fontSize:18}}>{minutes}</Text>
                        <Text className="text-neutral-300 mt-1" style={{fontSize:17}}>MINS</Text>


                    </View>
                </View>
                <View className="justify-center items-center">
                    <Image source={require('../images/img1.jpeg')} className="mt-4" style={{height:120,width:'90%',borderRadius:7}}/>
                </View>
                <FitnessCards/>
            </ScrollView>
          
    )
}

export default Homescreen


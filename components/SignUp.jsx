// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
// import React, { useState , useEffect} from 'react'
// import { FontAwesome } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// // const SignUpScreen = () => {
//   const navigation = useNavigation();

//   const SignUpScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSignUp = async () => {
//       if (username && password) {
//         try {
//           await AsyncStorage.setItem('userData', JSON.stringify({ username, password }));
//           navigation.navigate('LoginScreen');
//         } catch (e) {
//           console.error('Failed to save user data', e);
//         }
//       } else {
//         alert('Please enter both username and password');
//       }
//     };
  
  
//   return (
//     <View
//       className='flex-1'>
//       <StatusBar style='light' />
//       <Image className='h-full w-full absolute' source={require("../assets/Signup.png")} />
//       <TouchableOpacity onPress={() => navigation.navigate('Splash')} className='top-12 left-5 absolute'>
//                 <Ionicons name="chevron-back-circle" size={40} color="white" />
//             </TouchableOpacity>
//       <View className='mt-24'>
//         <Text style={styles.signuptext}>SignUp/Register</Text>
//       </View>
//       <View style={styles.inputcontainer} className='mt-20'>
//         <MaterialCommunityIcons
//           name="alphabetical"
//           size={24}
//           color="black"
//           style={styles.inputicon} />
//         <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='UserName' value={username} onChangeText={setUsername}  />
//       </View>

//       <View style={styles.inputcontainer} className='mt-18'>
//         <MaterialCommunityIcons
//           name="email"
//           size={24}
//           color="black"
//           style={styles.inputicon} />
//         <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='Email' />
//       </View>

//       <View style={styles.inputcontainer} className='mt-18'>
//         <MaterialIcons
//           name="phone"
//           size={24}
//           color="black"
//           style={styles.inputicon} />
//         <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='Phone Number' />
//       </View>

//       <View style={styles.inputcontainer}>
//         <FontAwesome
//           name={"user"}
//           size={24}
//           color={"black"}
//           style={styles.inputicon} />
//         <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='Gender' />
//       </View>


//       <View style={styles.inputcontainer}>
//         <MaterialCommunityIcons
//           name="google-maps"
//           size={24}
//           color="black"
//           style={styles.inputicon} />
//         <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='Address' />
//       </View>



//       <View style={styles.inputcontainer}>
//         <Fontisto
//           name="locked"
//           size={24}
//           color="black"
//           style={styles.inputicon} />
//         <TextInput secureTextEntry={true}
//           style={styles.textinput}
//           placeholderTextColor={'black'}
//           placeholder='Password' 
//           value={password} onChangeText={setPassword}/>
//       </View>

//       <TouchableOpacity  onPress={handleSignUp}>
//         <Text className='bg-white text-center justify-center text-xl rounded-full p-2 mx-36 mt-5 font-extrabold'>
//           Sign Up
//         </Text>
//       </TouchableOpacity>



//       <View className='flex-row justify-center space-x-1 pt-14'>
//         <Text className='text-white text-xl font-normal'>Already have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//           <Text className='font-normal text-xl text-yellow-400'>Log In</Text>
//         </TouchableOpacity>
//       </View>



//     </View>
//   )
// }

// export default SignUpScreen;

// const styles = StyleSheet.create({
//   // container: {
//   //   backgroundColor: "black",
//   //   flex: 1,
//   // },

//   inputcontainer: {
//     backgroundColor: "#aaa9a8",
//     flexDirection: "row",
//     borderRadius: 30,
//     marginHorizontal: 20,
//     elevation: 20,
//     marginVertical: 5,
//     alignItems: "center",
//     height: 60,
//   },


//   inputicon: {
//     marginLeft: 15,
//     marginRight: 15,
//     paddingRight: 12,
//   },

//   textinput: {
//     flex: 1,
//   },

//   signuptext: {
//     textAlign: "center",
//     fontSize: 40,
//     fontWeight: "900",
//     color: "white",
//     marginVertical: 20,
//   },

//   // signupbuttontext: {
//   //   backgroundColor: "white",
//   //   textAlign: "center",
//   //   justifyContent: "center",
//   //   fontSize: 20,
//   //   borderRadius: 40,
//   //   marginHorizontal: 150,
//   //   marginVertical: 30,
//   //   color: "black",
//   //   height: 30,
//   // }
// })






// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { FontAwesome } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Picker } from '@react-native-picker/picker'
// const SignUpScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [selectedGender, setSelectedGender] = useState('');

//     const handleSignUp = async () => {
//         if (username && password) {
//             try {
//                 await AsyncStorage.setItem('userData', JSON.stringify({ username, password }));
//                 navigation.navigate('LoginScreen');
//             } catch (e) {
//                 console.error('Failed to save user data', e);
//             }
//         } else {
//             alert('Please enter both username and password');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar style='light' />
//             <Image style={styles.backgroundImage} source={require("../assets/Signup.png")} />
//             <TouchableOpacity onPress={() => navigation.navigate('Splash')} style={styles.backButton}>
//                 <Ionicons name="chevron-back-circle" size={40} color="white" />
//             </TouchableOpacity>
//             <View style={styles.headerContainer}>
//                 <Text style={styles.signupText}>SignUp/Register</Text>
//             </View>
//             <View style={styles.inputContainer}>
//                 <MaterialCommunityIcons name="alphabetical" size={24} color="black" style={styles.inputIcon} />
//                 <TextInput
//                     style={styles.textInput}
//                     placeholderTextColor={'black'}
//                     placeholder='UserName'
//                     value={username}
//                     onChangeText={setUsername}
//                 />
//             </View>

//             <View style={styles.inputContainer}>
//                 <MaterialCommunityIcons name="email" size={24} color="black" style={styles.inputIcon} />
//                 <TextInput keyboardType="email-address" style={styles.textInput} placeholderTextColor={'black'} placeholder='Email' />
//             </View>

//             <View style={styles.inputContainer}>
//                 <MaterialIcons name="phone" size={24} color="black" style={styles.inputIcon} />
//                 <TextInput keyboardType="phone-pad" style={styles.textInput} placeholderTextColor={'black'} placeholder='Phone Number' />
//             </View>

//             <View style={styles.inputContainer}>
//                 <FontAwesome name="user" size={24} color="black" style={styles.inputIcon} />
//                 <Text style={styles.textInput} placeholderTextColor={'black'} placeholder='Gender'>  Gender</Text>
//                 <Picker
//         selectedValue={selectedGender}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedGender(itemValue)}
//       >
//         <Picker.Item label="Select..." value="" />
//         <Picker.Item label="Male" value="male" />
//         <Picker.Item label="Female" value="female" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>
//             </View>

//             <View style={styles.inputContainer}>
//                 <MaterialCommunityIcons name="google-maps" size={24} color="black" style={styles.inputIcon} />
//                 <TextInput style={styles.textInput} placeholderTextColor={'black'} placeholder='Address' />
//             </View>

//             <View style={styles.inputContainer}>
//                 <Fontisto name="locked" size={24} color="black" style={styles.inputIcon} />
//                 <TextInput
//                     secureTextEntry={true}
//                     style={styles.textInput}
//                     placeholderTextColor={'black'}
//                     placeholder='Password'
//                     value={password}
//                     onChangeText={setPassword}
//                 />
//             </View>

//             <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
//                 <Text style={styles.signUpButtonText}>
//                     Sign Up
//                 </Text>
//             </TouchableOpacity>

//             <View style={styles.footerContainer}>
//                 <Text style={styles.footerText}>Already have an account?</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//                     <Text style={styles.footerLink}>Log In</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// export default SignUpScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         height: '100%',
//         width: '100%'
//     },
//     backButton: {
//         position: 'absolute',
//         top: 12,
//         left: 5
//     },
//     headerContainer: {
//         marginTop: 24,
//         alignItems: 'center'
//     },
//     signupText: {
//         textAlign: "center",
//         fontSize: 40,
//         fontWeight: "900",
//         color: "white",
//         marginVertical: 20
//     },
//     inputContainer: {
//         backgroundColor: "#aaa9a8",
//         flexDirection: "row",
//         borderRadius: 30,
//         marginHorizontal: 20,
//         elevation: 20,
//         marginVertical: 5,
//         alignItems: "center",
//         height: 60
//     },
//     inputIcon: {
//         marginLeft: 15,
//         marginRight: 15,
//         paddingRight: 12
//     },
//     textInput: {
//         flex: 1,
//     },
//     signUpButton: {
//         backgroundColor: "white",
//         borderRadius: 30,
//         marginHorizontal: 20,
//         height: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20
//     },
//     signUpButtonText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'black'
//     },
//     footerContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         paddingTop: 14
//     },
//     footerText: {
//         color: 'white',
//         fontSize: 16
//     },
//     footerLink: {
//         color: 'yellow',
//         fontSize: 16,
//         marginLeft: 5
//     }
// });


import { ScrollView, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[200px] -left-5"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

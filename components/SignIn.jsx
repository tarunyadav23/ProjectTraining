// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { useState, useEffect } from 'react';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Fontisto } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { ScrollView } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // const LoginScreen = () => {
// //     const [username, setUsername]= useState('')
// //     const [password, setPassword]= useState('')


// const LoginScreen = ({ navigation }) => {
//     // const navigation = useNavigation();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [savedUserData, setSavedUserData] = useState(null);
  
//     useEffect(() => {
//       const loadUserData = async () => {
//         try {
//           const userData = await AsyncStorage.getItem('userData');
//           if (userData !== null) {
//             setSavedUserData(JSON.parse(userData));
//           }
//         } catch (e) {
//           console.error('Failed to load user data', e);
//         }
//       };
  
//       loadUserData();
//     }, []);
  
//     const handleLogin = () => {
//       if (savedUserData) {
//         if (username === savedUserData.username && password === savedUserData.password) {
//           alert('Login successful');
//         } else {
//           alert('Invalid username or password');
//         }
//       } else {
//         alert('No user data found. Please sign up first.');
//       }
//     };
//     return (
//         <View
//             className='flex-1 bg-gradient-to-bl'>
//             <StatusBar style='light' />
//             <Image className='h-full w-full absolute' source={require("../assets/Login.png")} />

//             <TouchableOpacity onPress={() => navigation.navigate('Splash')} className='top-12 left-5 absolute'>
//                 <Ionicons name="chevron-back-circle" size={40} color="white" />
//             </TouchableOpacity>
//             <View style={styles.Welcomecontainer} className='mt-32'>
//                 <Text style={styles.Welcometext}>Welcome</Text>
//             </View>
//             <View>
//                 <Text style={styles.Login}>Log in to your account</Text>
//             </View>
//             <View style={styles.inputcontainer} className='mt-28' >
//                 <FontAwesome
//                     name={"user"}
//                     size={24}
//                     color={"black"}
//                     style={styles.inputicon} />
//                 <TextInput style={styles.textinput} placeholderTextColor={'black'} placeholder='Email or Phone number' value={username} onChangeText={setUsername} />
//             </View>

//             <View style={styles.inputcontainer}>
//                 <Fontisto
//                     name="locked"
//                     size={24}
//                     color="black"
//                     style={styles.inputicon} />
//                 <TextInput secureTextEntry={true}
//                     style={styles.textinput}
//                     placeholderTextColor={'black'}
//                     placeholder='Password' 
//                     value={password} onChangeText={setPassword}/>
//             </View>
//             {/* <TouchableOpacity style={styles.forgotpasswordbutton}>
//     <Text style={styles.forgotPasswordtext}>Forgot your Password!!</Text>
//     </TouchableOpacity> */}

//             <TouchableOpacity  onPress={handleLogin} style={styles.loginbutton} className='font-extrabold block drop-shadow-lg'>
//                 <Text style={styles.logintext} className='text-center justify-center text-xl rounded-full p-2 mx-36 mt-5 font-extrabold'>
//                     Log in
//                 </Text>
//             </TouchableOpacity>



//             <View className='flex-row justify-center space-x-1 pt-48'>
//                 <Text className='text-white text-xl font-normal'>Don't have an account?</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
//                     <Text className='font-normal text-xl text-yellow-400'>Sign Up</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>
//     )
// }

// export default LoginScreen;

// const styles = StyleSheet.create({
//     // container: {


//     Welcometext: {
//         textAlign: "center",
//         fontSize: 70,
//         fontWeight: "400",
//         color: "white",

//     },

//     Login: {
//         textAlign: "center",
//         fontSize: 20,
//         color: "white",
//         marginBottom: 30,
//         fontWeight: "400",

//     },

//     inputcontainer: {
//         backgroundColor: "#aaa9a8",
//         flexDirection: "row",
//         borderRadius: 30,
//         marginHorizontal: 20,
//         elevation: 20,
//         marginVertical: 10,
//         alignItems: "center",
//         height: 60,
//         // marginTop:50,
//     },


//     inputicon: {
//         marginLeft: 15,
//         marginRight: 10,
//     },

//     textinput: {
//         flex: 1,
//         color:"black"
//         // marginLeft:5
//     },

//     forgotPasswordtext: {
//         color: 'white',
//         textAlign: 'right',
//         width: '90%',
//         fontSize: 13,
//     },


//     // loginbuttoncontainer:{
//     //     backgroundColor: "black",
//     //     flexDirection:"row",
//     //     borderRadius:20,
//     //     marginHorizontal:40,
//     //     elevation:20,
//     //     marginVertical:20,
//     //     alignItems:"center",
//     //     height:50,
//     // },




//     loginbuttontext: {
//         backgroundColor: "#aaa9a8",
//         textAlign: "center",
//         justifyContent: "center",
//         fontSize: 20,
//         borderRadius: 40,
//         marginHorizontal: 150,
//         marginVertical: 30,
//         color: "black",
//         height: 30,
//     },

//     logintext:{
//         backgroundColor:"#aaa9a8"
//     }


// })







// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Fontisto } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [savedUserData, setSavedUserData] = useState(null);
  
//     useEffect(() => {
//         const loadUserData = async () => {
//             try {
//                 const userData = await AsyncStorage.getItem('userData');
//                 if (userData !== null) {
//                     setSavedUserData(JSON.parse(userData));
//                 }
//             } catch (e) {
//                 console.error('Failed to load user data', e);
//             }
//         };
//         loadUserData();
//     }, []);
  
//     const handleLogin = () => {
//         if (savedUserData) {
//             if (username === savedUserData.username && password === savedUserData.password) {
//                 alert('Login successful');
//             } else {
//                 alert('Invalid username or password');
//             }
//         } else {
//             alert('No user data found. Please sign up first.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar style='light' />
//             <Image style={styles.backgroundImage} source={require("../assets/Login.png")} />

//             <TouchableOpacity onPress={() => navigation.navigate('Splash')} style={styles.backButton}>
//                 <Ionicons name="chevron-back-circle" size={40} color="white" />
//             </TouchableOpacity>

//             <View style={styles.welcomeContainer}>
//                 <Text style={styles.welcomeText}>Welcome</Text>
//             </View>

//             <Text style={styles.loginPrompt}>Log in to your account</Text>

//             <View style={styles.inputContainer}>
//                 <FontAwesome name={"user"} size={24} color={"black"} style={styles.inputIcon} />
//                 <TextInput
//                     style={styles.textInput}
//                     placeholderTextColor={'black'}
//                     placeholder='Email or Phone number'
//                     value={username}
//                     onChangeText={setUsername}
//                 />
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

//             <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
//                 <Text style={styles.loginButtonText}>
//                     Log in
//                 </Text>
//             </TouchableOpacity>

//             <View style={styles.signUpPromptContainer}>
//                 <Text style={styles.signUpPromptText}>Don't have an account?</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
//                     <Text style={styles.signUpText}>Sign Up</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// export default LoginScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black'
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
//     welcomeContainer: {
//         marginTop: 32,
//         alignItems: 'center'
//     },
//     welcomeText: {
//         textAlign: "center",
//         fontSize: 70,
//         fontWeight: "400",
//         color: "white"
//     },
//     loginPrompt: {
//         textAlign: "center",
//         fontSize: 20,
//         color: "white",
//         marginBottom: 30,
//         fontWeight: "400"
//     },
//     inputContainer: {
//         backgroundColor: "#aaa9a8",
//         flexDirection: "row",
//         borderRadius: 30,
//         marginHorizontal: 20,
//         elevation: 20,
//         marginVertical: 10,
//         alignItems: "center",
//         height: 60
//     },
//     inputIcon: {
//         marginLeft: 15,
//         marginRight: 10
//     },
//     textInput: {
//         flex: 1,
//         color: "black"
//     },
//     loginButton: {
//         backgroundColor: "#aaa9a8",
//         borderRadius: 30,
//         marginHorizontal: 20,
//         height: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20
//     },
//     loginButtonText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'black'
//     },
//     signUpPromptContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         paddingTop: 48
//     },
//     signUpPromptText: {
//         color: 'white',
//         fontSize: 16
//     },
//     signUpText: {
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
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      // Alert.alert("Success", "User signed in successfully");
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
            Log in
          </Text>

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
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;


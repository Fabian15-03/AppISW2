import React , {useRef} from 'react';
import {StyleSheet,StatusBar,ImageBackground} from 'react-native';
import RegisterForm from "./RegisterForm";
import Toast from "react-native-easy-toast";
import colors from "../Utils/colors"
import { SafeAreaView } from 'react-native';
import {Text,NativeBaseProvider} from "native-base"

export default function Login()
{
    const toastref = useRef();

    return(
        <NativeBaseProvider>
        <ImageBackground source={require('../../assets/a.png')} resizeMode="repeat" style={styles.image}>
        <SafeAreaView style={styles.container}>
        <StatusBar/>
        <Text style={styles.bienvenido}>Bienvenido</Text>
        <Text fontSize={"md"} style={styles.text}>Agrega tus datos , así podremos reconocerte más adelante.</Text>
            <RegisterForm toastref={toastref}/>
            <Toast ref = {toastref} position="center" opacity= {0.9} />
        </SafeAreaView>
        </ImageBackground>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
    },

    text:{
        color:'#fff',
        paddingTop:7,
        marginLeft:"5%",
        fontWeight:"bold",
    },

    bienvenido:{
        fontWeight:'bold',
        fontSize: 32,
        color: colors.ORANGE,
        paddingTop:10,
        marginTop:"5%",
        paddingBottom: 2,
        marginLeft:"5%"
        
    },
    image: {
        flex: 1,
        justifyContent:"flex-start",

        
      }
})

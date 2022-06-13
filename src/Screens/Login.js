import React , {useState,useRef} from 'react';
import {StyleSheet,StatusBar,TextInput ,ImageBackground , KeyboardAvoidingView} from 'react-native';
import colors from "../Utils/colors"
import { SafeAreaView } from 'react-native';
import {Input} from 'react-native-elements';
import {useNavigation} from "@react-navigation/native";
import {
    Text,
    View,
    NativeBaseProvider,
    Button,
  } from "native-base"

export default function Login(props) {

    const {toastref} = props;
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigation = useNavigation();
    const [loading, setloading] = useState(false);
    const [show,setshow] = useState(true);

    const [callingcode , setcallingcode ] = useState("51")
    const [phone, setphone] = useState("")
    const [country, setcountry] = useState("PE")
    const inputphone = useRef();

  

    return (
        <NativeBaseProvider>
        <ImageBackground source={require('../../assets/a.png')} resizeMode="repeat" style={styles.image}>
        <SafeAreaView>
        <StatusBar/>
        <KeyboardAvoidingView>
        <Text style={styles.bienvenido}>Ingresa con tu Email</Text>
        <Text fontSize={"md"} style={styles.text}>Si ya tienes una cuenta , puedes ingresar solo con tu email.</Text>

        <View style={styles.container}>
        <Text style={styles.texto}>Correo Electrónico :</Text>        
                <Input placeholder="Ingrese su correo"
                containerStyle={styles.input} 
                leftIcon={{
                    type:"material-community",
                    name:"account-circle-outline",
                    color:colors.ORANGE,
                }}
                inputStyle={styles.data}
                onChangeText={(text)=>{
                    setemail(text);
                }}
                secureTextEntry={false}
                value={email}
                />
            <Text style={styles.texto}>Contraseña :</Text>
                <Input 
                placeholder="Ingrese su contraseña"
                containerStyle={styles.input}
                leftIcon={{
                type:"material-community",
                    name:"security",
                    color:colors.ORANGE,
                }}
                rightIcon ={{
                    type:"material-community",
                    name: show ? "eye-outline" :'eye-off-outline',
                    color:colors.ORANGE,
                    onPress: ()=> setshow(!show),
                }}
                inputStyle={styles.data}
                onChangeText={(text)=>{
                    setpassword(text);
                }}
                secureTextEntry={show}
                value={password}
                selectionColor={colors.WHITE}
                />
            </View>
            

            <View alignItems={"center"}>
                <Button
                    mt={"15%"}
                    bgColor={colors.ORANGE}
                    width={"80%"}
                    borderRadius={20}
                    pt={5}
                    pb={5}
                    onPress
                    size={"md"}
                    title="Ingresar"
                    > Ingresa a tu cuenta </Button>
            </View>

        <View alignItems={"center"}>
            <Text style={styles.txtcrearcuenta}>
                ¿Aún no tienes una cuenta? <Text style={styles.cuenta} 
                onPress={()=> navigation.navigate("register")}
                > {""} 
                Crea una cuenta</Text> 
            </Text>
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
        </ImageBackground>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({

    text:{
        color:'#fff',
        paddingTop:7,
        marginLeft:"5%",
        fontWeight:"bold",
    },

    bienvenido:{
        fontWeight:'bold',
        fontSize: 28,
        color: colors.ORANGE,
        paddingTop:10,
        marginTop:"5%",
        paddingBottom: 2,
        marginLeft:"5%",

        
        
    },

    container:{
        alignItems:'center',
        justifyContent:"space-between",
        marginTop:"7%",
    },

    input:{
        width:"95%",
        height:50,
        alignSelf:"center"
    },

    btnentrada:{
        width:"60%",
        marginTop:20,
        borderRadius: 12,   
    },

    txtcrearcuenta:{
        marginTop:25,
        fontSize:17,
        color:colors.WHITE
    },
    
    cuenta:{

        color:colors.ORANGE,
        fontSize: 20,
        fontWeight:"600",
    },

    txto:{
        fontWeight: "bold",
        fontSize:22,
        marginTop:10,
        color:colors.WHITE
    },

    btnlogin:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:20,
        width:'95%',
        marginBottom:20
    },

    btnloginsociala:{
        backgroundColor:colors.WHITE,
        paddingHorizontal: 35,
        paddingVertical:10,
        borderRadius:20,
    },
    btnloginsocialf:{
        backgroundColor:"#3B5998",
        paddingHorizontal: 35,
        paddingVertical:10,
        borderRadius:20,
  
    },
    btnloginsocialg:{
        backgroundColor:"#ea4335",
        paddingHorizontal: 35,
        paddingVertical:10,
        borderRadius:20,
    },
    data:{
       color: colors.WHITE,
       fontWeight:"600",
    },

    texto:{
        color:"#E7E0D4",
        fontSize:17,
        alignSelf:"flex-start",
        paddingTop:15,
        paddingLeft:30,
        fontWeight:"600",
        
    },

    // Estilos del Mover

    txtcrearcuenta:{
        marginTop:45,
        fontSize:17,
        color:colors.WHITE
    },
    
    cuenta:{

        color:colors.ORANGE,
        fontSize: 20,
        fontWeight:"600",
    },

    image: {
        flex: 1,
        justifyContent:"flex-start",

        
      }
    
    
})

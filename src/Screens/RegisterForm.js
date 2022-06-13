import React , {useState,useRef} from 'react';
import { StyleSheet,TextInput,ImageBackground} from 'react-native';
import {Divider} from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal'
import {useNavigation} from "@react-navigation/native";
import Loading from "../Components/Loading";
import {isEmpty, size} from "lodash";
import { MaterialCommunityIcons} from "@expo/vector-icons"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native';
import {
    HStack,
    Text,
    View,
    VStack,
    Button,
    Input,
    Icon,
    NativeBaseProvider
  } from "native-base"

 



  import colors from "../Utils/colors";
  import { validaremail } from '../Utils/Utilities';
  import AuthRoute from '../Navigation/AuthRoute';


export default function RegisterForm(props) {
    const {toastref} = props;

    const [name,setname] = useState("");
    const [email,setemail] = useState("")
    const [dni,setdni] = useState("");
    const [district,setdistrict] = useState("");

    const [password,setpassword] = useState("");
    const [repassword,setrepassword]=useState("");
    
    const [loading, setloading] = useState(false);
    const [show,setshow] = useState(true);

    const navigation = useNavigation();

    const [callingcode , setcallingcode ] = useState("51")
    const [phone, setphone] = useState("")
    const [country, setcountry] = useState("PE")
    const inputphone = useRef();



     function crearcuenta()
     {
        if(isEmpty(email) || isEmpty(password) || isEmpty(repassword) || isEmpty(name) || isEmpty(phone)|| isEmpty(dni) || isEmpty(district) )
        {
            toastref.current.show("Debe ingresar todos los Datos solicitados.");
        }else if(!validaremail(email)){
            toastref.current.show("Ingrese un correo válido");
        }else {
            setloading(true);
            createUserWithEmailAndPassword(auth,email,password)
            //inicio sesion 
            .then((userCredential)=>{
                setloading(false);
                toastref.current.show("Ha iniciado sesión correctamente");
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('AuthRoute')
            })
            .catch((error) => {
                setloading(false);
                toastref.current.show("Ha ocurrido un error o puede que este usuario este registrado , intentelo nuevamente");
                console.log(error)
                
            });
            
            
        
        }
    }

    

    // Vista del login bajo el logo.

    return (
        <NativeBaseProvider>
        <ImageBackground source={require('../../assets/a.png')} resizeMode="repeat" style={styles.image}>
        <SafeAreaView style={styles.container}> 
        <KeyboardAwareScrollView>
            <VStack>
            <HStack>
                <View flex={1}>
                    <Text style={styles.texto}>Nombre y Apellido :</Text>        
                    <Input
                    alignSelf={'center'}
                    w={{
                    base: "95%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="account-circle-outline" />}
                        size={"sm"}
                        color={colors.ORANGE}
                    />
                    }
                    onChangeText={(text)=>{
                        setname(text);
                    }}
                    secureTextEntry={false}
                    variant="underlined"
                    selectionColor={colors.ORANGE}
                    borderColor={colors.ORANGE}
                    placeholder="Ingrese su Nombre y Apellidos"
                    style={styles.datain}
                    value={name}/> 
                </View>
            </HStack>

            <HStack>
                <View flex={1}>
                    <Text style={styles.texto}>E-mail:</Text>
                    <Input
                    alignSelf={'center'}
                    w={{
                    base: "95%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="at" />}
                        size={"sm"}
                        color={colors.ORANGE}
                    />
                    }
                    onChangeText={(text)=>{
                        setemail(text);
                    }}
                    secureTextEntry={false}
                    
                    variant="underlined"
                    borderColor={colors.ORANGE}
                    selectionColor={colors.ORANGE}
                    placeholder="Ingrese su E-mail"
                    style={styles.datain}
                    
                    value={email}/>
                </View>
            </HStack>

            <HStack >
                
                <View flex={1}>
                    <Text style={styles.texto}>Contraseña:</Text>
                    <Input
                    alignSelf={'center'}
                    w={{
                    base: "95%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="key" />}
                        size={"sm"}
                        color={colors.ORANGE}
                    />
                    }
                    InputRightElement={
                    <Icon
                        as={<MaterialCommunityIcons name={ show ? "eye-off-outline" : "eye-outline"}/>}
                        size={"sm"}
                        color={colors.ORANGE}
                        onPress={()=> setshow(!show)}
                        
                    />
                    }
                    onChangeText={(text)=>{
                        setpassword(text);
                    }}
                    secureTextEntry={show}
                    
                    variant="underlined"
                    borderColor={colors.ORANGE}
                    selectionColor={colors.ORANGE}
                    placeholder="Ingrese su contraseña"
                    style={styles.datain}
                    value={password}
                    />
                </View>   
            </HStack>
            
            <HStack>
                <View flex={1} >
                    <Text style={styles.texto}>Repetir Contraseña:</Text>        
                    <Input
                    alignSelf={'center'}
                    w={{
                    base: "95%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="key" />}
                        size={"sm"}
                        color={colors.ORANGE}
                    />
                    }
                    onChangeText={(text)=>{
                        setrepassword(text);
                    }}
                    secureTextEntry={show}

                    variant="underlined"
                    selectionColor={colors.ORANGE}
                    borderColor={colors.ORANGE}
                    placeholder="Confirme su contraseña"
                    style={styles.datain}
                    value={repassword}
                    />
                </View>
            </HStack>

            <HStack alignSelf={"center"}  mt={"1%"}>
            <View flex={0.4} >
                <Text  style={styles.texto}>DNI:</Text>
                <Input
                    alignSelf={'center'}
                    w={{
                    base: "90%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="badge-account-horizontal-outline" />}
                        size={"sm"}
                        color={colors.ORANGE}
                    />
                    }onChangeText={(text)=>{
                        setdni(text);
                    }}
                    secureTextEntry={false}
                    
                    variant="underlined"
                    borderColor={colors.ORANGE}
                    keyboardType='numeric'
                    selectionColor={colors.ORANGE}
                    placeholder="Ingrese DNI"
                    value={dni}
                    style={styles.datain}
                    />
                </View>
                
                <View flex={0.6}>
                <Text  style={styles.texto}>Distrito:</Text>
                <Input
                    alignSelf={'center'}
                    w={{
                    base: "90%",
                    md: "25%",
                    }}
                    InputLeftElement={
                    <Icon
                        as={<MaterialCommunityIcons name="map" />}
                        size={"sm"}
                        color={colors.ORANGE}
                    />
                    }
                    onChangeText={(text)=>{
                        setdistrict(text);
                    }}
                    secureTextEntry={false}

                    variant="underlined"
                    borderColor={colors.ORANGE}
                    selectionColor={colors.ORANGE}
                    placeholder="Ingrese su distrito"
                    value={district}
                    style={styles.datain}/>
                </View>
            </HStack>
            </VStack>
                
                <View >
                <Text  style={styles.texto}>Número de Teléfono:</Text>
                </View>
                <View mt={"5%"} style={styles.viewtelefono}>
                    <CountryPicker 
                        withFlag
                        withCallingCode
                        withFilter
                        countryCode = {country}
                        onSelect={(Country) => {
                            setcountry(Country.cca2);
                            setcallingcode(...Country.callingCode);
                        }}
                    />
                        <Text style={{color:"#fff"}}> || </Text>
                        <TextInput 
                        placeholder="Número de Whatsapp"
                        keyboardType="numeric"
                        style={styles.numberin} 
                        placeholderTextColor="#fff" 
                        onChangeText={(text)=>setphone(text)} 
                        value={phone} 
                        ref={inputphone}/>
                    </View>

                    <Divider style={{backgroundColor:colors.ORANGE, height: 1 , width: "90%" , marginTop:20 , alignSelf:"center"}}/>
                    
            
                <View alignItems={"center"}>
                <Button
                    mt={"7%"}
                    bgColor={"#006AFF"}
                    width={"80%"}
                    borderRadius={20}
                    pt={3}
                    pb={3}
                    onPress={()=> crearcuenta()}
                    size={"lg"}
                    >Registrar

                </Button>
                </View>

            <View alignItems={"center"}>
            <Text style={styles.txtcrearcuenta}>
                ¿Ya tienes una cuenta? <Text style={styles.cuenta} 
                onPress={()=> navigation.navigate("login")}
                > {""} 
                Regresar</Text> 
            </Text>
            </View>
            


           
            <Loading isVisible={loading} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
        </ImageBackground>
        </NativeBaseProvider>
        
    )
}
    
const styles = StyleSheet.create({
    container:{
        flex : 1, 
        marginTop:5,
        marginLeft:7,
        marginRight:7,      
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


    btnlogin:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:20,
        width:'95%',
        marginBottom:20
    },

    texto:{
        color:"#E7E0D4",
        fontSize:20,
        alignSelf:"flex-start",
        paddingLeft:10,
        marginTop:"4%",
        fontWeight:"600",
        
    },

    datain:{
        fontSize: 20 ,
        color: colors.WHITE,
        fontWeight:"300"
    },

    // Estilos del Telefono

    viewtelefono:{
        flexDirection: "row",
        alignItems:"center",
        borderRadius:15,
        height:50,
        marginHorizontal:40,
        paddingHorizontal:20,
        backgroundColor:"#444444",
        borderWidth:2,
        borderColor:colors.ORANGE
    },
    numberin :{
        color:"#fff",
        fontWeight:"700",
        fontSize:18,
        width:"80%",
        height:50,
        marginLeft:5,
        
        
    },
    image: {
        flex:1,
        justifyContent:"flex-start",

        
      }

    
})


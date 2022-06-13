import React from 'react'
import { StyleSheet , SafeAreaView , ImageBackground , Image} from 'react-native'
import colors from '../Utils/colors'
import {Icon} from 'react-native-elements';
import { MaterialCommunityIcons , AntDesign , FontAwesome5 , MaterialIcons} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native";
import {Text,Button,NativeBaseProvider,View} from "native-base"
import AuthRoute from '../Navigation/AuthRoute';
 



export default function StaticScreen() {
    
    const navigation = useNavigation();

    return (
    <NativeBaseProvider>
        <ImageBackground style={styles.container} source={require('../../assets/a.png')} resizeMode="repeat" imageStyle={styles.image}>

        <SafeAreaView>

        
        <Image source={require('../../assets/logoshoes.png')} style={styles.logo}/>

        <View alignItems={"center"} mt={"1/2"}  >

            <Button 
            bgColor={"#000000"}
            width={"80%"}
            borderRadius={20}
            pt={3}
            pb={3}
            mt={2}
            mb={2}
            
            
            startIcon={<AntDesign name="apple1" size={24} color="white" />}
            onPress>
            <Text fontWeight="bold" color={colors.WHITE} fontSize={"lg"}>Continúa con Apple</Text>
            </Button>

            <Button 
            bgColor={"#006AFF"}
            width={"80%"}
            borderRadius={20}
            pt={3}
            pb={3}
            mt={2}
            mb={2}
            
            
            startIcon={<Icon as={MaterialCommunityIcons} name="facebook" color={colors.WHITE}/>}
            onPress>
            <Text fontWeight="bold" color={colors.WHITE} fontSize={"lg"}>Continúa con Facebook</Text>
            </Button>

            <Button 
                bgColor={"#25D366"}
                width={"80%"}
                borderRadius={20}
                pt={3}
                pb={3}
                mt={2}
                mb={2}
                
                
                
                startIcon={<FontAwesome5 name="phone-alt" size={24} color="white" />}
                onPress={()=> navigation.navigate('login')} >
            <Text fontWeight="bold" color={colors.WHITE} fontSize={"lg"}>Continúa con tu teléfono</Text>
            </Button>

            <Button 
            bgColor={colors.ORANGE}
            width={"80%"}
            borderRadius={20}
            pt={3}
            pb={3}
            mt={2}
            mb={2}
            startIcon={<MaterialIcons name="developer-mode" size={24} color="white" />}
            onPress={ () => console.log("aea")} >
            <Text fontWeight="bold" color={colors.WHITE} fontSize={"xl"}> Modo Developer</Text>
            </Button>
            </View>

            

            </SafeAreaView>
            </ImageBackground>
        </NativeBaseProvider>
        
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 10,
        backgroundColor : colors.BACKGROUNDCOLOR,
        justifyContent:"space-between"
       
    },

    image: {
        flex:1,
      },

      logo:{
       
        width : 150,
        height : 150,
        borderRadius:200,
        alignSelf :'center',
        marginTop:50
        

      }


   

})
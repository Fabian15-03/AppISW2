import React from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet, View } from 'react-native'
import colors from "../../Utils/colors"
import { SafeAreaView } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SearchBar from "react-native-dynamic-search-bar";
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RestaurantesForm from '../../Components/RestaurantesForm';

import PromoScroll from "../../Components/PromoScroll"

import {
    Text,
    NativeBaseProvider,
    Button,
  } from "native-base"
  import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function Tienda() {
    
    const navigation = useNavigation();
    //const [filteredData, setFilteredData] = useState(data);
    //const [data , setData] = useState([]);

    /*useEffect(() => {
        fetch("../../Components/ListRestaurantes.js")
          .then((response) => response.json())
          .then((responseJson) => {
            setFilteredData(responseJson);
            setData(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);*/

      /*const searchFilterFunction = (text) => {
        if(text){
            const newData = data.filter(item => {
                const itemData = `${item.title.toUpperCase()}`;
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
        }
        else{
            setFilteredData(data);
        }
    }*/

    return (
        <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <View>
            <View style={{width:'90%' , flexDirection:'row'}}>
            <View>
            <Text style={styles.text1}>Encuentra tu</Text>
            <Text style={styles.text2}>Resturante Favorito</Text>
            </View>
            <View style={{ paddingTop:10 ,width:'40%' , flexDirection:'row' , justifyContent:"center" , alignItems:"center"}}>

            <Icon
            raised
            size={32}
            name='street-view'
            color={colors.WHITE}
            onPress={()=> navigation.navigate("")}
            style={{backgroundColor:colors.BACKGROUNDCOLOR}}
            />
            </View>
            </View>
            <SearchBar
                style={styles.search}
                placeholder="Buscar"
                onChangeText={(text) => console.log(text)}
                fontWeight={'500'}  
            />
            <View style={{flexDirection:"row" , justifyContent:"space-around" , alignItems:"center" , paddingHorizontal:10 , marginTop:10}}>
            
            <PromoScroll/>
        <Button 
            bgColor={colors.ORANGE}
            width={"30%"}
            borderRadius={10}
            p={2}
            startIcon={<Icon as={MaterialCommunityIcons} name="map" color={"green"}/>}
            onPress>
        <Text fontWeight="600" color={colors.WHITE}>Cerca a tí</Text></Button>
        <Button 
            bgColor={colors.ORANGE}
            width={"30%"}
            borderRadius={10}
            p={2}
            startIcon={<Icon as={MaterialCommunityIcons} name="star" color={"yellow"}/>}
            onPress>
        <Text fontWeight="600" color={colors.WHITE}>Valoración</Text></Button>
        </View>
            </View>
            <Divider style={{backgroundColor:colors.ORANGE, height: 2 , width: "90%" , marginTop:10 , alignSelf:"center"}}/>

                <RestaurantesForm />   
        </SafeAreaView>
        </NativeBaseProvider>
        
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.BACKGROUNDCOLOR,
    },
    text1:{
        paddingTop:10,
        fontSize:24,
        color: colors.WHITE,
        fontWeight:"700",
        paddingHorizontal:35,
    },
    text2:{
        fontSize:28,
        paddingTop:7,
        color: colors.ORANGE,
        fontWeight:"700",
        paddingHorizontal:35,
    },
    search:{
        height:32,
        marginTop:"2%",
        backgroundColor:"#bdc3c7"
    },
    btnmenu:{
        color:colors.ORANGE
    }
})
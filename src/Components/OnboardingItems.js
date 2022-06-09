import React from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View , Image , useWindowDimensions } from 'react-native'
import Emoji from 'react-native-emoji';
import colors from "../Utils/colors";

export default OnboardingItems = ({item}) => {

    const {width} = useWindowDimensions();

    return (
        <SafeAreaView style={[styles.container , {width}]}>
            <Image source={item.image} style={[styles.image , {width , resizeMode:'contain'}]}/>
            <View style={styles.content}>
                <Text style={styles.title}>"{item.title}"</Text>
                <Text style={styles.description}>{item.description}.  <Emoji name="grin" style={{fontSize: 20}}/></Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:'center',


    },
    content:{
        flex:0.5,
    },
    image:{
        flex:0.50,
        marginTop:20,
    },
    title:{
        fontWeight:'800',
        fontSize:30,
        color: colors.ORANGE,
        textAlign:'center',
        marginTop:30,
    },
    description:{
        marginTop:20,
        fontWeight:'600',
        color:colors.WHITE,
        fontSize:16,
        textAlign: 'center',
        paddingHorizontal:60,
    }
})
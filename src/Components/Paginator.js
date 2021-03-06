import React from 'react'
import { StyleSheet, View , Animated , useWindowDimensions } from 'react-native'
import colors from "../Utils/colors"

export default Paginator = ({data , scrollX}) => {
    const {width} = useWindowDimensions();

    return (
        <View style={{flexDirection:'row' , height:64 , alignItems:'center' , marginBottom:50}}>
            {data.map((_,i) => {
                const inputRange = [(i-1) * width , i * width , (i+1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3, 1 ,0.3],
                    extrapolate:'clamp',
                })

                return <Animated.View style={[styles.dot , {width: dotWidth , opacity}]} key={i.toString()} />;
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dot:{
        marginTop:10,
        height:10,
        borderRadius:5,
        marginHorizontal:8,
        backgroundColor:colors.ORANGE,

    },
})

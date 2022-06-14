import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';


import TiendaStack from './TiendaStack';
import PerfilStack from './ProfileStack';
import ServicioStack from "./ServiceStack";
import HistorialStack from "./HistoryStack";
import colors from '../Utils/colors';

const Tab = createBottomTabNavigator();

const TabBar = ()=> {
    return(
        <Tab.Navigator initialRouteName="tienda" sceneContainerStyle={{backgroundColor:colors.BACKGROUNDCOLOR}} screenOptions={{
            tabBarActiveTintColor:colors.ORANGE,
            tabBarInactiveTintColor:colors.WHITE,
            tabBarStyle:{
                borderTopWidth:2,
                borderTopColor: colors.ORANGE,
                alignItems:"center",
                height:"8.25%",
                backgroundColor: colors.BACKGROUNDCOLOR,
                paddingBottom: 15,
            },
            tabBarLabelStyle:{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 12,
            }

        }}>
            <Tab.Screen 
            component={TiendaStack} 
            name="Restaurantes" 
            options={{headerShown:false,
                    tabBarIcon: ({color}) => (
                    <Icon
                      name="home"
                      color={color}
                      size={35}
                    />
                  ),
            }}/>

            <Tab.Screen 
            component={HistorialStack}
             name="Historial" 
             options={{headerShown:false,
                tabBarIcon: ({color}) => (
                    <Icon
                      name="history"
                      color={color}
                      size={35}
                    />
                  ),
             }}/>

            <Tab.Screen 
            component={ServicioStack}
            name="Servicio"
            options={{headerShown:false,
                tabBarIcon: ({color}) => (
                    <Icon
                      name="contact-support"
                      color={color}
                      size={35}
                    />
                  ),
            }}  />

            <Tab.Screen component={PerfilStack} name="Cuenta" options={{headerShown:false ,tabBarIcon: ({color}) => (
                    <Icon
                      name="person"
                      color={color}
                      size={35}
                    />
                  ), }} />

        </Tab.Navigator>
    );
};

function mostrarIcono(route,color)
{
    let iconName ="";
    switch(route.name)
    {
        case "tienda":
        iconName ="cart-outline";
        break;

        case "cuenta":
        iconName ="account-circle-outline";

        break;
        case "historial":
        iconName ="clock-time-four-outline";
        break;

        case "servicio":
        iconName ="robot";
        break;

        case "mitienda":
        iconName="cart-outline";
        break;

    }

    return(
        <Icon type="material-community" name={iconName} size={35} color={color} iconStyle={{marginBottom:0,}}/>
        
    )
}

export default function AuthRoute()
{
    return(
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    );
    
};   
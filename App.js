import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList, Modal } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function ScreenA(){
  return(
    <View style={styles.container}><Text style = {styles.text}>Helloo</Text></View>  
  )
}
function ScreenB(){
  return(
    <View style={styles.container}><Text style = {styles.text}>Hi</Text></View>  
  )
}

function App() {
  const [Items, setItems] = useState([
    {key: 0,Name: "Text 1"},
    {key: 1, Name: "Text 2"},
    {key: 2, Name: "Text 3"},
    {key: 3, Name: "Text 4"},
    {key: 4, Name: "Text 5"},
    {key: 5, Name: "Text 6"},
    {key: 6, Name: "Text 7"},
    {key: 7, Name: "Text 8"},
    {key: 8, Name: "Text 9"},
    {key: 9, Name: "Text 10"},
    {key: 10, Name: "Text 11"},
    {key: 11, Name: "Text 12"},
    {key: 12, Name: "Text 13"},

  ])
  
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={
    ({route}) => ({
      tabBarIcon:({focused,size,color}) => {
        let iconName;
        if(route.name==="Home"){
          iconName = 'home';
          size =  18;
          color= focused ? '#0fff':'#00999';
        }else if(route.name === 'Market'){
          iconName = 'poll';
          size =  18;
          color= focused ? '#0fff':'#00999';
        }else if(route.name === 'Trade'){
          iconName = 'shopping-cart';
          size =  18;
          color= focused ? '#0fff':'#00999';
        }else if(route.name === 'Wallet'){
          iconName = 'wallet';
          size =  18;
          color= focused ? '#0fff':'#00999';
        }
        return(
          <FontAwesome5
            name={iconName}
            size={size}
            color={color}
          />
        )  
      }
    })
  }
  tabBarOptions={{
    activeTintColor: '#0fff'
  }}
    >
      <Tab.Screen name="Home" component={ScreenA} />
      <Tab.Screen name="Market" component={ScreenB} />
      <Tab.Screen name="Trade" component={ScreenA} />
      <Tab.Screen name="Wallet" component={ScreenB} />
    </Tab.Navigator></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Navigator:{
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView:{
    flex: 1,
    width: "100%",
  },
  item:{
    flex: 1,
    backgroundColor: '#0fff',
    height: "10%",
    width: "94%",
    margin: 6,
    borderRadius:10,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 38,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  }
})
export default App;
import { View, Tex,StyleSheet, Animated, Text, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import Demo1 from './src/components/demo1'
import FadeView from './src/components/FadeView'
import SlideView from './src/components/SlideView'
import BgView from './src/components/BgView'
import TransformView from './src/components/TransformView'
import Demo from './src/components/Demo'
import PanResponderScreen from './src/components/PanResponderScreen'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/navigation/navigation'
import Demo2 from './src/components/demo2'
import Demo3 from './src/components/demo3'
const App = () => {

  // useEffect(() => {
  //   Animated.sequence([ fadeViewAni, SlideViewAni]).start();
  // }, [])

  return (
    <NavigationContainer>

    
    <View style={styles.container}>
      {/* <BgView />
      <FadeView />
      <TransformView style={{backgroundColor:'black'}}>
        <Text>Transfrom View</Text>
      </TransformView>
      <SlideView />
      <Demo1 /> */}
      <StatusBar hidden={true} />
      {/* <PanResponderScreen /> */}
      {/* <Routes/> */}
      {/* <Demo/> */}
      {/* <Demo2/> */}
      <Demo3/>
    </View>
    </NavigationContainer>
  )
}

export default App

const styles= StyleSheet.create({
  container:{
    flex:1, 
    // alignItems:'center',
    // backgroundColor:'lightblue',
    // flexWrap:'wrap',
    // flexDirection:'row'
  }
})
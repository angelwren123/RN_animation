import { View, Text, Animated, Easing } from 'react-native'
import React from 'react'
import { useEffect,  } from 'react'
const marginLeft = new Animated.Value(-700);
export const SlideViewAni = Animated.timing(marginLeft,{
    toValue:10,
    useNativeDriver:false,
    duration:1000,
    // easing:Easing.quad
})
const SlideView = () => {
    
    useEffect(()=>{
        SlideViewAni.start()
    },[])

    return (
        <Animated.View
            style={{
                // marginLeft: marginLeft,
                width: 80,
                height: 80,
                backgroundColor: 'red',
                marginLeft: marginLeft,
                marginTop:10
            }}
        >
            <Text 
            style={{color:'white'}}
            >
                SlideView
            </Text>
        </Animated.View>
    )
}

export default SlideView
import { View, Text, Animated, Easing } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'

const opacity = new Animated.Value(0);
export const fadeViewAni = Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false,
})
const FadeView = () => {
    
    useEffect(() => {
        fadeViewAni.start();
    }, [])
    return (
        <Animated.View
            style={{
                opacity: opacity,
                width: 80,
                height: 80,
                backgroundColor: 'green',
                margin: 10,
                
            }}
        >
            <Text
                style={{ color: 'white' }}
            >
                FadeView
            </Text>
        </Animated.View>
    )
}

export default FadeView

import { View, Text, Animated, Easing, Dimensions, Image, ImageBackground, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import background from '../assets/background.png'

const { height, width } = Dimensions.get('window');

const opacity = new Animated.Value(0)

const OpacityAnim = Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false
})

var AnimatedImage = Animated.createAnimatedComponent(ImageBackground)



const marginLeft = new Animated.Value(0);
const marginTop = new Animated.Value(0);
const demo1 = (props) => {

    const [coordinate, setCoordinate] = useState({
        x: 0,
        y: 0,
    })
    useEffect(() => {
        OpacityAnim.start()
    }, [])

    const onPress = (e) => {
        const { pageX, pageY } = e.nativeEvent;
        setCoordinate({
            ...coordinate,
            x: pageX,
            y: pageY
        })
        console.log(pageX, pageY);
    }
    const onMove = (e) => {
        const { pageX, pageY } = e.nativeEvent;
        const { x, y } = coordinate;

        const ani1 = Animated.timing(marginLeft,{
            toValue:pageX - x,
            duration:0,
            useNativeDriver:false,
        })
        const ani2 = Animated.spring(marginTop,{
            toValue:pageY - y,
            duration:0,
            useNativeDriver:false,
        })

        Animated.parallel([ani1,ani2]).start();


    }
    const onRelease = (e) => {
        const { pageX, pageY } = e.nativeEvent;

        const ani1 = Animated.timing(marginLeft,{
            toValue:0,
            duration:0,
            useNativeDriver:false,
        })
        const ani2 = Animated.spring(marginTop,{
            toValue:0,
            duration:0,
            useNativeDriver:false,
        })
        Animated.parallel([ani1,ani2]).start()

    }
    return (
        <AnimatedImage
            source={background}
            style={{
                // resizeMode: 'cover',
                width,
                height,
                opacity,
                alignItems: 'center',
                justifyContent: 'center',
                // paddingTop: 100,
            }}
        >
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderMove={(evt) => { onMove(evt) }}
                onResponderRelease={(evt) => { onRelease(evt) }}
                onResponderGrant={(evt) => onPress(evt)}
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',
                    
                }}
            >
                <Animated.Image
                    source={require('../assets/logo.jpg')}
                    style={{
                        width: 100 + '%',
                        height: 100 + '%',
                        marginLeft:marginLeft,
                        marginTop:marginTop,
                    }}
                />
            </View>
        </AnimatedImage>
    )
}

export default demo1
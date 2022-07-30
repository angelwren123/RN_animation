import { View, Text, Animated,Easing } from 'react-native'
import React from 'react'

const backgroundColor = new Animated.Value(0)

export const BgViewAnim = Animated.timing(backgroundColor,{
    toValue:100,
    useNativeDriver:false,
    duration:1000,
    // easing:Easing.linear
})
const BgView = () => {
    React.useEffect(() => {
        Animated.loop(BgViewAnim).start()
    }, [])
    return (
        <Animated.View
            style={{
                width: 80,
                height: 80,
                margin: 10,
                backgroundColor: backgroundColor.interpolate({
                    inputRange: [0,50,100],
                    outputRange: ['black', 'red', 'blue'],
                    // extrapolateRight:'clamp'
                }),
            }}
        >
            <Text
                style={{ color: 'white' }}
            >
                BgView
            </Text>
        </Animated.View>
    )
}

export default BgView
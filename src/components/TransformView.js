import { View, Text, Animated, Easing } from 'react-native'
import React from 'react'

const rotale = new Animated.Value(0)

export const TransformViewAnim = Animated.timing(rotale, {
    toValue: 360,
    useNativeDriver: true,
    duration: 1000,
    // easing:Easing.linear
})
const TransformView = (props) => {
    React.useEffect(() => {
        Animated.loop(TransformViewAnim).start()
    }, [])
    return (
        <Animated.View
            style={{
                width: 80,
                height: 80,
                margin: 10,
                transform: [{rotateZ:rotale.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg']
                })}],
                ...props.style
            }}
        >
            <Text
                style={{ color: 'white' }}
            >
                {props.children}
            </Text>
        </Animated.View>
    )
}

export default TransformView
import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const Demo3 = () => {

    const Ball1 = useRef(
        new Animated.ValueXY({
            x: 0,
            y: 0,
        })
    ).current;
    const Ball2 = useRef(
        new Animated.ValueXY({
            x: -SCREEN_WIDTH / 2 + 100,
            y: -SCREEN_HEIGHT / 2 + 100,
        })
    ).current;
    const topLeft = Animated.timing(Ball1, {
        toValue: {
            x: SCREEN_WIDTH - 150 - 20,
            y: -SCREEN_HEIGHT + 150 + 20,
        },
        useNativeDriver: false,
    })
    const topRight = Animated.timing(Ball1, {
        toValue: {
            x: SCREEN_WIDTH,
            y: +SCREEN_HEIGHT / 2,
        },
        useNativeDriver: false,
    })

    const bottomRight = Animated.timing(Ball1, {
        toValue: {
            x: SCREEN_WIDTH / 2 - 100,
            y: SCREEN_HEIGHT / 2 - 100,
        },
        useNativeDriver: false,
    })

    const bottomLeft = Animated.timing(Ball1, {
        toValue: {
            x: -SCREEN_WIDTH / 2 + 100,
            y: SCREEN_HEIGHT / 2 - 100,
        },
        useNativeDriver: false,
    })

    const moveUp1 = () => {
        Animated.sequence([topLeft,]).start()
    }
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 30, flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                <Animated.View
                    style={{
                        backgroundColor: 'black',
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        transform: [
                            //   { rotateY: rotation },
                            ...Ball1.getTranslateTransform(),
                        ],
                    }}
                />
                <TouchableOpacity onPress={() => { moveUp1() }}>
                    <View style={{ marginTop: 30 }}>
                        <Text>Move1</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                <View
                    style={{ backgroundColor: 'red', width: 100, height: 100, borderRadius: 50 }}
                />
                <View style={{ marginTop: 30 }}>
                    <Text>Move</Text>
                </View>
            </View>
        </View>
    )
}

export default Demo3
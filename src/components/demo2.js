import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { Animated, Easing } from 'react-native'


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Demo2() {
    const POSITION = useRef(
        new Animated.ValueXY({
            x: 0,
            y: 0,
        })
    ).current;
  const topLeft = Animated.timing(POSITION, {
    toValue: {
      x: -SCREEN_WIDTH / 2 + 100,
      y: -SCREEN_HEIGHT / 2 + 100,
    },
    useNativeDriver: false,
  })

  const bottomRight = Animated.timing(POSITION, {
    toValue: {
      x: SCREEN_WIDTH / 2 - 100,
      y: SCREEN_HEIGHT / 2 - 100,
    },
    useNativeDriver: false,
  })
  const bottomLeft = Animated.timing(POSITION, {
    toValue: {
      x: -SCREEN_WIDTH / 2 + 100,
      y: SCREEN_HEIGHT / 2 - 100,
    },
    useNativeDriver: false,
  })
  const topRight = Animated.timing(POSITION, {
    toValue: {
      x: SCREEN_WIDTH / 2 - 100,
      y: -SCREEN_HEIGHT / 2 + 100,
    },
    useNativeDriver: false,
  })
  const moveUp = () => {
    Animated.loop(
      Animated.sequence([bottomLeft, bottomRight, topRight, topLeft])
    ).start()
  }

  const bgColor = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ['rgb(255,99,71)', 'rgb(71,166,255)'],
  })

  const rotation = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ['-360deg', '360deg'],
  })

  const opacityValue = POSITION.y.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [1, 0.5, 1],
  })

  const borderRadius = POSITION.y.interpolate({
    inputRange: [-300, 300],
    outputRange: [100, 0],
  })

  // Y_POSITION.addListener(() => {
  //   console.log(Y_POSITION),
  //     console.log(borderRadius),
  //     console.log(opacityValue)
  // })
  return (
    <View style ={{  flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
      <TouchableOpacity onPress={moveUp}>
        <Animated.View
          style={{
            backgroundColor: 'red',
            width: 200,
            height: 200,
            borderRadius,
            backgroundColor: bgColor,
            opacity: opacityValue,
            transform: [
            //   { rotateY: rotation },
              ...POSITION.getTranslateTransform(),
            ],
          }}
        />
      </TouchableOpacity>
    </View>
  )
}
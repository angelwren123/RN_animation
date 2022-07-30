import { Dimensions, Easing, View, Text, PanResponder, SafeAreaView, StyleSheet, Animated, ImageBackground } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get('window')

const Demo = () => {
    const navi = useNavigation();
    var AnimatedImage = Animated.createAnimatedComponent(ImageBackground)

    const opacityTxtG = new Animated.Value(0)
    const opacityTxtE1 = new Animated.Value(0)
    const opacityTxtT1 = new Animated.Value(0)
    const opacityTxtS = new Animated.Value(0)
    const opacityTxtT2 = new Animated.Value(0)
    const opacityTxtA = new Animated.Value(0)
    const opacityTxtR = new Animated.Value(0)
    const opacityTxtT3 = new Animated.Value(0)
    const opacityTxtE2 = new Animated.Value(0)
    const opacityTxtD = new Animated.Value(0)

    const opacityGS = new Animated.Value(0)
    const marginLeftBtn = new Animated.Value(-700)
    const marginLeftBtnIcon = new Animated.Value(0)

    const opacity = new Animated.Value(0);
    const rotateY = new Animated.Value(0.7);
    const marginLeft = new Animated.Value(-700);
    const marginLeft2 = new Animated.Value(-700);
    const opacityDot = new Animated.Value(0);

    const dot1 = new Animated.Value(0);
    const dot2 = new Animated.Value(0);
    const dot3 = new Animated.Value(0);
    const dot4 = new Animated.Value(0);
    const dot5 = new Animated.Value(0);
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (event, gestureState) => {
                console.log(event.nativeEvent);

                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                })
                pan.setValue({
                    x: 0,
                    y: 0
                })


            },
            onPanResponderMove: (e, gestureState) => {
                pan.x._value < 0 ? 0 : Animated.event([
                    null,
                    { dx: pan.x, dy: pan.y },

                ], { useNativeDriver: false })(e, gestureState)

            },
            onPanResponderRelease: (event, gestureState) => {
                console.log(event.nativeEvent);
                pan.flattenOffset();
                if (event.nativeEvent.pageX >= 350) {
                    pan.setValue({
                        x: 0,
                        y: 0
                    });
                    navi.navigate('Home')
                } else {
                    pan.setValue({
                        x: 0,
                        y: 0
                    });
                }
            }
        })
    ).current;

    useEffect(() => {
        const bgAnim1 = Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        });
        const bgAnim2 = Animated.timing(rotateY, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        });
        const finalBGAnim = Animated.parallel([bgAnim1, bgAnim2])

        const txtLm = Animated.timing(marginLeft, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bounce
        })
        const txtvc = Animated.timing(marginLeft2, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.linear
        })

        const dot = Animated.timing(opacityDot, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.circle
        })

        const dot1Anim = Animated.timing(dot1, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.bounce
        })

        const dot2Anim = Animated.timing(dot2, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.bounce,
        })

        const dot3Anim = Animated.timing(dot3, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.bounce,
        })

        const dot4Anim = Animated.timing(dot4, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.bounce,
        })

        const dot5Anim = Animated.timing(dot5, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.bounce,
        })

        const finalDot = Animated.sequence([dot1Anim, dot2Anim, dot3Anim, dot4Anim, dot5Anim])
        const finalDotLopp = Animated.loop(finalDot)
        Animated.sequence([finalBGAnim, txtLm, txtvc, dot, finalDotLopp]).start()
        // btn
        const txtGetStarted = Animated.timing(opacityGS, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
            easing: Easing.circle
        })

        const TxtGAnim1 = Animated.timing(opacityTxtG, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim2 = Animated.timing(opacityTxtE1, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim3 = Animated.timing(opacityTxtT1, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim4 = Animated.timing(opacityTxtS, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim5 = Animated.timing(opacityTxtT2, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim6 = Animated.timing(opacityTxtA, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim7 = Animated.timing(opacityTxtR, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim8 = Animated.timing(opacityTxtT3, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim9 = Animated.timing(opacityTxtE2, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const TxtGAnim10 = Animated.timing(opacityTxtD, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.circle
        })
        const btnAnim = Animated.timing(marginLeftBtn, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: false,
            easing: Easing.bounce
        })
        const btnIconAnim = Animated.timing(marginLeftBtnIcon, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
            easing: Easing.bounce
        })
        const finalbtnIconAnim = Animated.loop(btnIconAnim)
        const seqTxtGS = Animated.sequence([txtGetStarted, TxtGAnim1,TxtGAnim2,TxtGAnim3,TxtGAnim4,TxtGAnim5,TxtGAnim6,TxtGAnim7,TxtGAnim8,TxtGAnim9,TxtGAnim10])
        Animated.sequence([seqTxtGS, btnAnim, finalbtnIconAnim]).start()
    }, [])

    return (
        <AnimatedImage
            source={require('../assets/bg.jpg')}
            style={{

                width: width,
                height: height,
                opacity,
                transform: [{
                    rotateY: rotateY.interpolate({
                        inputRange: [0, 50, 100],
                        outputRange: ['-350deg', '-355deg', '-360deg']
                    })
                }],
            }}
            imageStyle={{ opacity: 0.5, backgroundColor: 'black' }}
        >
            <Animated.View
                style={{
                    // backgroundColor: 'red',
                    // opacity: 0.5,
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 50,

                }}
            >
                <Animated.View style={{
                    marginLeft
                }}>
                    <Text style={{
                        color: 'white',
                        alignItems: 'center',
                        fontSize: 60,
                        fontWeight: '200',
                        paddingLeft: 30,
                    }}>
                        Let's make
                    </Text>
                </Animated.View>
                <Animated.View style={{
                    marginLeft: marginLeft2,
                }}>
                    <Text style={{
                        color: 'white',
                        alignItems: 'center',
                        fontSize: 60,
                        fontWeight: 'bold',
                        paddingLeft: 30,
                    }}>
                        your dream vocation.
                    </Text>

                </Animated.View>
                <Animated.View style={{
                    marginLeft: marginLeft2,
                    opacity: opacityDot,
                    flexDirection: 'row',
                    marginTop: -50
                }}>
                    <Animated.Text style={[styles.text, {
                        paddingLeft: 30, fontWeight: dot1.interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: ['300', '500', '800', '500', '300']
                        })
                    }]}>.</Animated.Text>
                    <Animated.Text style={[styles.text, {
                        fontWeight: dot2.interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: ['300', '500', '800', '500', '300']
                        })
                    }]}>.</Animated.Text>
                    <Animated.Text style={[styles.text, {
                        fontWeight: dot3.interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: ['300', '500', '800', '500', '300']
                        })
                    }]}>.</Animated.Text>
                    <Animated.Text style={[styles.text, {
                        fontWeight: dot4.interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: ['300', '500', '800', '500', '300']
                        })
                    }]}>.</Animated.Text>
                    <Animated.Text style={[styles.text, {
                        fontWeight: dot5.interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: ['300', '500', '800', '500', '300']
                        })
                    }]}>.</Animated.Text>
                </Animated.View>
                <Animated.View style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    opacity: opacityGS,
                    marginTop: 10
                }}>
                    <Animated.View
                        style={{
                            transform: [{ translateX: pan.x },],//{ translateY: pan.y },
                            height: 60,
                            borderRadius: 50,
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginHorizontal: 50,
                        }}
                    // {...panResponder.panHandlers}
                    >
                        <Animated.View style={[styles.box, { marginLeft: marginLeftBtn, flexDirection: 'row' }]}  {...panResponder.panHandlers}>
                            <Animated.Text style={{ color: 'white', fontSize: 25, marginLeft: marginLeftBtnIcon }}>▷</Animated.Text>
                        </Animated.View>
                    </Animated.View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtG }}>G</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtE1 }}>E</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtT1 }}>T</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>{' '}</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtS }}>S</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtT2 }}>T</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtA }}>A</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtR }}>R</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtT3 }}>T</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtE2 }}>E</Animated.Text>
                        <Animated.Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', opacity: opacityTxtD }}>D</Animated.Text>
                    </View>
                </Animated.View>
            </Animated.View>
        </AnimatedImage>
    )
}
export default Demo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 60,
    },
    box: {
        marginTop: -10,
        height: 80,
        width: 80,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'white',
    }
})
import React from 'react'
import { Text, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import StyledText from 'react-native-styled-text';
import { Arrays, Strings } from '@/constants';

export default function MenuButton() {

    const firstRowButtons = Arrays.menuButtons.firstRowButtons
    const secondRowButtons = Arrays.menuButtons.secondRowButtons
    const thirRowButtons = Arrays.menuButtons.thirRowButtons

    const DisplayButton = ({ data, index }: any) => {
        return (
            <TouchableOpacity style={styles.button} key={index}>
                <Shadow
                    containerStyle={styles.shadowContainer}
                    style={styles.shadowSubContainer}
                    distance={3}
                    offset={[1, 2]}
                >
                    {/* <Image
                        style={{
                            width: data?.iconSize[0],
                            height: data?.iconSize[1],
                            top: -10
                        }}
                        source={data?.icon || require('@/assets/images/icon.png')}
                        contentFit='contain'
                    /> */}

                    <AntDesign name="staro" size={110} color="black" style={styles.iconWrap} />
                    <Text style={styles.buttonText}>{data?.title || 'Button'}</Text>
                </Shadow>
            </TouchableOpacity>
        )
    }

    return (
        <React.Fragment>
            <StyledText
                style={styles.textContainer}
                textStyles={styles}
            >
                {Strings.menuButton.textContainer}
            </StyledText>

            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    {firstRowButtons.map((item, index) => (
                        <DisplayButton data={item} index={index} />
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    {secondRowButtons.map((item, index) => (
                        <DisplayButton data={item} index={index} />
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    {thirRowButtons.map((item, index) => (
                        <DisplayButton data={item} index={index} />
                    ))}
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        rowGap: 8,
        padding: 8,
    },

    textContainer: {
        marginHorizontal: 20,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        minHeight: 100,
        borderRadius: 10,
        borderColor: '#f7f7f7',
        borderWidth: 1,
    },

    shadowContainer: {
        width: '100%',
        minHeight: 100,
        alignItems: 'center',
    },
    
    shadowSubContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
    },

    buttonText: {
        position: 'absolute',
        fontWeight: 'condensed',
        color: 'black',
        fontSize: 14,
        bottom: 10,
    },

    b1: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    iconWrap: {
        position: 'absolute',
        top: -10,
        right: 0,
        transform: [{ rotate: '90deg'}],
        opacity: 0.05
    }
})

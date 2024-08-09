import React from 'react'
import { Text, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

export default function MenuButton() {

    const firstRowButtons = [
        {
            icon: require('@/assets/images/icons/clothes.webp'),
            title: 'Clothes',
            iconSize: [70, 70]
        },
        {
            icon: require('@/assets/images/icons/cap.webp'),
            title: 'Caps',
            iconSize: [50, 50]
        },
    ]

    const secondRowButtons = [
        {
            icon: require('@/assets/images/icons/dress.webp'),
            title: 'Clothes',
            iconSize: [45, 45]
        },
        {
            icon: require('@/assets/images/icons/bag.webp'),
            title: 'Bags',
            iconSize: [45, 45]
        },
        {
            icon: require('@/assets/images/icons/sneaker.webp'),
            title: 'Sneakers',
            iconSize: [45, 45]
        },
    ]

    const thirRowButtons = [
        {
            icon: require('@/assets/images/icons/new.webp'),
            title: 'New Arrivals',
            iconSize: [45, 45]
        },
    ]

    const DisplayButton = ({ data } : any) => {
        return (
            <TouchableOpacity style={styles.button}>
                <Shadow
                    containerViewProps={{
                        style: {
                            width: '100%',
                            minHeight: 100,
                            alignItems: 'center',
                        }
                    }}
                    style={{
                        width: '100%',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        backgroundColor: 'white'
                    }}
                    distance={3}
                    offset={[1, 2]}
                >
                    <Image
                        style={{
                            width: data?.iconSize[0],
                            height: data?.iconSize[1],
                            top: -10
                        }}
                        source={data?.icon || require('@/assets/images/icon.png')}
                        contentFit='contain'
                    />

                    <Text style={styles.buttonText}>{data?.title || 'Button'}</Text>
                </Shadow>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {firstRowButtons.map((item, index) => (
                    <DisplayButton data={item} />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                {secondRowButtons.map((item, index) => (
                    <DisplayButton data={item} />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                {thirRowButtons.map((item, index) => (
                    <DisplayButton data={item} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        rowGap: 8,
        padding: 8,
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
    },
    buttonText: {
        // marginTop: 4,
        position: 'absolute',
        bottom: 10,
    },
});

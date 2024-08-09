import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { Strings, Colors } from '@/constants'

export default function ProfileBar() {
    return (
        <Shadow
            containerStyle={styles.container}
            style={styles.subContainer}
            distance={3}
            offset={[1, 2]}
        >
            <Image
                source={require('@/assets/images/user.jpg')}
                style={styles.img}
            />

            <View style={styles.rowView}>
                <Text style={styles.textName}>{Strings.pat}</Text>
                <Text style={styles.textSub}>{Strings.patEmail}</Text>
            </View>

            <TouchableOpacity>
                <Ionicons
                    name='cart-outline'
                    size={35}
                    color='black'
                    style={styles.btnCart}
                />

                <Text style={styles.badge}>1</Text>
            </TouchableOpacity>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },

    subContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: 'white',
    },

    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.gray.light,
    },

    rowView: {
        left: -30,
        bottom: 2
    },

    textName: {
        fontWeight: 'bold',
        fontSize: 17,
    },

    textSub: {
        fontSize: 13,
        lineHeight: 15
    },

    btnCart: {
        right: 10
    },

    badge: {
        position: 'absolute',
        backgroundColor: 'red',
        height: 20,
        width: 20,
        borderRadius: 50,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        right: 7,
        bottom: 20,
        fontSize: 10
    }
})

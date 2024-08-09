import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Carousel from 'react-native-reanimated-carousel';
import { Arrays } from '@/constants';

export default function CarouselView() {
    const width = Dimensions.get('window').width
    const data = Arrays.banners

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={width / 3}
                autoPlay={true}
                pagingEnabled={true}
                data={data}
                scrollAnimationDuration={1500}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <View
                        style={styles.itemContainer}
                    >
                        <Image
                            style={styles.itemImg}
                            contentFit='contain'
                            source={item.img}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    itemContainer: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
    },

    itemImg: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    }
})
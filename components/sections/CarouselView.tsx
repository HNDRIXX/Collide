import { Image } from 'expo-image';
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StyledText from 'react-native-styled-text';
import Carousel from 'react-native-reanimated-carousel';

export default function CarouselView() {
    const width = Dimensions.get('window').width;

    const data = [
        {
            img: require('@/assets/images/banners/banner1.png')
        },
        {
            img: require('@/assets/images/banners/banner2.png')
        },
        {
            img: require('@/assets/images/banners/banner3.png')
        }
    ]

    return (
        <View style={{ flex: 1 }}>
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
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{ width: '100%', height: undefined,
                                aspectRatio: 1 }}
                                contentFit='contain'
                            source={item.img}
                        />
                    </View>
                )}
            />

            <StyledText
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }}
                textStyles={styles}
            >
                {
                    `<b1>Navigate</b1>\n` +
                    `Feel free to navigate your needs.`
                }
            </StyledText>
        </View>

    )
}

const styles = StyleSheet.create({
    b1: {
        fontWeight: 'bold',
        fontSize: 25,
    }
})
import React, { useEffect } from 'react'
import { Image, StyleSheet, Platform, View, Dimensions, Text } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import axios from 'axios'
import CarouselView from '@/components/sections/CarouselView'
import MenuButton from '@/components/buttons/MenuButton'

export default function HomeScreen() {
  const width = Dimensions.get('window').width;

  useEffect(() => {
    // axios.post('http://10.0.1.82:5000/addProduct',
    //   {
    //     name: 'test',
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   }
    // ).then((response) => {
    //   console.log(response.data) 
    // })

    axios.get('http://10.0.1.82:5000/getProduct',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#FFFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/bgheader.webp')}
          style={styles.reactLogo}
        />
      }>
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lorem Ipsum!</ThemedText>
        <HelloWave />
      </ThemedView> */}

      <CarouselView />
      <MenuButton />
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    // bottom: -85,
    // left: 0,
    // position: 'absolute',
  },
})

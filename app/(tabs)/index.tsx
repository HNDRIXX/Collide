import React, { useEffect } from 'react'
import { Image, StyleSheet, Platform, View, Dimensions, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import axios from 'axios'
import CarouselView from '@/components/sections/CarouselView'
import MenuButton from '@/components/buttons/MenuButton'
import ProfileBar from '@/components/sections/ProfileBar'
import { Strings } from '@/constants';

export default function HomeScreen() {
  // const width = Dimensions.get('window').width

  // useEffect(() => {
  //   // axios.post('http://10.0.1.82:5000/addProduct',
  //   //   {
  //   //     name: 'test',
  //   //   },
  //   //   {
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     }
  //   //   }
  //   // ).then((response) => {
  //   //   console.log(response.data) 
  //   // })

  //   axios.get('http://10.0.1.82:5000/getProduct',
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   ).then((response) => {
  //     console.log(response.data)
  //   })
  // }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#FFFF' }}
      headerImage={
        <View>
          <Image
            source={require('@/assets/images/darkenBgHeader.webp')}
            style={styles.imgHeader}
          />

          <Text style={styles.textHeader}>{Strings.projectTitle}</Text>
        </View>
      }>

      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lorem Ipsum!</ThemedText>
        <HelloWave />
      </ThemedView> */}

      <StatusBar style="light" />
      <CarouselView />
      <ProfileBar />
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

  imgHeader: {
    height: '100%',
    width: '100%',
  },

  textHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    top: 60,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
})

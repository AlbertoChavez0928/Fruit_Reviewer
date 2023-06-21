import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam('rating');

  return (


    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>
            {navigation.getParam('title')}
          </Text>
          <Text>{navigation.getParam('body')}</Text>
          <View style={styles.rating}>
            <Text>FruitRev rating: </Text>
            <Image source={images.ratings[rating]} />
          </View>
        </Card>
      </View>

    </ImageBackground>







  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});
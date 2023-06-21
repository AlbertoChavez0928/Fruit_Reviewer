import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Apple', rating: 5, body: 'crunchy but sweet', key: '1' },
    { title: 'Pear', rating: 4, body: 'sandy texture but sweet', key: '2' },
    { title: 'Grapes', rating: 3, body: 'juicy and sour', key: '3' },
  ]);

 const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (


    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        <MaterialIcons
          name='add'
          size={24}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
        <FlatList data={reviews} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />
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
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',

  },
  modalClose: {
    color: 'teal',
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    backgroundColor: 'lightgreen',
    flex: 1,
  }





});
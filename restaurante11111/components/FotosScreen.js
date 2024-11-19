import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

import res1 from '../assets/assets/img/res1.jpeg';
import res2 from '../assets/assets/img/res2.jpg';
import res3 from '../assets/assets/img/res3.jpeg';

export default function Fotos() {
  const fotosDoRestaurante = [
    {
      id: 1,
      imagem: res1,
      bairro: 'Centro - São Paulo',
    },
    {
      id: 2,
      imagem: res2,
      bairro: 'Itaim Bibi - São Paulo',
    },
    {
      id: 3,
      imagem: res3,
      bairro: 'Pinheiros - São Paulo',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {fotosDoRestaurante.map((foto) => (
        <View key={foto.id} style={styles.card}>
          {/* Verifica se a imagem é local ou uma URL externa */}
          <Image
            source={
              typeof foto.imagem === 'string'
                ? { uri: foto.imagem }
                : foto.imagem
            }
            style={styles.image}
          />
          <Text style={styles.bairro}>{foto.bairro}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 250,
  },
  bairro: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    color: '#333',
  },
});

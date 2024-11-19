import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Cardapio() {
  const pratos = [
    {
      id: 1,
      nome: 'Pizza Margherita',
      preco: 'R$ 35,00',
      imagem: 'https://link-da-imagem-da-pizza.com/pizza.jpg',
    },
    {
      id: 2,
      nome: 'Espaguete à Bolonhesa',
      preco: 'R$ 28,00',
      imagem: 'https://link-da-imagem-do-espaguete.com/espaguete.jpg',
    },
    {
      id: 3,
      nome: 'Hamburguer Gourmet',
      preco: 'R$ 20,00',
      imagem: 'https://link-da-imagem-do-hamburguer.com/hamburguer.jpg',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {pratos.map((prato) => (
        <View key={prato.id} style={styles.card}>
          <Image source={{ uri: prato.imagem }} style={styles.image} />
          <Text style={styles.nome}>{prato.nome}</Text>
          <Text style={styles.preco}>{prato.preco}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  preco: {
    fontSize: 16,
    color: '#777',
  },
});

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

// Carrega o arquivo JSON
import data from '../data/data.json';

// Importação manual das imagens
import comida1 from '../assets/assets/img/comida1.jpg';
import comida2 from '../assets/assets/img/comida2.webp';
import comida3 from '../assets/assets/img/comida3.jpeg';
import comida4 from '../assets/assets/img/comida1.jpg'; // Nova imagem
import comida5 from '../assets/assets/img/comida1.jpg'; // Nova imagem

export default function HomeScreen({ navigation }) {
  const [cardapio, setCardapio] = useState([]);
  const [fotos, setFotos] = useState([]);

  // Mapeia os nomes de imagens do JSON para os imports manuais
  const imageMap = {
    'comida1.jpg': comida1,
    'comida2.jpg': comida2,
    'comida3.jpg': comida3,
    'comida4.jpg': comida4, // Nova imagem adicionada
    'comida5.jpg': comida5, // Nova imagem adicionada
  };

  useEffect(() => {
    setCardapio(data.cardapio);
    setFotos(data.fotos);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bem-vindo ao Restaurante!</Text>

      <View style={styles.cardapio}>
        <Text style={styles.cardapioTitle}>Cardápio</Text>
        <View style={styles.scrollContainer}>
          {cardapio.map((item) => (
            <View key={item.id} style={styles.cardapioItem}>
              <Image
                source={imageMap[item.imagem]} // Obtém a imagem correspondente do mapeamento
                style={styles.cardapioImage}
              />
              <View style={styles.cardapioTextContainer}>
                <Text style={styles.cardapioText}>
                  {item.nome} - {item.preco}
                </Text>
                <Text style={styles.cardapioDescription}>{item.descricao}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Button
        title="Sair"
        onPress={() => navigation.replace('Login')} // Redireciona para o Login
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 20, textAlign:'center', },
  cardapio: { width: '100%', marginTop: 20 },
  cardapioTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    marginBottom: 20,
    width: '100%',
  },
  cardapioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardapioImage: { width: 100, height: 100, borderRadius: 8 },
  cardapioTextContainer: { marginLeft: 15, flex: 1 },
  cardapioText: { fontSize: 18, fontWeight: 'bold' },
  cardapioDescription: { fontSize: 14, color: '#555', marginTop: 5 },
  fotos: { marginTop: 30, alignItems: 'center' },
  fotosTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  foto: { width: 200, height: 200, borderRadius: 10, marginBottom: 15 },
});

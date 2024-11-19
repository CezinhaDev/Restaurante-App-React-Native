import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Importe a imagem local
import restaurantImage from '../assets/assets/img/res4.jpg';

const SobreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sobre o Restaurante</Text>
        <Text style={styles.headerSubtitle}>Conheça um pouco mais sobre nós</Text>
      </View>

      {/* Imagem do Restaurante */}
      <View style={styles.imageContainer}>
        <Image
          source={restaurantImage} // Usando o caminho local
          style={styles.restaurantImage}
        />
      </View>

      {/* Seção de História */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nossa História</Text>
        <Text style={styles.sectionText}>
          Fundado em 2000, nosso restaurante sempre se dedicou a proporcionar uma experiência
          única de sabor, qualidade e atendimento. Somos apaixonados por oferecer pratos
          deliciosos preparados com os melhores ingredientes, com uma atmosfera acolhedora e
          amigável.
        </Text>
      </View>

      {/* Seção de Missão */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Missão</Text>
        <Text style={styles.sectionText}>
          Nossa missão é proporcionar momentos memoráveis aos nossos clientes por meio de
          pratos deliciosos, um atendimento excepcional e um ambiente confortável e acolhedor.
        </Text>
      </View>

      {/* Seção de Visão */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visão</Text>
        <Text style={styles.sectionText}>
          Ser reconhecido como o restaurante de referência em qualidade, sabor e atendimento
          no Brasil, expandindo nossas unidades e levando nossa gastronomia para novos
          horizontes.
        </Text>
      </View>

      {/* Seção de Valores */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Valores</Text>
        <Text style={styles.sectionText}>
          - Compromisso com a qualidade{"\n"}
          - Respeito ao cliente{"\n"}
          - Inovação constante{"\n"}
          - Sustentabilidade{"\n"}
          - Trabalho em equipe
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Cor de fundo suave
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#777',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  restaurantImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#ff7f50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 5, // Sombras leves
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default SobreScreen;

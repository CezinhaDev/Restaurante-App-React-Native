import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Image } from 'react-native'; // Importação da imagem local

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Espera 3 segundos e navega para a tela de login
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    // Limpeza do timer
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/assets/img/fundo.avif')} // Caminho da imagem local
      style={styles.container}
      imageStyle={styles.backgroundImage} // Estilo da imagem de fundo
    >
      <Text style={styles.text}>Bem-vindo ao Restaurante!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 15,
    opacity: 0.85, // Deixa a imagem com um efeito suave
    resizeMode: 'cover', // Faz a imagem cobrir toda a tela
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    shadowColor: '#000', // Sombra para dar destaque ao texto
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10, // Aumenta a sombra para maior destaque
    letterSpacing: 2, // Espaçamento entre as letras
    marginBottom: 20, // Distância do topo da tela
  },
});

export default SplashScreen;

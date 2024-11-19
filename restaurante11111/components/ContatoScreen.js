import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para os ícones das redes sociais

const ContatosScreen = () => {
  const handleOpenURL = (url) => {
    Linking.openURL(url); // Abre o link das redes sociais ou telefone
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos do Restaurante</Text>

      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>📍 Endereço: Rua Exemplo, 123 - Bairro, Cidade</Text>
        <Text style={styles.contactText}>📞 Telefone: (11) 1234-5678</Text>
      </View>

      <Text style={styles.socialTitle}>Siga-nos nas Redes Sociais</Text>
      
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => handleOpenURL('https://facebook.com/restaurante')}>
          <MaterialCommunityIcons name="facebook" size={40} color="#3b5998" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenURL('https://instagram.com/restaurante')}>
          <MaterialCommunityIcons name="instagram" size={40} color="#E1306C" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOpenURL('https://twitter.com/restaurante')}>
          <MaterialCommunityIcons name="twitter" size={40} color="#1DA1F2" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.infoText}>Estamos esperando por você!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default ContatosScreen;

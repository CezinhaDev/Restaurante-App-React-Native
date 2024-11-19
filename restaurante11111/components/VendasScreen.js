import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const VendasScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Painel de Vendas</Text>
        <Text style={styles.headerSubtitle}>Relatório de vendas do restaurante</Text>
      </View>

      {/* Números de vendas */}
      <View style={styles.salesBox}>
        <Text style={styles.salesText}>Total de Vendas do Mês: </Text>
        <Text style={styles.salesAmount}>R$ 12.500,00</Text>
      </View>

      {/* Pratos mais vendidos */}
      <View style={styles.popularDishes}>
        <Text style={styles.popularTitle}>Pratos Mais Vendidos</Text>

        <View style={styles.popularDishItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Imagem de prato
            style={styles.popularDishImage}
          />
          <View style={styles.popularDishText}>
            <Text style={styles.popularDishName}>Prato 1</Text>
            <Text style={styles.popularDishSales}>Vendas: 150</Text>
          </View>
        </View>

        <View style={styles.popularDishItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Imagem de prato
            style={styles.popularDishImage}
          />
          <View style={styles.popularDishText}>
            <Text style={styles.popularDishName}>Prato 2</Text>
            <Text style={styles.popularDishSales}>Vendas: 120</Text>
          </View>
        </View>

        <View style={styles.popularDishItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Imagem de prato
            style={styles.popularDishImage}
          />
          <View style={styles.popularDishText}>
            <Text style={styles.popularDishName}>Prato 3</Text>
            <Text style={styles.popularDishSales}>Vendas: 100</Text>
          </View>
        </View>
      </View>

      {/* Gráfico de vendas */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Gráfico de Vendas</Text>
        <View style={styles.graph}>
          <View style={[styles.graphBar, { height: '80%' }]} />
          <View style={[styles.graphBar, { height: '60%' }]} />
          <View style={[styles.graphBar, { height: '40%' }]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  salesBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  salesText: {
    fontSize: 18,
    color: '#555',
  },
  salesAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  popularDishes: {
    marginBottom: 20,
  },
  popularTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  popularDishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  popularDishImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  popularDishText: {
    flex: 1,
  },
  popularDishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  popularDishSales: {
    fontSize: 14,
    color: '#777',
  },
  graphContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  graph: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  graphBar: {
    width: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    margin: 2,
  },
});

export default VendasScreen;

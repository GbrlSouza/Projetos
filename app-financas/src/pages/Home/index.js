import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import Header from '../../components/Header/index'
import Balance from '../../components/Balance/index';
import Movements from '../../components/Movements/index'
import Actions from '../../components/Actions/index'

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '25/12/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2500,00',
    date: '19/09/2022',
    type: 1 // receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '13/05/2022',
    type: 1 // receita
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Costa de Souza"/>
      <Balance saldo="9.250,90" gastos="-527,00"/>
      <Actions />
      <Text style={styles.title}>Ultimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor ={( item ) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={ item } /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});

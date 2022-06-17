import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

const styles = StyleSheet.create({
  cardTitle: {
    container: {marginBottom: 15},
    title: {fontSize: 22, fontWeight: '600', color: COLORS.PRIMARY},
  },
  card: {
    padding: 15,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
});

export const CardTitle = ({children}) => (
  <View style={styles.cardTitle.container}>
    <Text style={styles.cardTitle.title}>{children}</Text>
  </View>
);

export const Card = ({children}) => <View style={styles.card}>{children}</View>;

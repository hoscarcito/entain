import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

const styles = StyleSheet.create({
  layout: {flex: 1, backgroundColor: COLORS.GREY},
  shape: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 20,
    position: 'absolute',
    marginTop: -30,
    width: '100%',
    height: 250,
  },
  container: {margin: 15},
  titleContainer: {marginTop: 55, marginBottom: 15, paddingHorizontal: 15},
  title: {fontSize: 25, color: COLORS.WHITE},
});

export const Page = ({title, children}) => (
  <View style={styles.layout}>
    <View style={styles.shape} />
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  </View>
);

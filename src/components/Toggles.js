import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

const styles = StyleSheet.create({
  button: {
    container: {
      padding: 15,
      borderRadius: 50,
    },
    text: {
      fontSize: 15,
    },
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

const Button = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[
      styles.button.container,
      {backgroundColor: props.isSelected ? COLORS.ACCENT : COLORS.PRIMARY},
    ]}>
    <Text style={{color: props.isSelected ? COLORS.BLACK : COLORS.WHITE}}>
      {props.children}
      <Text style={styles.button.text}> {props.isSelected ? '☑' : '☐'}</Text>
    </Text>
  </TouchableOpacity>
);

export const Toggles = ({categories, filters, onPress}) => (
  <View style={styles.toggleContainer}>
    {categories.map((cat, idx) => (
      <Button
        key={idx}
        isSelected={filters.includes(cat.id)}
        onPress={() => onPress(cat.id)}>
        {cat.name}
      </Button>
    ))}
  </View>
);

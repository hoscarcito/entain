import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Loading} from '../../components/Loading';
import {COLORS} from '../../theme';
import {secToTime} from '../../utilities';

const styles = StyleSheet.create({
  race: {
    container: {marginVertical: 7},
    title: {fontWeight: '600'},
    detail: {fontWeight: '200'},
  },
});

const minutesLeft = seconds => {
  if (seconds > 0) {
    return <Text>{secToTime(seconds)}</Text>;
  }
  return <Text style={{color: COLORS.RED}}>0:00 Started!</Text>;
};

const Race = (race, time) => (
  <View key={race.race_id} style={styles.race.container}>
    <Text style={styles.race.title}>
      #{race.race_number} - {race.meeting_name}
    </Text>
    <Text style={styles.race.detail}>Race Start: {race.advertised_start}</Text>
    <Text style={styles.race.detail}>
      Time left: {minutesLeft(race.advertised_start_seconds - time)}
    </Text>
  </View>
);

const Races = ({races, filters, time, isFetching}) => {
  const currentRaces = races
    .filter(race =>
      filters.length === 0 ? true : filters.includes(race.category_id),
    )
    .filter(race => race.advertised_start_seconds - time > -60)
    .slice(0, 5);

  const isLoading = isFetching && !currentRaces.length;

  return (
    <Loading isLoading={isLoading}>
      {currentRaces.map(race => Race(race, time))}
    </Loading>
  );
};
export default Races;

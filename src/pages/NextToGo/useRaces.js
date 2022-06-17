import {useState, useEffect} from 'react';
import CONFIG from '../../config';
import {getNow, getRaceData, makeDate} from '../../utilities';

const areEnoughRaces = (races, now) => {
  return (
    races.filter(race => race.advertised_start_seconds - now > -60).length >
    CONFIG.ENOUGH_RACES
  );
};

const sortRaces = (a, b) => {
  if (a.advertised_start > b.advertised_start) {
    return 1;
  }
  if (a.advertised_start < b.advertised_start) {
    return -1;
  }
  if (a.meeting_name > b.meeting_name) {
    return 1;
  } else {
    return -1;
  }
};

const makeRaces = data =>
  data.next_to_go_ids
    .map(id => ({
      race_id: id,
      meeting_name: data.race_summaries[id].meeting_name,
      race_number: data.race_summaries[id].race_number,
      advertised_start: makeDate(
        data.race_summaries[id].advertised_start.seconds,
      ),
      advertised_start_seconds:
        data.race_summaries[id].advertised_start.seconds,
      category_id: data.race_summaries[id].category_id,
    }))
    .sort(sortRaces);

export const useRaces = () => {
  const [races, setRaces] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [time, setTime] = useState(getNow());
  const [triggerFetch, setTriggerFetch] = useState(false);

  // Effect to manage the timer
  // if there are not enough races, we trigger a fetch
  useEffect(() => {
    const timerId = setInterval(() => {
      const now = getNow();
      setTime(now);
      if (!areEnoughRaces(races, now) && !isFetching) {
        setTriggerFetch(prevState => !prevState);
      } else {
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  // Effect to retrieve the races data formated
  useEffect(() => {
    (async () => {
      setIsFetching(true);
      const rawRaces = await getRaceData();
      if (!rawRaces) {
        return;
      }
      const newRaces = makeRaces(rawRaces);
      setRaces(newRaces);
      setIsFetching(false);
    })();
  }, [triggerFetch]);

  return [races, time, isFetching];
};

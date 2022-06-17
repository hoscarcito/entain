import React, {useState} from 'react';
import {Page} from '../../components/Page';
import {Card, CardTitle} from '../../components/Cards';
import {Toggles} from '../../components/Toggles';
import CONFIG from '../../config';
import Races from './Races';
import {useRaces} from './useRaces';

import {addOrRemove} from '../../utilities';

function NextToGo() {
  const [filters, setFilters] = useState([]);
  const [races, time, isFetching] = useRaces();

  const toggleFilter = value => {
    setFilters(filter => addOrRemove(filter, value));
  };

  return (
    <Page title="Next to go">
      <Card>
        <CardTitle>Races</CardTitle>
        <Toggles
          categories={CONFIG.CATEGORIES}
          filters={filters}
          onPress={toggleFilter}
        />
        <Races
          isFetching={isFetching}
          races={races}
          filters={filters}
          time={time}
        />
      </Card>
    </Page>
  );
}

export default NextToGo;

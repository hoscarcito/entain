import {renderHook} from '@testing-library/react-hooks';
import {useRaces} from '../src/pages/NextToGo/useRaces';

function setupFetchStub({successful, data}) {
  return function fetchStub(_url) {
    return new Promise(resolve => {
      resolve({
        ok: successful,
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    });
  };
}

describe('useRaces', () => {
  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  // I like this technique to test edge cases in a simpler way
  // one test, multiple data sets.
  // here I'm testing the data returned from the hook
  it.each(require('./hookFixture.json'))(
    '%s',
    async (testName, {fakeData, expectedResult}) => {
      global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData));

      const {result, waitForNextUpdate} = renderHook(() => useRaces());

      expect(result.current[0].length).toBe(0);
      expect(result.current[2]).toBeTruthy();

      await waitForNextUpdate();

      // array comparisson
      expect(
        result.current[0].map(race => race.advertised_start_seconds),
      ).toStrictEqual(expectedResult.array);

      // isFetching
      expect(result.current[2]).toBe(expectedResult.isFetching);
    },
  );

  it('updates timer', async () => {
    const fakeData = {successful: true, data: []};
    global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeData));

    const {result, waitForNextUpdate} = renderHook(() => useRaces());

    const firstTimestamp = result.current[1];
    await waitForNextUpdate();
    const secondTimestamp = result.current[1];

    expect(firstTimestamp).not.toBe(secondTimestamp);
  });
});

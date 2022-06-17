import CONFIG from './config';

// time utilities
export const secToTime = s => (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;
export const getNow = () => Math.round(Date.now() / 1000);
export const makeDate = seconds => new Date(seconds * 1000).toLocaleString();

// array utilities
export const addOrRemove = (arr, item) =>
  arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];

// fetch
export const getRaceData = async () => {
  try {
    const response = await fetch(CONFIG.API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.log('An error has occured');
      return;
    }
    const jsonResponse = await response.json();
    return jsonResponse.data;
  } catch (e) {
    console.log(e);
    return;
  }
};

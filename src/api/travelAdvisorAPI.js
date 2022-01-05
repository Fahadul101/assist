// eslint-disable-next-line
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-key': '4a9c0e2f61mshd23619a69592ee9p1995a4jsncd10fdad13da'  || process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        'https://community-open-weather-map.p.rapidapi.com/find',
        {
          params: { lat, lon: lng },
          headers: {
            'x-rapidapi-key':  '4a9c0e2f61mshd23619a69592ee9p1995a4jsncd10fdad13da' || process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        },
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
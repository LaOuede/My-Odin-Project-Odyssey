const getWeather = async (city) => {
  try {
    const apiKey = process.env.VISUAL_CROSSING_API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`;
    const response = await fetch(url, { mode: 'cors' });
    const dataWeather = await response.json();

    return dataWeather;
  } catch (error) {
    console.error('Error fetching the weather data:', error);
    throw error;
  }
};

export default getWeather;
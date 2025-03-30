import axios from 'axios';

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    return [];
  }
};
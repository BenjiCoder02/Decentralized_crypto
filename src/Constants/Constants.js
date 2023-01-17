const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

export const ALL_COINS = `${BASE_URL}/markets?vs_currency=cad&order=market_cap_desc&per_page=20&page=1&sparkline=false`;
export const GET_COIN_HISTORICAL_DATA = `${BASE_URL}/{coinId}/market_chart?vs_currency=cad&days=30&interval=daily`

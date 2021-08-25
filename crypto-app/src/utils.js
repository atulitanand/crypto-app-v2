export const assignMapKeys = (name) => {
    // this function will take the name and assign the map_keys for the other api accordingly
    const map_keys = {
        'bitcoin': 'BTC-USD',
        'ethereum': 'ETC-USD',
        'tether': 'TRB-USD',
        'binance coin': 'BNT-USD',
        'cardano': 'CHZ-USD',
        'XRP': 'REP-USD', //ripple
        'dogecoin': 'DOGE-USD',
        'usd coin': 'USDT-USD',
        'polkadot': 'PLA-USD',
        'binance usd': 'BNT-USD'
    }
    return map_keys[name.toLowerCase()];
}
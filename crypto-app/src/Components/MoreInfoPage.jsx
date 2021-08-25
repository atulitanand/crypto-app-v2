import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { API_COIN_ID } from '../envVars';
import { assignMapKeys } from '../utils';
import CoinMapper from './CoinMapper';
import './MoreInfoStyles.css'

function MoreInfoPage() {
    const params = useParams()
    const [data, setData] = useState({})
    useEffect(async () => {
        const resp = await fetch(API_COIN_ID + params.id);
        const json = await resp.json()
        setData({ ...json, mapping_pair: assignMapKeys(json.name) })
    }, []);

    return (
        <>
            <header className="more-info-page-header">
                <div className="icon"><img src={data.image} alt="icon" /></div>
                <h2>{data.market_cap_rank} {data.name}</h2>
            </header>
            <main className="more-info-page-content">
                <CoinMapper props={{ pair: data.mapping_pair }} />
                <section className="stats">
                    <main>
                        <ul className="stats-main">
                            <li><span className="property">Current Price :</span> <span className="value">{data.current_price} $</span></li>
                            {data.market_cap !== '' ? <li><span className="property">Market Capital :</span> <span className="value">{data.market_cap} $</span></li> : <></>}
                            {data.fully_diluted_valuation !== '' ? <li><span className="property">Full Dilution Value :</span> <span className="value">{data.fully_diluted_valuation} $</span></li> : <></>}
                            {data.total_volume !== '' ? <li><span className="property">Total Volume :</span> <span className="value">{data.total_volume} $</span></li> : <></>}
                            {data.high_24h !== '' ? <li><span className="property">High 24h :</span> <span className="value">{data.high_24h} $</span></li> : <></>}
                            {data.low_24h !== '' ? <li><span className="property">Low 24h :</span> <span className="value">{data.low_24h} $</span></li> : <></>}
                            {data.price_change_24h !== '' ? <li><span className="property">Price Change 24h :</span> <span className="value">{data.price_change_24h} $</span></li> : <></>}
                            {data.price_change_percentage_24h !== '' ? <li><span className="property">Price Change Percentage 24h :</span> <span className="value">{data.price_change_percentage_24h} $</span></li> : <></>}
                            {data.market_cap_change_24h !== '' ? <li><span className="property">Market Cap Change 24h :</span> <span className="value">{data.market_cap_change_24h} $</span></li> : <></>}
                            {data.market_cap_change_percentage_24h !== '' ? <li><span className="property">Market  Cap Change Percentage_24h :</span> <span className="value">{data.market_cap_change_percentage_24h} $</span></li> : <></>}
                            {data.circulating_supply !== '' ? <li><span className="property">Circulating Supply :</span> <span className="value">{data.circulating_supply} $</span></li> : <></>}
                            {data.total_supply !== '' ? <li><span className="property">Total Supply :</span> <span className="value">{data.total_supply} $</span></li> : <></>}
                            {data.max_supply !== '' ? <li><span className="property">Max Supply :</span> <span className="value">{data.max_supply} $</span></li> : <></>}
                        </ul>
                    </main>
                </section>
            </main>
        </>
    );
}

export default MoreInfoPage;
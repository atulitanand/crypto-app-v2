import React, { useEffect, useState } from 'react'
import g1 from './images/graph/g1.png'
import g2 from './images/graph/g2.png'
import g3 from './images/graph/g3.png'
import g4 from './images/graph/g4.png'
import g5 from './images/graph/g5.png'

function CoinMapper({ props }) {
    const allGraphs = [g1, g2, g3, g4, g5];
    const [graph, setGraph] = useState({});
    useEffect(() => {
        let i = 0;
        setInterval(() => {
            if (i === allGraphs.length) i = 0;
            else {
                setGraph(allGraphs[i])
                ++i
            };
        }, 1000)
    }, [])
    return (
        <>
            <div className="graph-wrapper">
                <img src={graph} alt="" />
            </div>
        </>
    );
}

export default CoinMapper;
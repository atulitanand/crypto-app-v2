import React from 'react'
import puppyImage from './puppyeyes.jpg';

function CoinsNotFound() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img src={puppyImage} alt="No coins found" style={{ maxWidth: '10rem' }} />
                <h2 style={{ color: '#444', marginTop: '2rem' }}>Sorry! No coins with <br />that name</h2>
            </div>
        </>
    );
}

export default CoinsNotFound;
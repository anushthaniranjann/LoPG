import React from 'react'
import Search from './Search'

const HomeSearch = () => {
    return (
        <>
            <div style={{ backgroundColor: '#ffaf1f', height: '24vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
                <h1 style={{ color: 'white' }}>One stop Destination for all your residence needs</h1>
                <Search />
            </div>
        
        </>
    )
}

export default HomeSearch

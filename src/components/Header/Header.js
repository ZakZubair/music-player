import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

import './header.scss'

const Header = () => {
    const { currentSong, songList } = useContext(playerContext)

    return (
        <>
            <header className="draggable" >
                <h3>🎵 Music Player 🎵</h3>
            </header >
            <div className="banner">
                <img src={songList[currentSong]['Album Image URL']} alt={songList[currentSong]['Album Name']} />
                <div className="album_meta">
                    <span className="alb_label">ALBUM</span>
                    <h1>{songList[currentSong]['Album Name']}</h1>
                    <p>{songList[currentSong]['Track Name']}</p>
                </div>
            </div>
        </>
    )
}

export default Header
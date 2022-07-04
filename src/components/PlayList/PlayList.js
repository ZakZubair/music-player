import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

import './playList.scss'

const Playlist = () => {
    const { setCurrent, currentSong, songList } = useContext(playerContext)

    const handleRemoveSong = (song) => {
        // TODO: Remove the song
        console.log(`Remove the song - ${song['Track Name']}`)
    }

    return (
        <div className="playlist no_drag">
            <ul className="loi">
                {songList.map((song, i) => {
                    return (
                        < li
                            className={'songContainer ' + (currentSong === i ? 'selected' : '')}
                            key={i}
                            onClick={() => {
                                setCurrent(i)
                            }}
                        >
                            <div className="song-thumb" style={{
                                backgroundImage: `url(${song['Album Image URL']})`
                            }}>
                                {currentSong === i ? <i className="fa-solid fa-wave-square fa-beat"></i> : <i className="fas fa-play"></i>}
                            </div>
                            <div className="songMeta_playlist">
                                <span className="songName">{song['Track Name']}</span>
                                <span className="songAuthors">{song['Artist Name(s)']}</span>
                            </div>
                            <div className="playlist_button_group">
                                <button className="delete_song playlist_btn" onClick={() => handleRemoveSong(song)}>
                                    <i className="fas fa-trash-alt fa-lg"></i>
                                </button>
                                <button className="sort_song playlist_btn">
                                    <i className="fas fa-ellipsis-v fa-lg"></i>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Playlist
import React, { useReducer } from 'react'
import playerContext from './playerContext'
import playerReducer from './playerReducer'
import { songList } from './songs'

import {
    SET_CURRENT_SONG,
    TOGGLE_REMOVE,
    TOGGLE_PLAYING,
    SET_SONGS_ARRAY,
} from './types'

const PlayerState = (props) => {
    const initialState = {
        currentSong: 0,
        songList: songList,
        playing: false
    }
    const [state, dispatch] = useReducer(playerReducer, initialState)

    // Set songs array
    const setSongs = (songArr) =>
        dispatch({ type: SET_SONGS_ARRAY, data: songArr })

    // Set playing state
    const togglePlaying = () => {
        dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })
    }

    // Set current song
    const setCurrent = (id) => dispatch({ type: SET_CURRENT_SONG, data: id })

    // Prev song
    const prevSong = () => {
        if (state.currentSong === 0) {
            setCurrent(state.songList.length - 1)
        } else {
            setCurrent(state.currentSong - 1)
        }
    }

    // Next song
    const nextSong = () => {
        if (state.currentSong === state.songList.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(state.currentSong + 1)
        }
    }

    // Remove song
    const toggleRemove = (id) => {
        state.songList.splice(id, 1);
        dispatch({ type: TOGGLE_REMOVE, data: state.songList })
    }

    // End of Song
    const handleEnd = () => {
        nextSong()
    }

    return (
        <playerContext.Provider
            value={{
                currentSong: state.currentSong,
                songList: state.songList,
                playing: state.playing,
                nextSong,
                prevSong,
                setCurrent,
                toggleRemove,
                togglePlaying,
                handleEnd,
                setSongs,
            }}
        >
            {props.children}
        </playerContext.Provider>
    )
}

export default PlayerState
import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../../context/playerContext'

import './controls.scss'

const Controls = () => {
    const {
        currentSong,
        nextSong,
        prevSong,
        playing,
        togglePlaying,
        handleEnd,
        songList,
    } = useContext(playerContext)

    const audio = useRef('audio_tag')

    const [stateVolume, setStateVolume] = useState(0.3)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const fmtMSS = (s) => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
    }

    const toggleAudio = () => {
        audio.current.paused ? audio.current.play() : audio.current.pause()
    }

    const handleVolume = (q) => {
        setStateVolume(q)
        audio.current.volume = q
    }

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100
        setCurrentTime(compute)
        audio.current.currentTime = compute
    }

    useEffect(() => {
        audio.current.volume = stateVolume
        if (playing) {
            toggleAudio()
        }
    }, [currentSong, playing, stateVolume])

    return (
        <div className="controls">
            <audio
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onCanPlay={(e) => setDur(e.target.duration)}
                onEnded={handleEnd}
                ref={audio}
                type="audio/mpeg"
                preload="true"
                src={songList[currentSong]['Track Preview URL']}
            />
            <div className="volume">
                <span className="volume__item">
                    <i className="fas fa-volume-down"></i>
                </span>
                <input
                    value={Math.round(stateVolume * 100)}
                    type="range"
                    name="volBar"
                    id="volBar"
                    onChange={(e) => handleVolume(e.target.value / 100)}
                />
            </div>
            <div className="musicControls">
                <span className="prev" onClick={prevSong}>
                    <i className="fas fa-step-backward"></i>
                </span>

                <span
                    className="play"
                    onClick={() => {
                        togglePlaying()
                        toggleAudio()
                    }}
                >
                    <span className={!playing ? '' : 'hide'}>
                        <i className="fas fa-play"></i>
                    </span>
                    <span className={!playing ? 'hide' : ''}>
                        <i className="fas fa-pause"></i>
                    </span>
                </span>

                <span className="next" onClick={nextSong}>
                    <i className="fas fa-step-forward"></i>
                </span>
            </div>

            <div className="progress-bar">
                <div className="songMeta">
                    <div className="song-thumb" style={{
                        backgroundImage: `url(${songList[currentSong]['Album Image URL']})`
                    }}></div>
                    <div className='songTitleContainer'>
                        <span className="songTitle">{songList[currentSong]['Track Name']}</span>
                        <span className="songartistName">
                            {songList[currentSong]['Artist Name(s)']}
                        </span>
                    </div>
                </div>
                <div className="songProgress">
                    <input
                        onChange={handleProgress}
                        value={dur ? (currentTime * 100) / dur : 0}
                        type="range"
                        name="progresBar"
                        id="prgbar"
                    />
                    <span className="currentTime">{fmtMSS(currentTime)}</span>/
                    <span className="totalTime">{fmtMSS(dur)}</span>
                </div>
            </div>
        </div>
    )
}

export default Controls
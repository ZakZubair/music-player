import React, { useContext } from 'react'
import Header from './components/Header'
import PlayList from './components/PlayList'
import Controls from './components/Controls'
import playerContext from './context/playerContext'

import './main.scss'

const MusicPlayer = () => {
    // eslint-disable-next-line no-empty-pattern
    const {
        // setSongs
    } = useContext(playerContext)

    // TODO: load from env variable
    // const url = 'https://d2dmhurcm7ukg1.cloudfront.net/static/sample-data/tracks.json';

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const getSongs = async () => {
    //     try {
    //         const response = await fetch(url, { method: "GET" })
    //         const jsonSongs = await response.json();
    //         setSongs(jsonSongs)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // TODO: Endpoint needs to set up CORS https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    // useEffect(() => {
    //     getSongs()
    // }, [getSongs])

    return (
        <div className="main">
            <div className="top">
                <Header />
                <PlayList />
            </div>
            <Controls />
        </div>
    )
}

export default MusicPlayer
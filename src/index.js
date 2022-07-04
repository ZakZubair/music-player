import React from 'react'
import { createRoot } from 'react-dom/client'
import MusicPlayer from './MusicPlayer';
import PlayerState from './context/PlayerState'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <PlayerState>
      <MusicPlayer />
    </PlayerState>
  </React.StrictMode>,
);
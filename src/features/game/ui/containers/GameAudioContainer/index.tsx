import React from 'react'
import { AudioProvider } from '../../../../audio/AudioProvider'
import { GameContainer } from '../GameContainer'

export const GameAudioContainer = () => {
  return (
    <AudioProvider>
      <GameContainer/>
    </AudioProvider>
  )
}

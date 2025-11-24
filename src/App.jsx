import React from 'react'
import Header from './components/header'
import games from './components/data'
import Game from './components/game'

export default function App() {

  const gameData = games.map(game => {
    return (
      <Game
        key={game.id}
        { ...game }
      />
    )
  })

  return (
    <main className='w-full'>
      <Header />

      <section className="main-game-container lg:px-8">

        {gameData}

      </section>
    </main>
  )
}
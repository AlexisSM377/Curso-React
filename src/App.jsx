import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'Alex20308350',
        name: 'Alezkcrank',
        isFollowing: true,
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    }
]

export function App () {

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => {
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}  
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
} 
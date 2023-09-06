import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  // const cjt100903 = { InitialisFollowing: true, userName: 'cjt100903' }
  // const webfazt = { InitialisFollowing: false, userName: 'webfazt' }
  // const midudev = { InitialisFollowing: true, userName: 'midudev' }

  const users = [
    {
      isFollowing: true,
      userName: 'cjt100903',
      name: 'Camila Jimenez Trujillo'
    },
    {
      isFollowing: true,
      userName: 'webfazt',
      name: 'Antho y Solano Lopez'
    },
    {
      isFollowing: false,
      userName: 'midudev',
      name: 'Miuel Angel Duran'
    }
  ]

  return (
    <section className='App'>
      {
        users.map( user => {
          const { isFollowing, userName, name } = user
          return (
            <TwitterFollowCard 
            key={userName}
            userName = {userName}
            initialIsFollowing = {isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
     )
}
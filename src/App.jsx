import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

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
    <>
    <main className='container'>
    <header className='title-header'>twitter follow card</header>
    
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
    <footer>
      <p className='text-footer'>&copy;Anthony Solano López</p>
    </footer>
    </main>
    </>
     )
}
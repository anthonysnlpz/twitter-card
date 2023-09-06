import { useState } from "react"

export function TwitterFollowCard ({children, userName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  // const state = useState(false)
  // const isFollowing = state[0]
  // const setIsFollowing = state[1]

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const imgUrl = `https://unavatar.io/${userName}`
  return (
  <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imgUrl} alt="Avatar de Camila" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
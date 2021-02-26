import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
	const { level } = useContext(ChallengeContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pgthiago.png" alt="Thiago Silva" />
      <div>
        <strong>Thiago Silva</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level {level}
        </p>
      </div>
    </div>
  )
}
import Head from 'next/head'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ChallengeBox } from '../components/ChallengeBox'

import { CountDownProvider } from '../context/CountDownContext'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Início | Move it</title>
			</Head>
			<ExperienceBar />
			<CountDownProvider>
				<section>
					<div>
						<Profile />
						<CompletedChallenges />
						<CountDown />
					</div>

					<div>
						<ChallengeBox />
					</div>
				</section>
			</CountDownProvider>
		</div>
	)
}

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ChallengeBox } from '../components/ChallengeBox'

import { ChallengeProvider } from '../contexts/ChallengesContext'
import { CountDownProvider } from '../contexts/CountDownContext'

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
	level: number
	currentExperience: number
	challengesCompleted: number
}

export default function Home({ level, currentExperience, challengesCompleted }: HomeProps) {
	return (
		<ChallengeProvider
			level={level}
			currentExperience={currentExperience}
			challengesCompleted={challengesCompleted}
		>
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
		</ChallengeProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted } = ctx.req.cookies
	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted)
		}
	}
}
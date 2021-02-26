import { createContext, useContext, useEffect, useState } from 'react'
import { ChallengeContext } from './ChallengesContext'

interface CountDownContextProps {
	seconds: number
	minutes: number
	hasFinished: boolean
	isActive: boolean

	startCountDown: () => void
	resetCountDown: () => void
}

interface CountDownProviderProps {
	children: React.ReactNode
}

let countDownTimeout: NodeJS.Timeout

export const CountDownContext = createContext({} as CountDownContextProps)

export function CountDownProvider({ children }: CountDownProviderProps) {

	const { startNewChallenge } = useContext(ChallengeContext)

	const [time, setTime] = useState(0.1 * 60)
	const [isActive, setisActive] = useState(false)
	const [hasFinished, setHasFinished] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	function startCountDown() {
		setisActive(true)
	}
	function resetCountDown() {
		clearTimeout(countDownTimeout)
		setisActive(false)
		setTime(0.1 * 60)
		setHasFinished(false)
	}

	useEffect(() => {
		if (isActive && time > 0) {
			countDownTimeout = setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		}
		else if (isActive && time === 0) {
			setHasFinished(true)
			setisActive(false)
			startNewChallenge()
		}
	}, [isActive, time])

	return (
		<CountDownContext.Provider value={{
			seconds,
			minutes,
			hasFinished,
			isActive,
			startCountDown,
			resetCountDown
		}}>
			{children}
		</CountDownContext.Provider>
	)
}
import Head from 'next/head'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { ChallengeBox } from '../components/challengeBox'
import { CompletedChallenges } from '../components/completedChallenges'
import { Countdown } from '../components/countdown'
import { ExperienceBar } from '../components/experienceBar'
import { CountdownProvider } from '../contexts/CountdownContext'
import { Profile } from '../components/Profile'
import { GetServerSideProps } from 'next'
import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number 
}

export default function Home(props) {
  return (
    <ChallengesProvider 
      level = {props.level} 
      currentExperience = {props.currentExperience} 
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
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
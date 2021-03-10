import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)  

    return (
      <div className={styles.profileContainer}>
          <img src="https://github.com/PDS122.png" alt=""/>
        <div>
            <strong>Ivson Souza</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                level {level}
            </p>
        </div>
      </div>  
    );
}



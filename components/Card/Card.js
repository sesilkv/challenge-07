import React from 'react'
import styles from '../../styles/card.module.css'
import DataCard from './DataCard'

export default function Card() {
  return (
    <div className={styles.card}>
          <div className={styles.wrapper}>
            <DataCard />
            <DataCard />
            <DataCard />
            <DataCard /><DataCard /><DataCard /><DataCard />
        </div>
    </div>
  )
}

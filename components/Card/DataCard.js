import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../../styles/card.module.css'

export default function dataCard() {
  return (
    <div className={styles.dataCard}>
        <div className='row'>
            <div className='col'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src="/image/duck.jpg" />
                        <Card.Body>
                            <Card.Title>Kwek</Card.Title>
                            <Card.Text>2 y.o.</Card.Text>
                            <Card.Text>kweki@yahoo.com</Card.Text>
                        </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  )
}

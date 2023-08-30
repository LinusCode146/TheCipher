'use client'

import styles from './Navigation.module.css'

export default function Navigation () {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <h1>|T|Cipher|</h1>
            </div>
            <div className={styles.links}>
                <span>Ciphers</span>
                <span>Info</span>
                <span>Contact</span>
            </div>
        </div>
    )
}
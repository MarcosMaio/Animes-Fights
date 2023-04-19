import React from 'react'
import styles from './Container.Module.css';

export default function Container({ children }) {
    return (
    <section className={styles.container}>
        {children}
    </section>
    )
}

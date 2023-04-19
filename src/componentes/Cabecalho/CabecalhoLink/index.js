import React from 'react'
import styles from './CabecalhoLink.module.css'
import { Link } from 'react-router-dom'

export default function CabecalhoLink({url, children}) {
    return (
    <div className={styles.cabecalhoLink}>
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    </div>
    )
}

import React from 'react'
import styles from './Cabecalho.module.css';
import logo from './logo-anime.png';
import { Link } from 'react-router-dom';
import CabecalhoLink from './CabecalhoLink';

export default function Cabecalho() {
    return (
    <header className={styles.cabecalho}>
        <Link>
            <img src={logo}
                alt='Logo'
            />
        </Link>
        <nav className={styles.home}>
            <CabecalhoLink url="./">
                Home
            </CabecalhoLink>
        </nav>
        <nav>
            <CabecalhoLink url="favoritos">
                Favoritos
            </CabecalhoLink>
        </nav>
    </header>
    )
}

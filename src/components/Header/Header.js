"use client";
import Link from 'next/link';
import { useState } from 'react';

import styles from './Header.module.scss';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.navLinks}>
                <Link href="/" className={styles.logo}><h2>Cumsock</h2></Link>
                {/* <Link href="/tokenomics">Tokenomics</Link>
                <Link href="/about">About</Link>
                <Link href="/buy">How to Buy</Link> */}
            </div>

            {/* <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} id={menuOpen ? styles.open : ''}>
                <div className={styles.icon}></div>
            </div> */}

            <div className={styles.navMenu} id={menuOpen ? styles.open : ''}>
                <div className={styles.navLinks}>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/tokenomics" onClick={() => setMenuOpen(false)}>Tokenomics</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/buy" onClick={() => setMenuOpen(false)}>How to Buy</Link>
                </div>

                <div className={styles.socialLinks}>
                    <a href="#"><img src="/images/x.svg" alt="twitter" /></a>
                    <a href="#"><img src="/images/telegram.svg" alt="telegram" /></a>
                    <a href="#"><img src="/images/dex.svg" alt="dex" /></a>
                    <a href="#"><img src="/images/uni.svg" alt="uniswap" /></a>
                </div>
            </div>
        </header>
    )
}
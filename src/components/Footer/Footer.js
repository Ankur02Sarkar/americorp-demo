import styles from './Footer.module.scss';

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <a href="#"><img src="/images/x.svg" alt="twitter" /></a>
                <a href="#"><img src="/images/telegram.svg" alt="telegram" /></a>
                <a href="#"><img src="/images/dex.svg" alt="dex" /></a>
                <a href="#"><img src="/images/uni.svg" alt="uniswap" /></a>
            </div>

            <p>Stealth Launch</p>

            <p>0% Buy Tax | 0% Sell Tax</p>

            <p>No Team Sniping</p>
        </footer>
    )
}
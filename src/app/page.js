import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <h1>Americorp <span>TM</span></h1>
        <img src="/images/logo.gif" alt="Americorp" />
      </div>
    </main>
  )
}

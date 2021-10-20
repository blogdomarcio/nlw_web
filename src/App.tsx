import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'


export function App() {

  return (
    <>
      <div className={styles.contextwraper}>
        <h1> Blog do Marcio  </h1>
        <LoginBox />
        <MessageList />
      </div>

    </>
  )
}


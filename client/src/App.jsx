import styles from "./styles.module.css"
import sqlLogo from './assets/sql-logo.png'

import  { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("") 

    const onSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted: ", queryDescription)
    }

  return (
    <main> className={styles.main}
        <img src={sqlLogo} alt="sql-logo" height="150" className={styles.icon}/>
        <h3>Generate SQL with AI</h3>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="quesry-description"
            placeholder="Describe your query"
            onChange={(e) => setQueryDescription(e.target.value)}
          />
          <input type="submit" value="Generate query"/>


        </form>
    </main>
  )
}

export default App

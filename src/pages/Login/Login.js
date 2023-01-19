import styles from './Login.module.css'

import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error : authError, loading } = useAuthentication();
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email, password
    }

    const res = await login(user)
  }

  useEffect(() => {
      
    if(authError){
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input type="email" name="email" required placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} value={email} />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" name="password" required placeholder='Insira a senha'
            onChange={(e) => setPassword(e.target.value)} value={password} />
          </label>
          {!loading && <button className='btn'>Entrar</button>}
          {loading && <button className='btn' disabled>Aguarde...</button>} 
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login
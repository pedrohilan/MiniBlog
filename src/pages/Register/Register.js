import styles from './Register.module.css'
import { useState, useEffect } from 'react'

function Register() {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")
    const user = {
      displayName, email, password
    }


    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!")
      return
    }

    console.log(user)

  }

  return (
    <div className={styles.register}>
        <h1>Cadastre-se</h1>
        <p>Crie o seu usuário</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" name="displayName" required placeholder='Nome' 
            onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
          </label>
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
          <label>
            <span>Confirmação de senha:</span>
            <input type="password" name="confirmPassword" required placeholder='Confirme a senha'
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
          </label>
          <button className='btn'>Cadastrar</button> 
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register
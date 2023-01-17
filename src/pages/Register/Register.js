import styles from './Register.module.css'
import { useState, useEffect } from 'react'

function Register() {
  return (
    <div>
        <h1>Cadastre-se</h1>
        <p>Crie o seu usuário</p>
        <form>
          <label>
            <span>Nome:</span>
            <input type="text" name="displayName" required placeholder='Nome'/>
          </label>
          <label>
            <span>Email:</span>
            <input type="email" name="email" required placeholder='Email'/>
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" name="password" required placeholder='Insira a senha'/>
          </label>
          <label>
            <span>Confirmação de senha:</span>
            <input type="password" name="confirmPassword" required placeholder='Confirme a senha'/>
          </label>
          <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register
import {getAuth, createUserWithEmailAndPassword, 
    updateProfile, signOut, signInWithEmailAndPassword} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")

    //deal with memory leak
    const [cancelled, setCancelled] = useState("")

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    //register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            
            await updateProfile(user, {displayName : data.displayName})
            
            setLoading(false)
            return user

        } catch (error) {
            
            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa contar pelo menos 6 caracteres !"
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado !"
            }else{
                systemErrorMessage = "Ocorreu um erro !"
            }

            setLoading(false)
            setError(systemErrorMessage)
        }

    }

    //logout
    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    //login
    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError("")

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {
            let systemErrorMessage

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado !"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta !"
            }else{
                systemErrorMessage = "Ocorreu um erro !"
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{
        auth, createUser, error, loading, logout, login
    }
}

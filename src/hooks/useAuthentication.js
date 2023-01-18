import {getAuth, createUserWithEmailAndPassword, 
    signWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth'

import { useState, useEffect } from 'react'

export default useAuthentication = () => {
    
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
}
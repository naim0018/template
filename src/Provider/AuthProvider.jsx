import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "../Config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(false)


    const createUser =(email,password)=>{
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInUser =(email,password)=>{
        setIsLoading(true);
       return signInWithEmailAndPassword(email,password);
    }

    useEffect(()=>{
        const subscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setIsLoading(false);
        });
        return ()=>{
            return subscribe();
        }
    },[])


    const authInfo={
        user,
    createUser,
    logInUser,
    isLoading,
    }
    return (
       <AuthContext.Provider value={authInfo}>
    {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children : PropTypes.node,
}

export default AuthProvider;
import { createContext, useState } from "react";

const AuthContext=createContext();

const AuthProvider = () => {
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

    const authInfo={
    createUser,
    logInUser,
    isLoading,
    }
    return (
       <AuthContext.Provider value={authInfo}>

       </AuthContext.Provider>
    );
};

export default AuthProvider;
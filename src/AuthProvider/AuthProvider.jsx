import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider() 

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email ,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }
  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  useEffect( () =>{
    const unsubscrible = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscrible;
    }
  })

  const authInfo = {
    loading,
    createUser,
    user,
    logIn,
    logOut,
    signInWithGoogle,
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
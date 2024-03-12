import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import {useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice"
import {LOGO_URL} from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const user = useSelector(store => store.user);
   const handleSignOut = () =>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(() => {

        
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(
            addUser({
                uid:uid, 
                email:email, 
                displayName:displayName,
                
                photoURL: photoURL
            })
            )
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
//unsubscribe when component unmounts
    return () => unsubscribe();
        }, []);


        return (
          <div className="absolute top-0 w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
          <img className="w-36 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
          {user && (
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10  object-cover"
                alt="usericon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8eIW8UaYc7fD5QyVa_Z39U07KJzGel20cRbqsURLvQ&s"
                  />
          
                
                <button
                  onClick={handleSignOut}
                  className="font-bold text-white focus:outline-none"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        );
      };
      

export default Header
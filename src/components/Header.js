
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [headerBackground, setHeaderBackground] = useState('transparent');

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const changeHeaderBackground = () => {
      if (window.scrollY > 0) {
        setHeaderBackground('#000000'); // Change to dark color when scrolled down
      } else {
        setHeaderBackground('transparent'); // Change to transparent when at the top
      }
    };

    window.addEventListener('scroll', changeHeaderBackground);

    return () => {
      window.removeEventListener('scroll', changeHeaderBackground);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full px-8 py-4 bg-gradient-to-b from-black z-50 flex flex-col items-center md:flex-row md:justify-between"
      style={{ backgroundColor: headerBackground, transition: 'background-color 0.5s ease' }}
    >
      <img className="w-36 mb-4 md:mb-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white text-sm md:text-base"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-1 px-2 md:py-2 md:px-4 bg-purple-800 text-white rounded-lg text-sm md:text-base"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Homepage' : 'GPT Search'}
          </button>
          <img
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            alt="usericon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8eIW8UaYc7fD5QyVa_Z39U07KJzGel20cRbqsURLvQ&s"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white focus:outline-none text-sm md:text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;



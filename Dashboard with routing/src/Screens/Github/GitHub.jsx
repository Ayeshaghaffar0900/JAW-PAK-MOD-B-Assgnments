

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearcBar';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import './GitHub.css';
import "../Mainpage.css"
const GitHub = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const fetchUser = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
            setError('');
        } catch (err) {
            setError('User not found!');
            setUserData(null);
        }
    };

    return (
        <div className="github-container">
            <button className="nav-button"><Link to={'/'}>Back to Home</Link></button>
            <h1 className="title">GitHub User Finder</h1>
            <SearchBar onSearch={fetchUser} />
            {error && <p className="error-text">{error}</p>}
            {userData && <UserCard user={userData} />}
        </div>
    );
};

export default GitHub;

// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './SearcBar';
// import UserCard from './UserCard';
// import { Link } from 'react-router-dom';

// const GitHub = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState('');

//     const fetchUser = async (username) => {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             setUserData(response.data);
//             setError('');
//         } catch (err) {
//             setError('User not found!');
//             setUserData(null);
//         }

//     };

//     return (
//         <div>
//             <button><Link to={'/'}>Back to Home</Link></button>
//             <h1>GitHub User Finder</h1>
//             <SearchBar onSearch={fetchUser} />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {userData && <UserCard user={userData} />}
//         </div>
//     );
// };

// export default GitHub;
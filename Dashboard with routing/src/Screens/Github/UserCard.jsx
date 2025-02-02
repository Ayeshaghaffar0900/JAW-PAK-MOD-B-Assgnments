// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// const UserCard = ({ user }) => {
//     return (
//         <>
//         <div>
//             <img src={user.avatar_url} alt="Avatar" width="100" height='100' />
//             <h2>{user.name}</h2>
//             <p>{user.bio}</p>
//             <p>Repos: {user.public_repos}</p>
//             <p>Followers: {user.followers}</p>
//             <a href={user.html_url} target="_blank" >GitHub Profile</a>
//         </div>
//         </>
//     );
// };

// export default UserCard;

import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <img src={user.avatar_url} alt="Avatar" className="avatar" />
            <h2 className="user-name">{user.name}</h2>
            <p className="user-bio">{user.bio}</p>
            <p className="user-repos">Repos: {user.public_repos}</p>
            <p className="user-followers">Followers: {user.followers}</p>
            <a href={user.html_url} target="_blank" className="github-link">GitHub Profile</a>
        </div>
    );
};

export default UserCard;
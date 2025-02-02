// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//     const [input, setInput] = useState('');

//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             if (input) onSearch(input);
//         }}>
//             <input
//                 type="text"
//                 placeholder="Enter GitHub username"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button type="submit">Search</button>
//         </form>
//     );
// };

// export default SearchBar;


import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    return (
        <form className="search-form" onSubmit={(e) => {
            e.preventDefault();
            if (input) {
                onSearch(input);
                setInput('');
            }
        }}>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;

import React, { useState } from 'react';
// import './App.css'; // Make sure to have appropriate styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`font-sans antialiased text-${darkMode ? 'gray-100' : 'gray-900'} leading-normal tracking-wider bg-cover`} style={{ backgroundImage: `url('${darkMode ? 'https://media.istockphoto.com/id/1195542618/photo/golden-sparkle-background.jpg?s=612x612&w=0&k=20&c=8JBJr1daocoDJI7LLJtUNzIzeAA4q9wogX2b_COyPbc=' : 'https://media.istockphoto.com/id/1208620307/photo/blue-sparkling-splash.jpg?s=612x612&w=0&k=20&c=ziFciSPHZwF2sDywBwlBBLFG_KsGLHbQt0Jfe9_P4nw='}')` }}>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        
        <div id="profile" className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-${darkMode ? 'gray-900' : 'white'} opacity-75 mx-6 lg:mx-0`}>
          <div className="p-4 md:p-12 text-center lg:text-left">
           
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url('${darkMode ? 'https://thumbs.dreamstime.com/b/starry-sky-pink-milky-way-trees-night-landscape-alone-hill-against-colorful-amazing-galaxy-nature-87458498.jpg' : 'https://media.istockphoto.com/id/1195542618/photo/golden-sparkle-background.jpg?s=612x612&w=0&k=20&c=8JBJr1daocoDJI7LLJtUNzIzeAA4q9wogX2b_COyPbc='}')` }}></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              What you do
            </p>
            
          </div>
        </div>
        <div className="w-full lg:w-2/5">
         
          <img src={darkMode ? 'https://i.scdn.co/image/ab67616d0000b273828789ff08a16218b2ea9445' : 'https://i.scdn.co/image/ab67616d0000b273128057b40732c042c86de1dd'} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="Profile" />
        </div>
       <div className="absolute top-0 right-0 h-12 w-18 p-4">
          
          <button className="js-change-theme focus:outline-none" onClick={toggleDarkMode}>
          <p class="text-neutral-50">{darkMode ? 'Original' : 'Remix'}</p>
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default App;

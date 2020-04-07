import React from 'react';

import styled from 'styled-components';

const WelcomePage = () => {
   const Header = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
   `;

   return (
      <section className="welcome-page">
         <Header>
            <h1>Welcome to the ultimate fan site!</h1>
            <img
               className="main-img"
               src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
               alt="rick"
            />
         </Header>
      </section>
   )
};

export default WelcomePage;

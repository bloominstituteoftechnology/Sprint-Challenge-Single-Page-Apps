import React from "react";
import styled from "styled-components"


const WelcomeContent = styled.div `
display: flex;
flex-direction: column
align-items: center;
`

const MainImg = styled.img`
margin-bottom:100px
`



export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <WelcomeContent>
        <h1>Welcome to the ultimate fan site!</h1>
        <MainImg
          className="main-img"
          src="https://nyoobserver.files.wordpress.com/2019/07/rick-and-morty-season-4-trailer-1.jpg?quality=80"
          alt="rick"
        />
      </WelcomeContent>
    </section>
  );
}

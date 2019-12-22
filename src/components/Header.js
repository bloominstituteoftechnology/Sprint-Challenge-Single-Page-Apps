import React from "react";
import styled from "styled-components";



export default function Header() {

  const Heading = styled.h1`
    font-size: 40px;
    text-align: center;
    border-bottom: 3px dashed limegreen;
  `

  // const url = "https://cdn.shopify.com/s/files/1/0558/2081/products/R3_6489_8743ec7b-a68e-4546-8195-c00600273021_1024x1024.jpg?v=1573490253"

  // const headerImg = React.topImage({
  //   render: function() {
  //     return 
  //     <img src={this.props.url} alt={`${this.props.Heading`}'s picture} className="headerImg" /> 

  //     </div>
  //   }
  // })

  return (
    <header className="ui centered">
    <Heading className="ui centered">
    <img src="https://cdn.shopify.com/s/files/1/0558/2081/products/R3_6489_8743ec7b-a68e-4546-8195-c00600273021_1024x1024.jpg?v=1573490253" alt="Rick and Morty" height="2vh" width="1.4vh"></img>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </Heading>
    </header>
  );
}

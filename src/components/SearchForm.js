import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 200px;
    border: solid 1px #ccc;
    padding: 0.5rem;
    outline: none;
`;

const Button = styled.button`
    border: solid 1px dodgerblue;
    padding: 0.5rem;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
        background-color: #1976d0;
    }
`;

export default function SearchForm(props) {
    const search = event => {
        event.preventDefault();
        let characters = props.characters;
        characters.forEach(character => {
            if (character.name === document.querySelector("input").value) {
                let cards = document.querySelectorAll(".character-card");
                cards = Array.from(cards);

                cards.forEach(cards => {
                    cards.classList.add("hide");
                });

                console.log(character);
            }
        });
        document.querySelector("input").value = "";
    };
    return (
        <section className="search-form">
            <form>
                <Input type="text" placeholder="Enter Character Name..." />
                <Button type="submit" onClick={search}>
                    Search
                </Button>
            </form>
        </section>
    );
}

import styled from "styled-components";
import Fundo from "../Img/fundo.png";


export const Header = styled.div`
  margin: 10px;
  color: #373737;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: uppercase;

  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 600px;

  div {
    width: 99%;
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    align-items: center;
    margin-bottom: 300px;
  }
  ul {
    list-style: none;
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-right: 8%;
    margin-left: -20%;
    align-items: center;
  }
  li {
    margin: 5%;
  }
  button {
    margin-right: 15%;
    padding: 8px;
    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  h2 {
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: 6px;
  }
  section {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    h1 {
      display: none;
    }
    section {
      display: none;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;
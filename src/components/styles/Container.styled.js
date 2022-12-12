import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const SLink = styled (NavLink)`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.9rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    
    svg {
      color:white;
    }

    h4 {
      color: white;
    }
  }

`;

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const CardCuisine = styled.div`
  img {
    width:100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }

  p {
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%, 0%);
    color: white;
    width:100%;
    text-align: center;
    font-weight:600;
    font-size: 0.9rem;
    height:40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, 0.5));
`;

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;

a {
    margin: 0rem 1rem;
}
`;

export { List, Wrapper, Card, Gradient, CardCuisine, Grid, SLink };

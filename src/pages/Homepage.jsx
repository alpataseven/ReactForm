import GradientText from "../Components/GradientText";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Homepage() {
  return (
    <>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
      >
        <h1 className="text-style">Görev Listesi</h1>
      </GradientText>

      <div className="mt-3" id="homepage-btn">
        <StyledWrapper>
          <NavLink to="/list">
            <span className="text">Get Started!</span>
          </NavLink>
        </StyledWrapper>
      </div>
    </>
  );
}

const StyledWrapper = styled.div`
  a {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }

  a:hover span {
    background: none;
  }

  a:active {
    transform: scale(0.9);
  }

  a span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }
`;

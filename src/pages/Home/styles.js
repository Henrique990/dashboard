import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  grid-column: 15% 80%;
  gap: 5rem;

  @media screen and (max-width: 1024px) {
    gap: 2rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 5% 95%;
  }
`;

export const Sidebar = styled.div`
  z-index: 1;
`;

export const Nav = styled.div`
  margin: 1.5rem;
  `;
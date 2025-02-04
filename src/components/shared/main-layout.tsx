import styled from "styled-components";

export const MainLayoutStyle = {
  Container: styled.main`
    min-height: 100vh;
    width: var(--width);
    margin: auto;
    padding-top: 80px;

    @media (max-width: 768px) {
      padding-top: 20px;
      width: var(--max-percentage-width);
      margin-left: 8.5%;
    }

    h1 {
      font-weight: 600;
      font-style: normal;
      font-size: 32px;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        max-width: 100%;
        font-size: 28px;
      }
    }

    & > p,
    section > p {
      font-size: 20px;
      max-width: 60%;
      color: grey;

      @media (max-width: 768px) {
        max-width: 100%;
        font-size: 16px;
      }
    }

    & > nav {
      margin-top: 60px;
    }
  `,
};

import styled from "styled-components";

export const MainLayoutStyle = {
  Container: styled.main`
    min-height: 100vh;
    width: var(--width);
    margin: auto;
    padding-top: 80px;
    padding-bottom: 250px;

    @media (max-width: 768px) {
      padding-top: 20px;
      width: var(--max-percentage-width);
      margin-left: 6.5%;
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

    ol {
      margin: 10px 0;
      padding: 5px 0;
      margin-left: 25px;
    }

    & > p,
    section > p,
    li {
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

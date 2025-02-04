"use client";

import ArticleCard from "@/components/molecules/article-card";
import { MainLayoutStyle } from "@/components/shared/main-layout";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Style.Container>
      <hgroup>
        <h1>Why the UI Neglect ?</h1>
        <h2>Nobert Momoh</h2>
      </hgroup>
      <p>A fresh approach to building effective mental models for understanding styling and CSS.</p>
      <p>areas of focus: react, styled-components, css</p>
      <nav>
        <Style.Link href="/box-model">
          <ArticleCard title="What's in the Box?" desc="Let's talk about the CSS Box Model" />
        </Style.Link>
      </nav>
    </Style.Container>
  );
}

const Style = {
  Link: styled(Link)``,
  Container: styled(MainLayoutStyle.Container)`
    h2 {
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      color: grey;
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  `,
};

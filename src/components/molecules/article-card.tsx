"use client";

import styled from "styled-components";

export default function ArticleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Style.Container>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure``,
};

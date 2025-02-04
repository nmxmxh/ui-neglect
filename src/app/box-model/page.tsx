"use client";

import styled from "styled-components";
import { MainLayoutStyle } from "@/components/shared/main-layout";
import { useState } from "react";
import Box from "@/components/pages/box-model/box";

export default function BoxModel() {
  const [showBorders, setShowBorders] = useState(false);

  const [boxPaddingState, setBoxPaddingState] = useState({
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    all: 0,
  });

  function changeBoxPaddingState(key: keyof typeof boxPaddingState) {
    if (boxPaddingState[key] === 40)
      return setBoxPaddingState({
        ...boxPaddingState,
        [key]: 0,
      });
    else if (boxPaddingState[key] === 0)
      return setBoxPaddingState({
        ...boxPaddingState,
        [key]: 40,
      });
  }

  return (
    <Style.Container $showBorders={showBorders}>
      <section>
        <h1>What's in the Box? - The CSS Box Model</h1>
        <p>
          As a kid, I remember bringing a fine art assignment home for the first time, holding my crayons and preparing
          to do my best in delivering, obviously, a masterpiece.
        </p>
        <p>
          The goal at the time was to color in a drawing, a task I tackled with all the ignorance and positive energy a
          child could naively muster. Fortunately, I did a bad job.
        </p>
        <p>
          This became an avenue to learn an important life lesson from my mother at the time, she softly sat beside me
          to tell me what has become one of the most important lessons I could learn in relation to art, tackling
          drawing assignments & life in general.
        </p>
        <p>"Be mindful of the lines, once you're colored them in, you can do anything you want inside them".</p>
        <p>
          There is no one size fits all to styling, CSS can be an amazingly complicated and complex language to manage,
          but another honest truth is, for those who can see these lines and understand its foundational concepts, it
          can also be very simple (and FUN!) to work with there are a hundred and one ways to do the same thing, but
          you'll always be stuck if you don't have a eye for seeing and understanding the lines of the user interfaces
          you are tasked to develop.
        </p>
        <br />
        <p>
          I've been using lines for a while, but other words to help you mentally model what I'm trying to explain would
          be a boundary, a container, flesh (or skin), a body, a box.
        </p>
        <p>
          This is important, because this is also where the fun starts, you'll notice that these can all be capable of
          movement, hold weight, be stacked on each other etc but mentally & visually, your first thought for organizing
          interfaces would be the ability to mentally categorize what you're seeing into boxes.
        </p>
        <p>
          To help you get a sense of what I've been yapping about,{" "}
          <button onClick={() => setShowBorders(!showBorders)}>
            <strong>click me</strong>
          </button>
        </p>
      </section>
      <section>
        <p>
          Boxes, boxes everywhere, but this is just showing a title tag, with a few paragraph tags, contained to a
          specified content to only fit a percentage width of the screen, that's not a good way for you to fully
          understand what's happening.
        </p>
        <p>So let's help you with a more visual & interactive model.</p>
        <h2>Visualizing the Box Model</h2>
        <article>
          <Box $padding={boxPaddingState} $showBorders={showBorders} />
        </article>
        <p>Here we have a box (div tag) with 4 bits of content (paragraph tags) within.</p>
        <p>
          Surrounding this content (box.) is a padding, a padding is essentially a section of space, fluff, you can add
          either consistently or inconsistently to all{" "}
          <button onClick={() => changeBoxPaddingState("all")}>
            <strong>sides</strong>
          </button>{" "}
          of your content.
        </p>
        <p>
          When we say sides, we usually talking about the{" "}
          <button onClick={() => changeBoxPaddingState("top")}>
            <strong>top</strong>
          </button>
          ,{" "}
          <button onClick={() => changeBoxPaddingState("bottom")}>
            <strong>bottom</strong>
          </button>
          ,{" "}
          <button onClick={() => changeBoxPaddingState("left")}>
            <strong>left</strong>
          </button>{" "}
          and{" "}
          <button onClick={() => changeBoxPaddingState("right")}>
            <strong>right</strong>
          </button>{" "}
          of your content.
        </p>
        <p>
          Now, click the text for sides (and individuals too) above and see the transition between two states; a zero
          state and a positive state.
        </p>
        <p>
          It's usually three in relation to a lot of states (states are like possible conditions of an expected
          behaviour), but negative states are ignored or treated as zero for paddings. A three state system is important
          to take note of.
        </p>
        <p>
          When it comes to creating interfaces, it is important to take note of <strong>positive</strong>,{" "}
          <strong>zero</strong> & <strong>negative</strong> numbered values and also <strong>x</strong>,{" "}
          <strong>y</strong> & <strong>z</strong> position values.
        </p>
        <p>Clicking those don't do anything, (for now).</p>
      </section>
    </Style.Container>
  );
}

const Style = {
  Container: styled(MainLayoutStyle.Container)<{ $showBorders: boolean }>`
    transition: border 0.25s ease-in;
    border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "transparent")};
    padding-bottom: 500px;

    article {
      margin-bottom: 25px;
    }

    h1,
    h2,
    p,
    strong {
      transition: border 0.25s ease-in;
      border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "transparent")};
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "transparent")};
        transition: border 0.25s ease-in;
        top: -2px;
        right: -2px;
        z-index: 1;
        opacity: 0.25;
      }
    }

    button {
      position: relative;
      z-index: 10;

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "transparent")};
        transition: border 0.25s ease-in;
        top: -2px;
        right: -2px;
        z-index: 1;
        opacity: 0.25;
      }
    }

    section > h2 {
      font-weight: 600;
      font-style: normal;
      font-size: 28px;
      margin: 25px 0;

      @media (max-width: 768px) {
        max-width: 100%;
        font-size: 24px;
      }
    }

    p {
      margin-bottom: 10px;
    }
  `,
};

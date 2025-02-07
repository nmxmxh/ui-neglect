"use client";

import styled from "styled-components";

import Box from "@/components/pages/box-model/box";
import { MainLayoutStyle } from "@/components/shared/main-layout";
import type { BorderState, MarginState } from "@/lib/hooks/useBox";
import { useBox } from "@/lib/hooks/useBox";

export default function BoxModel() {
  const { borderState, dispatchBorder, paddingState, marginState, dispatchPadding, dispatchMargin } = useBox();
  console.log(marginState);

  return (
    <Style.Container $borders={borderState} $margins={marginState}>
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
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "show" })}>
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
          <Box
            $padding={paddingState}
            $margins={marginState}
            $borders={borderState}
            $noShowMargin={true}
            boxId="initial"
          />
        </article>
        <p>Here we have a box (div tag) with 4 bits of content (paragraph tags) within.</p>
        <p>
          Surrounding this content (box.) is a padding, a padding is essentially a section of space, fluff, you can add
          either consistently or inconsistently to all{" "}
          <button onClick={() => dispatchPadding({ type: "TOGGLE_PADDING", key: "all" })}>
            <strong>sides</strong>
          </button>{" "}
          of your content.
        </p>
        <p>
          When we say sides, we usually talking about the{" "}
          <button onClick={() => dispatchPadding({ type: "TOGGLE_PADDING", key: "top" })}>
            <strong>top</strong>
          </button>
          ,{" "}
          <button onClick={() => dispatchPadding({ type: "TOGGLE_PADDING", key: "bottom" })}>
            <strong>bottom</strong>
          </button>
          ,{" "}
          <button onClick={() => dispatchPadding({ type: "TOGGLE_PADDING", key: "left" })}>
            <strong>left</strong>
          </button>{" "}
          and{" "}
          <button onClick={() => dispatchPadding({ type: "TOGGLE_PADDING", key: "right" })}>
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
        <p>
          So you can essentially imagine (box.) here as the main content or building of our home, (well, modest home),
          the padding or space around it can be the green area, a space that essentially allows our content breathe
          within it's container, and then the boundary of our content is defined by a <strong>border</strong>.
        </p>
        <p>
          A{" "}
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "show" })}>
            <strong>border</strong>
          </button>{" "}
          can therefore be seen as the fence surrounding your content, you can circle it through a few{" "}
          <button onClick={() => dispatchBorder({ type: "CHANGE_STROKE" })}>
            <strong>styles</strong>
          </button>
          , give it a bit of{" "}
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "showCurves" })}>
            <strong>curve</strong>
          </button>{" "}
          (this works for specific sides too), maybe a little{" "}
          <button onClick={() => dispatchBorder({ type: "CHANGE_COLOR" })}>
            <strong>color</strong>
          </button>
          , totally not have to{" "}
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "show" })}>
            <strong>show or display</strong>
          </button>{" "}
          it as part of your content etc
        </p>
        <article>
          <Box
            $padding={paddingState}
            $borders={borderState}
            $margins={marginState}
            $noShowMargin={true}
            boxId="border"
          />
        </article>
        <p>like an actual fence.</p>
        <p>
          We can now look at borders as the lines, or frame of our content. This determines the limit of your content's
          area of influence. This can become very important when we look into working with overflows.
        </p>
        <p>
          Everything you will use in creating great user interfaces, buttons, cards, inputs, modals etc, is dependent on
          a solid grasp on how your content works, the space of your paddings, the definition of your borders and
          eventually margins, the surrounding external space of your content.{" "}
        </p>
        <p>
          One of my favorite concepts in computer science is abstraction; in simplest terms, it is the ability to hide
          complexity. Imagine trying to develop a city from the ground up, getting the different architectural schemas,
          timelines, people and a whole lot of other things, that is a lot to think about, and a lot to manage.
        </p>
        <p>
          Now, the thing is, a city is a compilation of less structured systems, structures and at it's base level
          buildings. While it might be incredibly complex to understand developing a city, it's easier to understand
          constructing a single building, and though the insides, functionality and properties may vary, the still
          follow the same major concepts. When you proceed to combine a lot of these together, you get your city.
        </p>
        <p>
          So whilst you've temporarily ignored the complexity of developing a city, by slowly constructing your smaller
          buildings and putting them together (like Legos 😅), you've ignored the complexity of the city and created an
          amazing collection of buildings (you might call that a city too). This is the same for creating dense and
          attractive user interfaces, by paying attention to the details and pecularities of your single boxes, you can
          create an amazing combined experience.
        </p>
        <p>
          Once again, let's look at our content, padding and border but with the analogy of looking at our box model
          like a building. In this scenario let's imagine a group of buildings in an estate, you can also mentally note
          how the relationship between buildings and the space around them can signify the sophistry of the residents
          (so space is important!).
        </p>
        <p>
          Your <strong>building</strong> itself = the <strong>content</strong> (text, image, symbol etc).
        </p>
        <p>
          The <strong>interior space</strong> between the walls & your fences, this can contain your lawn, grill, the
          space you can play around with = the <strong>padding</strong>.
        </p>
        <p>
          Your <strong>fence</strong>, the definition of the boundary of your building, the lines your property should
          not (but can) cross = the <strong>border</strong>.
        </p>
        <p>
          Now your area of influence has essentially ended, but you want to leave a boundary of space, maybe for
          aesthetic reasons, for your privacy or it's just your influence flexing. You can add a layer of exterior space
          around the definition of your area of influence (content + padding + border). This is your{" "}
          <strong>margin</strong>.
        </p>
        <p>
          If a building has no margin (no exterior space around it), you can sense how this would make your buildings
          feel cramped.
        </p>
        <p>
          The <strong>exterior space</strong> around your buildings = the{" "}
          <button onClick={() => dispatchMargin({ type: "TOGGLE_MARGIN", key: "show" })}>
            <strong>margin</strong>
          </button>
          .
        </p>
        <p>Yes, you can click margin now.</p>
        <article className="with-margin">
          <Box $padding={paddingState} $margins={marginState} $borders={borderState} boxId="initial" />
          <div className="margin-block"></div>
        </article>
        <p>
          FUN FACT. While working on this, I learnt about collapsing margins. Essentially, in CSS, the adjoining margins
          of two or more boxes can combine to form a single margin, margins that form this way are said to collapse. The
          answer also further elaborates that margins aren't about sizing the box, but giving it breathing room.{" "}
        </p>
        <p>If you look closely, you can see the different shades of margins merge into each other.</p>
        <p>
          It's also important to note you cannot directly add color to margins or paddings, borders can be colored, I
          can achieve these feats by using pseudo elements to mimic said behaviours and characteristics I'm trying to
          achieve.
        </p>
      </section>
    </Style.Container>
  );
}

const Style = {
  Container: styled(MainLayoutStyle.Container)<{ $borders: BorderState; $margins: MarginState }>`
    transition: border 0.25s ease-in;
    border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
    border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
    padding-bottom: 250px;

    article {
      margin: 25px 0;
      position: relative;

      &::after {
        height: 25px;
        width: 100%;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        top: 100%;
        content: "";
        position: absolute;
        transition: background-color 0.25s ease-in;
      }

      &::before {
        height: 25px;
        width: 100%;
        top: -25px;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        content: "";
        position: absolute;
        transition: background-color 0.25s ease-in;
      }
    }

    h1,
    h2,
    p,
    strong {
      transition: border 0.25s ease-in;
      border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
      border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
        border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
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
        border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
        border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
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

      &::after {
        height: 25px;
        width: 100%;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        top: 100%;
        content: "";
        position: absolute;
        opacity: 0.5;
        transition: background-color 0.25s ease-in;
      }

      &::before {
        height: 25px;
        width: 100%;
        top: -25px;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        content: "";
        position: absolute;
        opacity: 0.5;
        transition: background-color 0.25s ease-in;
      }

      @media (max-width: 768px) {
        max-width: 100%;
        font-size: 24px;
      }
    }

    p {
      margin-bottom: 10px;

      &::after {
        height: 10px;
        width: 100%;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        top: 100%;
        content: "";
        position: absolute;
        transition: background-color 0.25s ease-in;
      }
    }
  `,
};

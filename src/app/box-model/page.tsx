"use client";

import styled from "styled-components";

import Box from "@/components/pages/box-model/box";
import { MainLayoutStyle } from "@/components/shared/main-layout";
import type { BorderState, MarginState } from "@/lib/hooks/useBox";
import { useBox } from "@/lib/hooks/useBox";

export default function BoxModel() {
  const { borderState, dispatchBorder, paddingState, marginState, dispatchPadding, dispatchMargin } = useBox();

  return (
    <Style.Container $borders={borderState} $margins={marginState}>
      <section>
        <h1>What's in the Box? - The CSS Box Model</h1>
        <h2>A Childhood Lesson in Boundaries</h2>
        <p>
          As a kid, I remember bringing home my first fine art assignment, armed with crayons and determined to create,
          obviously, a masterpiece.
        </p>
        <p>
          The task was simple: color in a drawing. With all the ignorance and positive energy a child could muster, I
          tackled it enthusiastically. Fortunately, I did a terrible job.
        </p>
        <p>
          This turned into an invaluable learning moment. My mother sat beside me and gently shared a lesson that has
          stayed with me throughout my life, especially in my journey with art, design, and software development:
        </p>
        <p>"Be mindful of the lines, once you're colored them in, you can do anything you want inside them".</p>
        <h2>Understanding CSS Through Boundaries</h2>
        <p>
          There is no one-size-fits-all approach to styling. CSS can be an incredibly complex language, yet it can also
          be simple and fun for those who understand its foundational concepts. If you can see and respect the "lines"
          of user interfaces, you’ll unlock the flexibility and power CSS offers.
        </p>
        <br />
        <p>
          When I refer to "lines," other words that might help you visualize this concept are boundaries, containers,
          flesh (or skin), a body, or simply a box.
        </p>
        <p>
          This understanding is crucial because it sets the stage for organizing interfaces. These boxes can move,
          stack, hold weight, and define structure, making it essential to develop an instinct for categorizing elements
          into boxes.
        </p>
        <p>
          To get a better sense of what I’ve been talking about,{" "}
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "show" })}>
            <strong>click me</strong>
          </button>
        </p>
      </section>
      <section>
        <p>Boxes, boxes everywhere.</p>
        <p>
          At first glance, it may seem like just a title tag and a few paragraph tags, neatly confined within a content
          block that takes up a percentage of the screen width. But that alone won’t give you the full picture of what’s
          really happening inside the CSS Box Model.
        </p>
        <p>So, let’s take things a step further and explore a more visual and interactive representation.</p>
        <h2>Visualizing the Box Model</h2>
        <p>At its core, the CSS Box Model consists of four key parts:</p>
        <ol>
          <li>
            <strong>Content </strong>– The actual element, such as text, an image, or a button.
          </li>
          <li>
            <strong>Padding </strong>– The space inside the element, creating breathing room between the content and the
            border.
          </li>
          <li>
            <strong>Border </strong>– The boundary defining the edge of the element, much like a fence.
          </li>
          <li>
            <strong>Margin </strong>– The external space around the element, preventing it from feeling cramped.
          </li>
        </ol>
        <h2>Padding: Giving Content Room to Breathe</h2>
        <p>
          Imagine your content as a modest home. The padding is the surrounding space—your lawn, patio, or play area.
          This buffer creates visual balance and prevents elements from feeling too compressed.
        </p>
        <p>
          <strong>Interactive Experiment</strong>
        </p>
        <article>
          <Box
            $padding={paddingState}
            $margins={marginState}
            $borders={borderState}
            $noShowMargin={true}
            boxId="initial"
          />
        </article>
        <p>Here, we have a box (div tag) containing four pieces of content (paragraph tags).</p>
        <p>
          Surrounding this box is <strong>padding</strong>—a space that gives breathing room to the content. Padding can
          be applied consistently to all sides or customized for individual sides (top, right, bottom, left).
        </p>
        <p>
          Click the options below to toggle between different padding states:{" "}
          <button onClick={() => dispatchPadding({ type: "TOGGLE_PADDING", key: "all" })}>
            <strong> All sides</strong>
          </button>
          (uniform padding) ,
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
          <button>
            <strong> right</strong>
          </button>
        </p>
        <p>By toggling these, you’ll notice how padding impacts the spacing inside the box.</p>
        <p>
          <strong>NOTE:</strong> Negative paddings don't exist so they automatically default to 0.
        </p>
        <h2>Borders: The Frame of Your Elements</h2>
        <p>
          A border is like a fence around your house. It defines where your element begins and ends. You can style it
          with different widths, colors, and rounded corners to add visual interest.
        </p>
        <p>
          <strong>Interactive Experiment</strong>
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
        <p>Click below to see how different border styles affect the box:</p>
        <p>
          We have{" "}
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "show" })}>
            <strong>borders</strong>
          </button>{" "}
          to define the element's boundary,{" "}
          <button onClick={() => dispatchBorder({ type: "CHANGE_STROKE" })}>
            <strong>stroke</strong>
          </button>{" "}
          to adjust the thickness or style,{" "}
          <button onClick={() => dispatchBorder({ type: "CHANGE_COLOR" })}>
            <strong>color</strong>
          </button>{" "}
          to modify its appearance, and{" "}
          <button onClick={() => dispatchBorder({ type: "TOGGLE", key: "showCurves" })}>
            <strong>border-radius</strong>
          </button>{" "}
          to introduce curves and soften the edges.
        </p>
        <h2>Margins: External Spacing for Balance</h2>
        <p>
          Your margin is the empty space surrounding your element. If your house had no margin, it would be built right
          up against the next one, creating a cramped and uncomfortable space.
        </p>
        <p>
          Margins create separation between elements, ensuring a well-structured layout. A fascinating aspect of margins
          is margin collapsing, where adjacent margins can merge into a single margin, reducing unnecessary spacing.
        </p>
        <p>
          <strong>Interactive Experiment</strong>
        </p>
        <p>
          Click{" "}
          <button onClick={() => dispatchMargin({ type: "TOGGLE_MARGIN", key: "show" })}>
            <strong>margin</strong>
          </button>{" "}
          to see how we work with the separation, especially in a document like this.
        </p>
        <article className="with-margin">
          <Box $padding={paddingState} $margins={marginState} $borders={borderState} boxId="initial" />
          <div className="margin-block"></div>
        </article>
        <p>
          <strong>FUN FACT: Margin Collapsing</strong>
        </p>
        <p>
          While working on this, I learned about collapsing margins. In CSS, when two margins from adjacent elements
          meet, they can combine into a single margin rather than stacking. This means margins aren't about sizing the
          box, but about giving it breathing room.
        </p>
        <p>If you look closely, you can see the different shades of margins merging into each other.</p>
        <p>
          It's important to note that you cannot directly add color to margins or paddings. Borders, however, can be
          colored. To mimic these effects, you can use pseudo-elements like ::before and ::after to create visual
          illusions of colored margins and paddings.
        </p>
        <h2>Abstraction: From Single Boxes to Complex Interfaces</h2>
        <p>
          One of my favorite concepts in computer science is abstraction—hiding complexity to focus on simpler, more
          manageable components.
        </p>
        <p>
          Think of building a city from scratch. It involves designing roads, skyscrapers, houses, public spaces, and
          infrastructure—a daunting task. But if you break it down into individual buildings, each following similar
          principles, the process becomes more manageable.
        </p>
        <p>
          Similarly, when designing complex UI layouts, the key is mastering how individual boxes (elements) interact.
          By understanding how content, padding, borders, and margins work together, you can construct visually
          appealing and functional designs, one component at a time.
        </p>
        <p>
          Modern UI frameworks like React, Vue, and Angular rely heavily on the principles of the Box Model when
          structuring reusable components. Grasping these fundamentals will help you build more maintainable and
          visually consistent user interfaces.
        </p>
        <h2>Conclusion: Seeing the Lines, Mastering the Art</h2>
        <p>
          CSS is both an art and a science. While there are countless ways to achieve the same visual result, your
          ability to see and respect the boundaries of elements will determine your success in creating structured,
          responsive, and aesthetically pleasing interfaces.
        </p>
        <p>
          Every button, card, input field, and modal follows the principles of the <strong>CSS Box Model</strong>.
          Mastering it will not only improve your ability to style elements but will also give you a deeper appreciation
          for how digital interfaces are constructed.
        </p>
        <p>
          So, the next time you design a webpage, remember:{" "}
          <strong>Be mindful of the lines. Once you've defined them, you can do anything you want inside them.</strong>
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
    strong,
    li,
    ol {
      transition: border 0.25s ease-in;
      border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
      border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
      position: relative;
      height: max-content;

      &::before {
        content: "";
        position: absolute;
        height: calc(100% + 2px);
        width: calc(100% + 2px);
        border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
        border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
        transition: border 0.25s ease-in;
        top: -3px;
        right: -3px;
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
      font-size: 24px;
      margin: 15px 0;
      color: rgba(0, 0, 0, 0.65);
      position: relative;

      &::after {
        height: 15px;
        width: 100%;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        top: 100%;
        content: "";
        position: absolute;
        opacity: 0.5;
        transition: background-color 0.25s ease-in;
        left: 0;

        &::before {
          height: 15px;
          width: 100%;
          top: -15px;
          background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
          content: "";
          position: absolute;
          opacity: 0.5;
          transition: background-color 0.25s ease-in;
          left: 0;
        }
      }

      @media (max-width: 768px) {
        max-width: 100%;
        font-size: 24px;
      }
    }

    section > ol {
      &::after {
        height: 15px;
        width: 100%;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        top: 100%;
        content: "";
        position: absolute;
        opacity: 0.5;
        transition: background-color 0.25s ease-in;

        &::before {
          height: 15px;
          width: 100%;
          top: -15px;
          background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
          content: "";
          position: absolute;
          opacity: 0.5;
          transition: background-color 0.25s ease-in;
        }
      }
    }

    p,
    li {
      margin-bottom: 10px;

      &::after {
        height: 10px;
        width: 100%;
        background-color: ${({ $margins }) => ($margins.show ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
        top: 100%;
        content: "";
        position: absolute;
        transition: background-color 0.25s ease-in;
        left: 0;
      }
    }
  `,
};

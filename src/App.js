import React from "react";
import layout from "./assets/layout.png";
import topLayout from "./assets/layoutTop.png";
import botLayout from "./assets/layoutBot.png";
import { Container, BotLayout, Layer, TopLayout, Frame } from "./styles";

export default function App() {
  const url = "https://nlw-mobile-pxc-pedroxc.vercel.app";
  return (
    <Container>
      <TopLayout src={topLayout} />
      <Layer src={layout} />
      <Frame src={url} title="nwl" scrolling="no" />
      <BotLayout src={botLayout} />
    </Container>
  );
}

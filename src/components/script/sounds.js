import { Howl } from "howler";

export const mouseClick = new Howl({
  src: [`${process.env.PUBLIC_URL}/sounds/mouse_click.wav`],
});

export const flip = new Howl({
  src: [`${process.env.PUBLIC_URL}/sounds/flip.mp3`],
});

export const cardFlipBest = new Howl({
  src: [`${process.env.PUBLIC_URL}/sounds/card_flip_best.wav`],
});

export const success = new Howl({
  src: [`${process.env.PUBLIC_URL}/sounds/mario_success.wav`],
});

export const fail = new Howl({
  src: [`${process.env.PUBLIC_URL}/sounds/mario_gameover.wav`],
});

export const gameFinished = new Howl({
  src: [`${process.env.PUBLIC_URL}/sounds/game_finished.wav`],
});
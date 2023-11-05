import { v4 as uuidv4 } from "uuid";

export default class Pokemon {
  constructor(imageSrc, name) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.uid = uuidv4();
  }
}

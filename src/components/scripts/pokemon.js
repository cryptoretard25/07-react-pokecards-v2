import { v4 as uuidv4 } from "uuid";

export default class Pokemon {
  constructor(imageSrc, name, error='') {
    this.name = name;
    this.imageSrc = imageSrc;
    this.error = error;
    this.uid = uuidv4();
  }
}

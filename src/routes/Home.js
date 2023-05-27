import { Component } from "../core/heropy.js";

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
      <h1>HELLO WORLD</h1>
    `;
  }
}

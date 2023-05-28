import { Component } from "../core/heropy.js";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/iam454/movie-app">GitHub Repository</a>
      </div>
      <div>
        <a href="https://github.com/iam454">${new Date().getFullYear()} iam454</a>
      </div>
    `;
  }
}

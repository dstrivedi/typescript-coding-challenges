import * as homework from "./homework";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Coding Lessons</h1>`;

appDiv.innerHTML += `<p>Use the files in the 'homework' directory to complete the work.<p>`;
appDiv.innerHTML += `<p>Fork this project and edit the files individually to finalize the working version.<p>`;

// ignore this; just tricking the compiler
homework;

function component(name: string = "TypeScript"): HTMLElement {
  const element: HTMLElement = document.createElement("div");

  element.innerHTML = `Hello Webpack world! ${name}`;

  return element;
}

document.body.appendChild(component());
document.body.appendChild(component("Plamen Mitev"));

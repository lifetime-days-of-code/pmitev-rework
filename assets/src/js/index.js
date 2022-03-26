function component(name = "Plamen") {
  const element = document.createElement("div");

  element.innerHTML = `Hello Webpack world!${name}`;

  return element;
}

document.body.appendChild(component());
document.body.appendChild(component("Mitev"));

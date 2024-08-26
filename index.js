function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  for (const child of element.props.children) {
    render(child, dom);
  }

  container.appendChild(dom);
  console.log(container);
}

const Act = {
  createElement,
  render,
};

/** @jsx Didact.createElement */
const element = Act.createElement(
  "div",
  { id: "Hokkaido", class: "display: flex" },
  Act.createElement("p", {id: "osaka"}, "Tokyo"),

  Act.createElement("p", {id: "okinawa"}, Act.createElement("p", null, "Hokkaido"))
);

const container = document.querySelector("#root");
Act.render(element, container);

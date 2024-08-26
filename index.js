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

const Act = {
  createElement,
};

/** @jsx Didact.createElement */
const element = Act.createElement(
  "div",
  { id: "Hokkaido" },
  Act.createElement("p", null, "Tokyo"),
  Act.createElement("b")
);

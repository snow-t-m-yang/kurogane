const root = document.querySelector("#root");

function render() {
  return root.innerHTML = `<div>${new Date().toLocaleString()}</div>`
}

console.log(root)
render()
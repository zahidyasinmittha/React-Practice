let tag = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google",
};

let root = document.querySelector(".root");

function render(tag, root) {
  let element = document.createElement(tag.type);
  element.innerHTML = tag.children;
  // element.href = (tag.props).href;
  // element.target = (tag.props).target;
  // console.log(root.appendChild(element));
}
render(tag, root);


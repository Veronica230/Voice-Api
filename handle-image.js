let targetPath = sessionStorage.getItem("targetPath");
let modelPath = sessionStorage.getItem("modelPath");

window.onload = () => {
  const target = document.getElementById("marker");
  const model = document.getElementById("model");

  target.setAttribute("url", targetPath);
  model.setAttribute("url", modelPath);
};

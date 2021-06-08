let targetPath = sessionStorage.getItem("targetPath");
let modelPath = sessionStorage.getItem("modelPath");

window.onload = function () {
  const target = document.getElementById("marker");
  const model = document.getElementById("model");

  target.setAttribute("url", targetPath);
  model.setAttribute("gltf-model", modelPath);
    console.log('que trae ---->', model)
};

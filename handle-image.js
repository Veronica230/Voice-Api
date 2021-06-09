let targetPath = sessionStorage.getItem("targetPath");
let modelPath = sessionStorage.getItem("modelPath");

window.onload = function () {
  const target = document.getElementById("marker");
  //const model = document.getElementById("model");

  target.setAttribute("url", targetPath);  
  target.innerHTML = `<a-entity id="model" gltf-model="${modelPath}" type="nft" smooth="true" smoothCount="10"smoothTolerance=".01" smoothThreshold="5"> </a-entity>`;
};

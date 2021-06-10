const changeExt = (fileName, newExt) => {
  const pos = fileName.includes(".")
    ? fileName.lastIndexOf(".")
    : fileName.length;
  const fileRoot = fileName.substr(0, pos);
  const output = `${fileRoot}.${newExt}`;
  return output;
};

const getTargetPath = (event) => {
  const value = event.target.value;
  sessionStorage.setItem("targetPath", value);
  const changeFormat = changeExt(value, 'png')
  document.getElementById("img-result").src = changeFormat;
};

const getModelPath = (event) => {
  const value = event.target.value;
  sessionStorage.setItem("modelPath", value);
  const divModel = document.getElementById("render-model-img");
  divModel.innerHTML = `<h1>Error: No se puede previsualizar un modelo tipo gtlf</h1>`;
};

const getStatus = () => {
  sessionStorage.removeItem("targetPath");
  sessionStorage.removeItem("modelPath");
  if (window.confirm("¿Deseas hacer resetear de los datos?")) {
    sessionStorage.removeItem("targetPath");
    sessionStorage.removeItem("modelPath");
  }
};

const reloadVideoZone = () => {
  if (window.confirm("¿Deseas enviar los datos?")) {
    location.reload();
  }
};
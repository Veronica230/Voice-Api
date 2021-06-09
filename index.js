const getTargetPath = () => {
  const targetFile = document.getElementById("fileTarget").files[0];
  const reader = new FileReader();
    reader.readAsDataURL(targetFile);
    reader.onloadend = () => {
      sessionStorage.setItem("targetPath", reader.result);
  }
};

const getModelPath = () => {
  const modelFile = document.getElementById("fileModel").files[0];
  const reader = new FileReader();
  reader.readAsDataURL(modelFile);
  reader.onloadend = () => {
    sessionStorage.setItem("modelPath", reader.result);
}
};

const getStatus = () => {
  sessionStorage.removeItem("targetPath")
  sessionStorage.removeItem("modelPath")
  if (window.confirm("¿Deseas hacer reset de los datos?")) {
    sessionStorage.removeItem("targetPath");
    sessionStorage.removeItem("modelPath");
  }
}

const reloadVideoZone = () => {
  if (window.confirm("¿Deseas enviar los datos?")) {
    document.getElementById("video-zone").innerHTML.reload
    console.log('que trae ---->', sessionStorage.getItem("targetPath"));
    console.log('que trae ---->', sessionStorage.getItem("modelPath"));
  }
}
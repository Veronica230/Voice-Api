const getTargetPath = (event) => {
/*   const targetFile = document.getElementById("fileTarget").files[0];
  const reader = new FileReader();
    reader.readAsDataURL(targetFile);
    reader.onloadend = () => {
      sessionStorage.setItem("targetPath", reader.result);
  }
   */
  const value = event.target.value;
  sessionStorage.setItem("targetPath", value);
};

const getModelPath = (event) => {
/*   const modelFile = document.getElementById("fileModel").files[0];
  const reader = new FileReader();
  reader.readAsDataURL(modelFile);
  reader.onloadend = () => {
    sessionStorage.setItem("modelPath", reader.result);
} */

const value = event.target.value;
sessionStorage.setItem("modelPath", value);
};

const getStatus = () => {
  sessionStorage.removeItem("targetPath")
  sessionStorage.removeItem("modelPath")
  if (window.confirm("¿Deseas hacer resetear de los datos?")) {
    sessionStorage.removeItem("targetPath");
    sessionStorage.removeItem("modelPath");
  }
}

const reloadVideoZone = () => {
  if (window.confirm("¿Deseas enviar los datos?")) {
    document.getElementById("video-zone").innerHTML.reload
  }
}
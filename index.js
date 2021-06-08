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
  let targetPath = sessionStorage.getItem("targetPath");
  let modelPath = sessionStorage.getItem("modelPath");
  sessionStorage.removeItem("targetPath")
  sessionStorage.removeItem("modelPath")
  console.log('que valor trae x--->', targetPath);
  console.log('que valor trae y--->', modelPath);
}
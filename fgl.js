let FGLCommPanel = document.getElementById("FGLCommunicator");
let FGLCommSender = document.getElementById("FGLSubmitter");

FGLCommSender.addEventListener('click', event => {
    let CommQuery = document.getElementById("FGLCommunicator");
    let FGLQuery = CommQuery.value;
    CommQuery.value = "";
    console.log(CommQuery);
});

console.log("Truth Loaded!");
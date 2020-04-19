let TruthCommPanel = document.getElementById("TruthComm");
let TruthCommSender = document.getElementById("TruthSubmitter");

TruthCommSender.addEventListener('click', event => {
    let CommQuery = document.getElementById("TruthComm");
    let TruthQuery = CommQuery.value;
    CommQuery.value = "";
    console.log(CommQuery);
});

console.log("Truth Loaded!");
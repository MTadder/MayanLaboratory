const __MayanLab = {
    Version: "projectar",
    Author: "MTadder",
};
class LabCanvas {

};
class Laboratory {
    displayCanvas = undefined;
    displayContext = undefined;

    debug = {
        enabled: true,
        render(mayanContext) {
            if (mayanContext != undefined && this.enabled) {
                let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
                mayanContext.fillStyle = "white";
                mayanContext.font = "22pt monospace";
                mayanContext.fillText(`Mayan Lab v${__MayanLab.Version} - Chrome? (${isChrome})`, 10,10);
            };
        },
    };

    resolveContext() {
        if (this.displayCanvas != undefined) {
            this.displayContext = this.displayCanvas.getContext("2d");
            return true;
        } else {
            console.log("Cannot resolve Context: Canvas is undefined!");
        };
        return false;
    };

    constructor() {};
};

function Initialize(){
    let Lab = new Laboratory();

    Lab.displayCanvas = document.getElementById("MayanCanvas");
    Lab.resolveContext();
    Lab.debug.render();
};
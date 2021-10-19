var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.normal = function(){
        var textArea = document.getElementById("inputTextToSave");
        textArea.style.fontStyle = "normal";
        textArea.style.fontWeight = "unset";
        textArea.style.textDecoration = "none";
    }

    $scope.underline = function(){
        var textArea = document.getElementById("inputTextToSave");
        textArea.style.textDecoration = "underline";
    }

    $scope.bold = function(){
        var textArea = document.getElementById("inputTextToSave");
        textArea.style.fontWeight = "bold";
    }

    $scope.italicise = function(){
        var textArea = document.getElementById("inputTextToSave");
        textArea.style.fontStyle = "italic";
    }

});

function newFile(){
    window.open("http://127.0.0.1:5500/editor.html");
}

function exitFile(){
    window.close();
}

function copytoClipboard(){
    var textArea = document.getElementById("inputTextToSave");
    textArea.select();
    document.execCommand("Copy");
}

function cuttoClipboard(){
    var textArea = document.getElementById("inputTextToSave");
    textArea.select();
    document.execCommand("Cut");
}

function pastetoClipboard(){
    let pasteArea = document.getElementById('inputTextToSave');
    navigator.clipboard.readText()
    .then((text)=>{
        pasteArea.value += text;
    }) 
    
}

function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function openFileAsText()
{   
    var fileToopen = document.getElementById("fileToopen").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileopenedEvent) 
    {
        var textFromFileopened = fileopenedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileopened;
    };
    fileReader.readAsText(fileToopen, "UTF-8");
}
 
function imageClick(url) {
    window.location = url;
}


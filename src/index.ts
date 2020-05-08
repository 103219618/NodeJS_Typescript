let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null) {
    alert("Button not found.");
}

else {
    
    myButton.onclick = function () {
        if(myButton == null) return;
        alert(myButton.value);
    }

}
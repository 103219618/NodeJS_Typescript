
let addButton = document.getElementById("addButton") as HTMLButtonElement | null;
let elements = document.getElementById("elements") as HTMLElement;
let field = document.getElementById("field") as HTMLDataElement;
let clrButton = document.getElementById("clrButton");

if (addButton == null) {
    alert("Button not found.");
}
else {

    addButton.onclick = function () {
        let myNewElement = document.createElement("div");
        let myNewElementText = document.createTextNode(field.value);
        myNewElement.appendChild(myNewElementText);
        elements.appendChild(myNewElement);
        field.value = ""
        myNewElement.style.backgroundColor = "#f7f5f5";
        myNewElement.style.fontSize = "20px";
        myNewElement.style.marginBottom = "10px";
        myNewElement.style.borderRadius = "5px";
        myNewElement.style.height = "40px, auto";
        myNewElement.style.padding = "20px 20px 20px 20px";

        myNewElement.onmouseover = function () {
            myNewElement.style.backgroundColor = "darkgrey";
            myNewElement.style.fontSize = "21px";
        }

        myNewElement.onmouseout = function () {
            myNewElement.style.backgroundColor = "#f7f5f5";
            myNewElement.style.fontSize = "20px";
        }

        myNewElement.onclick = function () {
            elements.style.textDecoration = "line-through";
        }

        if (clrButton == null) {
            alert("Button not found.");
        }
        else {
            clrButton.onclick = function () {
                elements.innerHTML = "";
            }
        }



    }
}

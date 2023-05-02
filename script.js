function openTab(evt, tabName) {
   var i, tabContent, tabs;
   tabContent = document.getElementsByClassName("tab-content");

   for (i = 0; i < tabContent.length; i++) {
       tabContent[i].style.display = "none";
   }

   tabs = document.getElementsByClassName("tab");
   for (i = 0; i < tabs.length; i++) {
       tabs[i].style.backgroundColor = "#3498db";
   }

   evt.currentTarget.style.backgroundColor = "#1e7ab7";
   document.getElementById(tabName).style.display = "block";
}

function convert(base) {
   var input = document.getElementById(base.toLowerCase()).value;
   var result = { binary: "0", decimal: "0", octal: "0", hexadecimal: "0" };

   switch(base) {
       case "Binary":
           result.decimal = parseInt(input, 2).toString(10);
           result.octal = parseInt(input, 2).toString(8);
           result.hexadecimal = parseInt(input, 2).toString(16);
           break;
       case "Decimal":
           result.binary = parseInt(input, 10).toString(2);
           result.octal = parseInt(input, 10).toString(8);
           result.hexadecimal = parseInt(input, 10).toString(16);
           break;
       case "Octal":
           result.binary = parseInt(input, 8).toString(2);
           result.decimal = parseInt(input, 8).toString(10);
           result.hexadecimal = parseInt(input, 8).toString(16);
           break;
       case "Hexadecimal":
           result.binary = parseInt(input, 16).toString(2);
           result.decimal = parseInt(input, 16).toString(10);
           result.octal = parseInt(input, 16).toString(8);
           break;
   }

   document.getElementById(base).querySelector(".result").innerHTML = `
       Binary: ${result.binary} <br>
       Decimal: ${result.decimal} <br>
       Octal: ${result.octal} <br>
       Hexadecimal: ${result.hexadecimal}
   `;
}

Object.defineProperty(window, "console", {
    value: console,
    writable: false,
    configurable: false
});

// Initialize the first tab by default
document.addEventListener("DOMContentLoaded", function() {
   openTab({currentTarget: document.getElementsByClassName("tab")[0]}, "Binary");
});
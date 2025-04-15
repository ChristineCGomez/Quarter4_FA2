function generateTable() {
    let start = parseInt(document.getElementById("startNum").value);
    let end = parseInt(document.getElementById("endNum").value);

    if (startNum> 2 && startNum < 10 && endNum> 2 && endNum < 10) {

        result += "<table>";

        for (let m = 1; m <= startNum; m++) {
            result += "<tr>";
            for (let n = 1; n <= endNum; n++) {
                result += "<td>" + (m * n) + "</td>";
            }
            result += "</tr>";
        }

        result += "</table>";
        document.getElementById("output").innerHTML = result;
        
    } else {

        alert("Please enter numbers between 2 and 10");

    }
    
}

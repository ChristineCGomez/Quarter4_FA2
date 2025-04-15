function generateTable() {
    let start = parseInt(document.getElementById("startNum").value);
    let end = parseInt(document.getElementById("endNum").value);
	let result = "";
	  
    if (start> 2 && start < 10 && end> 2 && end < 10) {

        result += "<table>";

        for (let m = 1; m <= start; m++) {
            result += "<tr>";
            for (let n = 1; n <= end; n++) {
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

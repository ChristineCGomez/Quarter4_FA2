function generateTable() {
    let start = parseInt(document.getElementById("startNum").value);
    let end = parseInt(document.getElementById("endNum").value);

    if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    let output = "<table border='1' cellpadding='10'>";
    for (let i = 1; i <= 10; i++) {
        output += "<tr>";
        for (let j = start; j <= end; j++) {
            output += `<td>${j} x ${i} = ${j * i}</td>`;
        }
        output += "</tr>";
    }
    output += "</table>";
    document.getElementById("output").innerHTML = output;
}
// import the data from data.js
const tableData = data;
// Reference the HTML table using d3. 
var tbody = d3.select("tbody");
//Build a table and clear the data using tbody.html
function buildTable(data) {
    //First, clear the data using tbody.html
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)) => {
        let row = tbody.append("tr") //tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => 
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
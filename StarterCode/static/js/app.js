//Call json file
d3.json("samples.json").then((importedData) => {
  // console.log(importedData);
  var data = importedData;
  console.log(data);
  console.log(data.names);
  console.log(data.samples[0]);

  //create drop down menu from names
  
  //Create a varible with the names
  //https://javascript.info/array-methods#iterate-foreach
  var names = data.names

  var dropMenu = d3.select("#selDataset")

  //Add the Options to the DropDownList.
  names.forEach((item, index,) => {
    console.log(`${item} is at index ${index}`);
    d3.select("#selDataset").selectAll("option")
      .data(names)
      .enter()
      .append("option")
      .text(item)
      .attr("value", index);

  });
   
  // On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", optionChanged);

// Function called by DOM changes
function optionChanged() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  console.log(`You pick ${dataset}`)};
  
  //Go to bar function
  var graphData = data[parseInt(dataset)];
  console.log(graphData);
  // indexSel = parseInt(dataset)
  // //Select data to plot
  // console.log(data.samples[indexSel]);
  
});

//Function to make a bargraph
function bargraph(dataset){
 
}

// Promise Pending
//const dataPromise = d3.json(address);
//console.log("Data Promise: ", dataPromise);

// /**
//  * Helper function to select stock data
//  * Returns an array of values
//  * @param {array} rows
//  * @param {integer} index
//  * index 0 - metadata
//  * index 1 - names
//  * index 2 - samples
 
//  */
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function getData() {

//   var queryUrl = `samples.json`;
//   d3.json(queryUrl).then(function(data) {
//     var metadata = unpack(data.dataset.data, 0);
//     var names = unpack(data.dataset.data, 1);
//     var samples = unpack(data.dataset.data, 2);
//     console.log(names)
//     console.log(metadata)
//     console.log(samples)
//     //Fill selection section
//     //selectId(names)
    
//     //buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume);
//   });
// }

// function selectId(names){
//   //Select section of the html where the selection panel is
//   var selId = d3.select("#selDataset")

//   // create the drop down menu of cities
// 	var selector = d3.select("select")
//   .selectAll("option")
//   .data(names)
//   .enter().append("option")
//   .text(function(d) { return d.names; })
//   .attr("value", function (d, i) {
//     return i;
//   });
// }
// function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
//   var table = d3.select("#summary-table");
//   var tbody = table.select("tbody");
//   var trow;
//   for (var i = 0; i < 12; i++) {
//     trow = tbody.append("tr");
//     trow.append("td").text(dates[i]);
//     trow.append("td").text(openPrices[i]);
//     trow.append("td").text(highPrices[i]);
//     trow.append("td").text(lowPrices[i]);
//     trow.append("td").text(closingPrices[i]);
//     trow.append("td").text(volume[i]);
//   }
// }

// function buildPlot() {
//   var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2017-01-01&end_date=2018-11-22&api_key=${apiKey}`;

//   d3.json(url).then(function(data) {

//     // Grab values from the response json object to build the plots
//     var name = data.dataset.name;
//     var stock = data.dataset.dataset_code;
//     var startDate = data.dataset.start_date;
//     var endDate = data.dataset.end_date;
//     var dates = unpack(data.dataset.data, 0);
//     var openingPrices = unpack(data.dataset.data, 1);
//     var highPrices = unpack(data.dataset.data, 2);
//     var lowPrices = unpack(data.dataset.data, 3);
//     var closingPrices = unpack(data.dataset.data, 4);

//     getMonthlyData();

//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: name,
//       x: dates,
//       y: closingPrices,
//       line: {
//         color: "#17BECF"
//       }
//     };

//     // Candlestick Trace
//     var trace2 = {
//       type: "candlestick",
//       x: dates,
//       high: highPrices,
//       low: lowPrices,
//       open: openingPrices,
//       close: closingPrices
//     };

//     var data = [trace1, trace2];

//     var layout = {
//       title: `${stock} closing prices`,
//       xaxis: {
//         range: [startDate, endDate],
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       },
//       showlegend: false
//     };

//     Plotly.newPlot("plot", data, layout);

//  });
//}

//buildPlot();

//Let's import data
//Call json file in order to know its contents
d3.json("samples.json").then((importedData) => {
  // console.log(importedData);
  var data = importedData;
  console.log(data);
});
//End of knowing the data

//Let's create the selection menu
d3.json("samples.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
    var names = data.names;
    console.log(names);

    //Lets populate de selection  test subject Id
    var dropMenu = d3.select("#selDataset");

    names.forEach((name) => {
        dropMenu.append("option")
            .text(name)
            .property("value",name);
        
    });  
});
//end of populating the menu

//Lets create the default page
function init() {
    //Call data
    d3.json("samples.json").then((importedData) => {
        // console.log(importedData);
        var data = importedData;
        //extract the first sample name
        var sampleName = data.names[0];
        console.log(sampleName);

        //Lets call the function to build the bar graph
        barChart(sampleName);

        //Lets call the function to build the bubble chart
        bubbleChart(sampleName);

        //Lets call the info chart function
        infoChart(sampleName);
    
          
    });
  }
//end of init function


///////////////////////////////////////////
//Generate a funtion that creates a bar graph
function barChart(sample){
    console.log("here goes the bar code")
    //Call data
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        
        //Select data to make the graphs
        var graphData = data.samples;
        console.log("This is the data to make the barchar");
        console.log(graphData);

        //Filter data for the selected observation
        var filteredData = graphData.filter(oneSample =>
            oneSample.id === sample);
        console.log("This is for one subject");
        console.log(filteredData);
        //Extract array from filtered Data
        var filteredArray = filteredData[0];
        console.log(filteredArray);
        
        //Create arrays for each data that is goingo to be uses
              
        var sampleValues = filteredArray.sample_values;
        var otuIds = filteredArray.otu_ids;
        var otuLabels = filteredArray.otu_labels;
        console.log(sampleValues);
        console.log(otuLabels);
        
        //Create a new object
        var observations = []

        for (var i = 0; i < sampleValues.length; i++) {
             var samples = sampleValues[i];
             var ids = "OTU" + otuIds[i];
             var labels = otuLabels[i];
             var temp ={sv:samples, idOtu:ids, labelOtu:labels};
             observations.push(temp);
           };
         console.log(observations)  
        
        //Lets order (sort) data by sampleValues
        var sortedByvalues = observations.sort((a, b) => b.sv - a.sv);
        console.log(sortedByvalues)
        // Slice the first 10 objects for plotting
        slicedData = sortedByvalues.slice(0, 10);
        // Reverse the array to accommodate Plotly's defaults
        reversedData = slicedData.reverse();
        // Trace1 for the sample values
        var trace1 = {
            x: reversedData.map(object => object.sv),
            y: reversedData.map(object => object.idOtu),
            text: reversedData.map(object => object.labelOtu),
            type: "bar",
            orientation: "h"
        };

        // data
        var data = [trace1];

        // Apply the group bar mode to the layout
        var layout = {
         title: "Top 10 OTUs in selected individual",
         margin: {
             l: 100,
             r: 100,
             t: 100,
             b: 100
         }
        };

        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("bar", data, layout);
        
            
 //end of rendering data         
    });
}
//end of bar graph function

///////////////////////////////////////////////////////
//create a function to do the bubble chart
function bubbleChart(sample){
    console.log("here goes the bubble code")
    //Call data
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        
        //Select data to make the graphs
        var graphData = data.samples;
        console.log("This is the data to make the bubble graph");
        console.log(graphData);

        //Filter data for the selected observation
        var filteredData = graphData.filter(oneSample =>
            oneSample.id === sample);
        console.log("This is for one subject");
        console.log(filteredData);
        //Extract array from filtered Data
        var filteredArray = filteredData[0];
        console.log(filteredArray);
        
        //Create arrays for each data that is goingo to be uses
              
        var sampleValues = filteredArray.sample_values;
        var otuIds = filteredArray.otu_ids;
        var otuLabels = filteredArray.otu_labels;
        console.log(sampleValues);
        console.log(otuIds);
        
        var trace1 = {
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
                color: otuIds,
                colorscale: 'Jet',
              //color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
              size: sampleValues
            }
          };
          
          var dataBubble = [trace1];
          
          var layout = {
            title: 'Bubble Chart Hover Text',
            showlegend: false,
            height: 600,
            width: 1400
          };
          
          Plotly.newPlot('bubble', dataBubble, layout);
          
           

    //end of rendering data         
    });
};
//end of function bubbleChart

//////////////////////////////////////////////////////
//Create a function to do the demographic info presentation
function infoChart(sample){
    console.log("Here goes the cide to cretae demo info");
};

//lets catch a change or selection
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", optionChanged);

// Function called by DOM changes
function optionChanged() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  console.log("You choose");
  console.log(dataset);
}

init();


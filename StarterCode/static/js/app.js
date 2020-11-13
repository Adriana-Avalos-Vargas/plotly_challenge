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
    var names = data.names
    console.log(names)

    //Lets populate de selection  test subject Id
    var dropMenu = d3.select("#selDataset");

    names.forEach((name) => {
        dropMenu.append("option")
            .text(name)
            .property("value",name);
        
    });  
});

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
  console.log(dataset)
}



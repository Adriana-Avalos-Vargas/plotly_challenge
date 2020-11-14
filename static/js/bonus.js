//Create a function to make the gauge chart
function gaugeChart(sample){
    console.log("Si la detectó :)");

    //call data
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        //console.log(importedData);
        //Select data to make the graphs
        var graphData = data.metadata;
        //console.log("This is the data to make the gauge graph");
        //console.log(graphData);
        
        //Convert to an integer the sample id
        var filter = parseInt(sample)
        //Filter data for the selected observation
        var filteredData = graphData.filter(oneSample =>
          oneSample.id === filter);
        //console.log("This is for one subject");
        //console.log(filteredData);
        
        //Extract array from filtered Data
        var filteredArray = filteredData[0];
        //console.log(filteredArray);
        
        //Extract variable wfreq (scrubs per week)
        wFreq = filteredArray.wfreq;
        console.log("This is the subject scrubs per week");
        //console.log(wFreq);

        //In case there is no such info it is necessary to change the value of wfreq in order to avoid math inconsistencies
        if(wFreq === null){
            wFreq = 0;
          };

        //To make the gaughe chart it is necessary to translate cartesian coordinates to polar coordinates, starting by wFreq
        //Since it is 1/2 circle iy goes from 0°-180°. And they are dividen into 10 sections. 
        //Therefore, any wFreq in degrees would be 
        var wFreqd = parseInt(wFreq) * (180/10);
        console.log(wFreqd);

        //Note the zero degree is located at the right so we need the suplementary angle of wFreqd (180°-wFreq)
        let wFreqSup = 180 - wFreqd;
        let radius = .5;
        let radians = wFreqSup * Math.PI / 180;
        let x = radius * Math.cos(radians);
        let y = radius * Math.sin(radians);
        let mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
        let path = mainPath.concat(pathX, space, pathY, pathEnd);
        let trace = [{ type: 'scatter',
        x: [0], y:[0],
        marker: {size: 50, color:'black'},
        showlegend: false,
        name: 'Wash frequency',
        text: wFreq,
        hoverinfo: 'text+name'},
            { values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
            rotation: 90,
            text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''],
            textinfo: 'text',
            textposition:'inside',
            textfont:{
            size : 16,
            },
            marker: {colors: ["#ff0000","#ff4000", "#ffbf00", "#bfff00","#00ffff","#0040ff","#8000ff","#ff00bf","#ff0040","white"]},
            labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '2-1', '0-1',''],
            hoverinfo: 'text',
            hole: .5,
            type: 'pie',
            showlegend: false
        }];
        let layout = {
            shapes:[{
                type: 'path',
                path: path,
                fillcolor: 'black',
                line: {
                color: 'black'
                }
            }],
            title: '<b>Belly Button Washing Frequency</b> <br> <b>Scrub Per Week</b>',
            height: 550,
            width: 550,
            xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
            yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        };
        Plotly.newPlot('gauge', trace, layout, {responsive: true});
        



        //End of rendering data
        });
} ; 
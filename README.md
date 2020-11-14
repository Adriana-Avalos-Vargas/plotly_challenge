# plotly_challenge

 The belly button is one of the habitats closest to us, and yet it remains relatively unexplored. In January 2011, the Departmen of Applied Ecology in the NC State launched Belly Button Biodiversity to investigate the microbes inhabiting our navels and the factors that might influence the microscopic life calling this protected, moist patch of skin home. In addition to inspiring scientific curiosity, Belly Button Biodiversity inspired conversations about the beneficial roles microbes play in our daily lives.

The purpose in this challenge is to design a dashboard where anybody can see which are the most common mycrobes that live in the belly button. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The dasboard is composed by five elements. The first one is a dropdown selection meny where is shown all the samples Id taken in the study. The idea is that the user can choose any id, and explore and analyze the data on the remaining four elements.

![Screenshot1](images\Imagen1.png)

The second dashboard element is a king of table that shows representative demographic data of the participants selected through the id.

![Screenshot2](images\Imagen2.png)

The other three elements are graphs tan will show the the top 10 OTUs found in that individual, also a bubble graph that will show all the microbes (OTU's) found on the individual and the size of the bubble will be related with its concentration. Finally, there is a gauge chart that will show the weekly washing frequency of the individual.

![Screenshot3](images\Imagen3.png)

In order to know more abput th study or download the base it is recomended to visit the web page [Belly Button Biodiversity](http://robdunnlab.com/projects/belly-button-biodiversity/)

## Repository contents

The contents of the repository are five principal elements, listed below:

1. This README.md file

2. A samples.json file that has the data base that will generate the dashboard.

3. The index.html, which is the base file to render the web page.

4. A static folder that contanint two js files

5. And a data folder.

The static folder has two files one that is the app.js that has the code to render the selection menu, the demographic data, the bar chart and the bubble chart. The file bonus.js contains a function to do the gauge chart.

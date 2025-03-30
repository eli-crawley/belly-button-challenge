// Build the metadata panel
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function buildMetadata(sample) {
  d3.json(url).then((data) => {

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const sampleMetadata = metadata.filter(s => s.id === parseInt(sample))[0];
    console.log(sampleMetadata)

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");
    console.log(panel)

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(sampleMetadata).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json(url).then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const sampleData = samples.filter(s => s.id === sample)[0];
    console.log(sampleData)

    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = sampleData.otu_ids;
    const otu_labels = sampleData.otu_labels;
    const sample_values = sampleData.sample_values;

    // Build a Bubble Chart
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth',
      }
    }];

    const bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {title: 'OTU ID'},
      yaxis: {title: 'Number of Bacteria'},
      showlegend: false
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`);
    console.log(yticks)

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barData = [{
      type:'bar',
      x: sample_values.slice(0,10).reverse(),
      y: yticks.reverse(),
      text: otu_labels.slice(0,10).reverse(),
      orientation: 'h'
    }];

    const barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: {title:'Number of Bacteria'},
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json(url).then((data) => {

    // Get the names field
    const sampleNames = data.names;
    console.log(sampleNames)

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");
    console.log(dropdown)

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
      sampleNames.forEach((samplename) => {
        dropdown.append("option")
        .text(samplename)
        .attr("value", samplename);
      });

    // Get the first sample from the list
      const firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
      buildCharts(firstSample);
      buildMetadata(firstSample);
    
    //Set up event listener for when new option is selected
      dropdown.on("change", function() {
        const newSample = d3.select(this).property('value');
    // Call the function to update the charts and metadata
        optionChanged(newSample);
      })
  });
}

// Function for event listener
function optionChanged(newSample) {
  
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

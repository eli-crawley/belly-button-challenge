# Belly-Button Microbial Data Dashboard

This dashboard allows users to explore a dataset of belly-button microbial samples collected from different individuals. The dataset contains details about the microbiome, including various microbial species and sample metadata. This dashboard provides an interactive interface for visualizing and analyzing the data.

## Features
* **Dropdown Menu:** Select a sample ID from a dropdown list to view the associated microbial data.

* **Bar Chart:** A horizontal bar chart showing the top 10 Operational Taxonomic Units (OTUs) for the selected sample.

* **Bubble Chart:** A bubble chart displaying the abundance of OTUs for the selected sample.

* **Metadata Panel:** Displays various metadata details about the selected sample, including ethnicity, gender, age, location, and more.

## Installation

### Prerequisites
 * **Web Browser:** The dashboard runs in any modern web browser (Google Chrome, Mozilla Firefox, Safari, etc.).

* **Local Web Server (Optional):** If you prefer to run the dashboard locally, you can use any local web server (e.g., Python’s http.server or live-server).

### Setup
1. Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/microbial-dashboard.git
cd microbial-dashboard
```

2. Open the index.html file in your preferred browser. Or, if you want to serve it locally, run a local server. For example, using Python’s HTTP server:

```bash
python3 -m http.server
```
Then, navigate to http://localhost:8000 in your browser.

## Usage
1. Select a sample:
    * Use the dropdown menu on the left side of the dashboard to select a sample ID from the list of available sample IDs.

2. View the Charts:
    * The dashboard will automatically update the bar chart and bubble chart based on the selected sample.

3. Explore the Metadata:
    * The metadata panel will display additional information related to the selected sample (e.g., ethnicity, gender, age, location).

## How it Works
1. **Data:** The dashboard uses data from a JSON file hosted at https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json. The dataset includes both sample data (e.g., OTUs) and metadata (e.g., age, ethnicity, location).

2. **Visualization:**

    * **Bar Chart:** Displays the top 10 OTUs in the selected sample. The OTUs are represented on the y-axis, and their abundances are shown on the x-axis.

    * **Bubble Chart:** Displays the abundance of OTUs for the selected sample. The size of each bubble represents the abundance, and the color represents the OTU ID.

3. **Interactivity:**

    * The sample data and metadata are dynamically updated when a user selects a new sample from the dropdown menu. The charts and metadata panel are updated via D3.js and Plotly.

4. **Functions:**

    * **init():** Initializes the dashboard by loading the sample names into the dropdown and displaying the first sample’s data.

    * **optionChanged(newSample):** Updates the charts and metadata panel when a new sample is selected.

    * **buildCharts(sample):** Builds the bubble and bar charts for the selected sample.

    * **buildMetadata(sample):** Builds the metadata panel for the selected sample.

## Example Screenshots

### Bar Chart
![Bar Chart](images\barchart.jpg)

### Bubble Chart
![Bubble Chart](images\bubblechart.jpg)

### Metadata Panel
![Metadata Panel](images\metadata.jpg)

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
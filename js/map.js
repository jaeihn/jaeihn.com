// set the dimensions and margins of the graph
var margin = {top: 0, right: 10, bottom: 0, left: 100},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// The svg
var svg = d3.select("svg")
 .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
// create a tooltip
    var tooltip = d3.select("#tooltip")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("position", "absolute")
 

      
// Map and projection
//var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(90, 60)
  .center([0,50])
  .translate([width / 2 - margin.left, height / 2]);

// Data and color scale
var data = d3.map();
var domain = [2, 1, 0]
var labels = ["Resided", "Travelled", "Unexplored"]
var range = ["#F04332","#FBAD18","#dddddd"]

var colorScale = d3.scaleOrdinal()
  .domain(domain)
  .range(range);


var promises = []
promises.push(d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"))
promises.push(d3.csv("https://raw.githubusercontent.com/jaeihn/jaeihn.com/main/data/history.csv", function(d) { data.set(d.code, +d.status); }))

myDataPromises = Promise.all(promises).then(function(topo) {
	
	var topo = topo[0]

  	// Draw the map
  	svg.append("g")
    	.selectAll("path")
    	
    	.data(topo.features)
    	.enter()
    	.append("path")
    	.attr("class", "topo")
      	// draw each country
      	.attr("d", d3.geoPath()
        	.projection(projection)
      	)
      	// set the color of each country
      	.attr("fill", function (d) {
        	d.total = data.get(d.id) || 0;
        	return colorScale(d.total);
      	})
      	.style("opacity", .7)
      
    // legend
    var legend_x = width - 120
    var legend_y = 0
    svg.append("g")
  		.attr("class", "legendQuant")
  		.attr("transform", "translate(" + legend_x + "," + legend_y+")");

	var legend = d3.legendColor()
    	.labels(labels)
    	.scale(colorScale)
    
    
     svg.select(".legendQuant")
  		.call(legend);
  
    })
    
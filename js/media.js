var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var width = 200,
    height = 100,
    margin = 30;

var svgs = d3.select('#area1')
    .selectAll('svg')
    .data([{text:'thing1'}, {text:'thing2'}])
    .enter()
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svgs.append("text")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .text(function(d) {return d.text});var svg = d3.select("svg"),
	margin = 200,
	width = svg.attr("width") - margin,
	height = svg.attr("height") - margin;


var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
	yScale = d3.scaleLinear().range ([height, 0]);

var g = svg.append("g")
		   .attr("transform", "translate(" + 100 + "," + 100 + ")");

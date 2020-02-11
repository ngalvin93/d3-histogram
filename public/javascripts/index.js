console.log('connected!!!!')

// const data = [4, 8, 15, 16, 23, 42]

// const width = 420,
//     barHeight = 20

// // domain is the min and max values in data
// // range is the desired width of the chart
// const scale = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, width])

// const chart = d3.select('.chart')
//     .attr('width', width)
//     .attr('height', barHeight * data.length)

// const bar = chart.selectAll('g')
//     .data(data)
// .enter().append('g')
//     .attr('transform', (d, i) => 'translate(0,' + i * barHeight + ')')

// bar.append('rect')
//     .attr('width', scale)
//     .attr('height', barHeight - 1)

// bar.append('text')
//     .attr('x', d => scale(d) - 3)
//     .attr('y', barHeight / 2)
//     .attr('dy', '.35em')
//     .text(d => d) 

// d3.select('.chart')
//         .selectAll('div')
//         .data(data)
//     .enter().append('div')
//         .style('width', d => scale(d) + 'px')
//         .text(d => d)

// var x = d3.scaleLinear()
// .domain([0, 1000])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
// .range([0, width]);
// svg.append("g")
// .attr("transform", "translate(0," + height + ")")
// .call(d3.axisBottom(x));

// d3.csv('../MOCK_DATA.csv')
//     .then(data => {
//         const age = data.map(name => parseInt(name.age))
//         const histogram = d3.histogram()
//             .value(d => d.age)
//             .domain(x.domain())
//             .thresholds(x.ticks(10))
            
//         console.log(histogram)
//     })

// const x = d3.scaleLinear()
//     .domain([0, 100]) // min and the max of the data: 0 to 100 if percentages
//     .range([0, 400]) // the corresponding value I want in Pixel

// const circle = d3.select("#dataviz_area")
// circle.append("circle")
//   .attr("cx", 0).attr("cy", 100).attr("r", 40).style("fill", "blue");
// circle.append("circle")
//   .attr("cx", x(25)).attr("cy", 100).attr("r", 40).style("fill", "red");
// circle.append("circle")
//   .attr("cx", x(75)).attr("cy", 100).attr("r", 40).style("fill", "green");

// circle.call(d3.axisBottom(x))

// console.log(x(0))
// console.log(x(25))
// console.log(x(50))
// console.log(x(75))
// console.log(x(100))

var margin = { // this is the margin around the graph
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
},
  width = 600 - margin.left - margin.right, // actual pixel width of graph with margins
  height = 600 - margin.top - margin.bottom; // actual pixel height of graph with margins

// append the svg object to the body of the page
var sVg = d3.select("#Area")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  // translate this svg element to leave some margin.
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create data
const data = [ {x:10, y:20}, {x:40, y:90}, {x:80, y:50} ]

// X scale and Axis
var x = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, width]);       // This is the corresponding value I want in Pixel
sVg
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// X scale and Axis
var y = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([height, 0]);       // This is the corresponding value I want in Pixel
sVg
  .append('g')
  .call(d3.axisLeft(y));

sVg
.selectAll("whatever")
.data(data)
.enter()
.append("circle")
  .attr("cx", function(d){ return x(d.x) })
  .attr("cy", function(d){ return y(d.y) })
  .attr("r", 4)


const test = d3.select('#test')
  test.append('svg') // append a svg
    .attr('width', 600)
    .attr('height', 200)
    .style('background', 'red')
console.log(test)

// const x = d3.scaleLinear()
//   .domain([0,100])
//   .range([0,100])
// test
//   .append('g')
//   .attr('transform', 'translate(0,100)')
//   .call(d3.axisBottom(x))


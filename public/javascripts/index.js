console.log('connected!')

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
var x = d3.scaleLinear()
.domain([0, 1000])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
.range([0, width]);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

d3.csv('../MOCK_DATA.csv')
    .then(data => {
        const age = data.map(name => parseInt(name.age))
        const histogram = d3.histogram()
            .value(d => d.age)
            .domain(x.domain())
            .thresholds(x.ticks(10))
            
        console.log(histogram)
    })
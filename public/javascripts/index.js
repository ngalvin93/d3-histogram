console.log('connected!!!')

var data = [30, 86, 168, 281, 303, 365]

d3.select('.greeting').style('color','red')
    .text('using the text method')

d3.select(".svg")
.selectAll("div")
.data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d * 2 + "px"; })
    .text(function(d) { return '$ ' + d; });
(function () {
    const name = 'chartPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'chart'
                    }
                },
                methods: {
                    pieGraph: function (data, target, option) {
                        let w = option.pieSize, h = option.pieSize;

                        let dataKeyArr = [];
                        let dataValueArr = [];

                        data.forEach(function(el, idx){
                            dataKeyArr.push(el.category);
                            dataValueArr.push(el.cnt);

                        })

                        let dataName = dataKeyArr;
                        let graphData = dataValueArr;
                        let colorData = option.color;
                        let pie = d3.pie();
                        let arc = d3.arc().innerRadius(option.pieSize / 2).outerRadius(0);

                        let svg = d3.select(target)
                            .append("svg")
                            .attr("width", w)
                            .attr("height", h)
                            .attr("id", "graphWrap");

                        let g = svg.selectAll(".pie")
                            .data(pie(graphData))
                            .enter()
                            .append("g")
                            .attr("class", "pie")
                            .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

                        g.append("path")
                            .style("fill", function (d, i) {
                                return colorData[i];
                            })
                            .transition()
                            .duration(400)
                            // .delay(function (d, i) {
                            //     return i * 400;
                            // })
                            .attrTween("d", function (d, i) {
                                let interpolate = d3.interpolate(
                                    { startAngle: d.startAngle, endAngle: d.startAngle },
                                    { startAngle: d.startAngle, endAngle: d.endAngle }
                                );
                                return function (t) {
                                    return arc(interpolate(t));
                                }
                            });

                        g.append("text")
                            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                            .attr("dy", ".35em")
                            .style("text-anchor", "middle")
                        // .text(function(d, i) {
                        //     return  d.endAngle-d.startAngle > 0.2 ?
                        //             dataName[i] + " (" + Math.round(1000*(d.endAngle-d.startAngle)/(Math.PI*2))/10 + "%)" : ""
                        // });

                        // svg.append("text")
                        //     .attr("class", "total")
                        //     .attr("transform", "translate("+(w/2-35)+", "+(h/2+5)+")")
                        //     .text(" Total:" + d3.sum(graphData));




                    },
                    pie_totalBook: function (data, graphTarget, listTarget, option) {
                        let t = this;
                        let pieSize = $(graphTarget).width() < $(graphTarget).height() ? $(graphTarget).width() : $(graphTarget).height();
                        t.pieGraph(data, graphTarget, {
                            pieSize: pieSize,
                            color: option.color
                        });

                        data.forEach(function(el, idx){
                            let template = '<div><span class="w10 h10 inline-block mg-r5" style="background:' + option.color[idx] + ';"></span><span>' + el.category + '</span></div>';
                            $(listTarget).append(template);
                        })
                    },
                    pie_totalRentBook: function (data, graphTarget, listTarget, option) {
                        let t = this;
                        let pieSize = $(graphTarget).width() < $(graphTarget).height() ? $(graphTarget).width() : $(graphTarget).height();
                        t.pieGraph(data, graphTarget, {
                            pieSize: pieSize,
                            color: option.color
                        });

                        data.forEach(function(el, idx){
                            let template = '<div><span class="w10 h10 inline-block mg-r5" style="background:' + option.color[idx] + ';"></span><span>' + el.category + '</span></div>';
                            $(listTarget).append(template);
                        })
                    }

                },
                created: function () {
                    let t = this;
                },
                mounted: function () {
                    let t = this;
                    let data1 = [
                        {category: '총류', cnt: 233},
                        {category: '철학', cnt: 33},
                        {category: '종교', cnt: 115},
                        {category: '사회과학', cnt: 1242},
                        {category: '어학', cnt: 56},
                        {category: '순수과학', cnt: 2364},
                        {category: '기술과학', cnt: 13},
                        {category: '예술', cnt: 534},
                        {category: '문학', cnt: 698},
                        {category: '역사', cnt: 4000}
                    ];
                    let data2 = [
                        {category: '총류', cnt: 2},
                        {category: '종교', cnt: 2},
                        {category: '어학', cnt: 2},
                        {category: '기술과학', cnt: 2},
                        {category: '예술', cnt: 2},
                        {category: '역사', cnt: 2}
                    ];

                    let sotableData1 = data1.sort(function(a, b){
                        return a.cnt < b.cnt ? 1 : -1;
                    })
                    let sotableData2 = data2.sort(function(a, b){
                        return a.cnt < b.cnt ? 1 : -1;
                    })

                    let = color12 = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'];
                    let = color10 = [
                        '#1a535c',
                        '#4ecdc4',
                        '#f7fff7',
                        '#ff6b6b',
                        '#ffe66d',
                        '#f72585',
                        '#7209b7',
                        '#3a0ca3',
                        '#4361ee',
                        '#4cc9f0'
                    ];
                    
                    t.pie_totalBook(sotableData1, '#pieChart_totalBook', '#list_totalBook', {color: color12});
                    t.pie_totalRentBook(sotableData2, '#pieChart_totalRentBook', '#list_totalRentBook', {color: color10});
                }
            });
        });
    });
})();
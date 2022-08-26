var myChart = echarts.init(document.getElementById('radarchart'));

function initInterest() {
    var data=[
        {
            value: [8.29, 5.94, 4.33, 3.61, 3.44, 3.27],
            name: '按照观看次数',
            lineStyle: {
                normal: {
                    color: '#46daff'
                }
            },
            itemStyle: {
                normal: {
                    color: "#46daff",
                }
            }
        }, {
            value: [9.52, 9.26, 9.37, 9.15, 9.05, 9.32],
            name: '按照评分均分',
            lineStyle: {
                normal: {
                    color: 'orange'
                }
            },
            itemStyle: {
                normal: {
                    color: 'orange',
                }
            }
        }
    ];
    var option = {
        backgroundColor: 'dark blue',
        title: {
            text: '',
            subtext: '',
            top: 10,
            left: 10
        },
        legend:{
            data:["按照观看次数","按照评分均分"],
            top:200,
            right:500,
            orient:"vertical",
            textStyle:{
                color:"white"
            }
        },
        tooltip: {
            show: true,
            trigger: "item"
        },
        radar: {
            center: ["50%", "50%"],//偏移位置
            radius: "60%",
            startAngle: 40, // 起始角度
            splitNumber: 4,
            shape: "circle",
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize:30
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 20,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                   color: "rgba(255, 255, 255, 0.5)"
                }
            },
            indicator: [
                { text: '剧情', max: 10},
                { text: '喜剧', max: 10},
                { text: '爱情', max: 10},
                { text: '动作', max: 10},
                { text: '惊悚', max: 10},
                { text: '犯罪', max: 10}
            ]
        },
        series: [{
            name: '学生兴趣爱好分布',
            type: 'radar',
            data: data,

        }]
    };

    myChart.setOption(option);
}

initInterest();
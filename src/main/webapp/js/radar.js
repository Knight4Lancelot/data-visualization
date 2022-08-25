var myChart = echarts.init(document.getElementById('radarchart'));

function initInterest() {
    var data=[
        {
            value: [4, 7, 2, 3, 5, 7],
            name: '男生',

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
        },
        {
            value: [7, 2, 6, 5, 4, 2],
            name: '女生',
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
            data:["男生","女生"],
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
                { text: '足球', max: 10},
                { text: '篮球', max: 10},
                { text: '唱歌', max: 10},
                { text: '跳舞', max: 10},
                { text: '钢琴', max: 10},
                { text: '书法', max: 10}
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
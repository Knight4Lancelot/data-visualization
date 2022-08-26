var myChart = echarts.init(document.getElementById('pictogram'));

initEmployment();
function initEmployment(){
    var data=[{
        value: 5000,
        symbolRepeat: true,
        symbolSize: [20, 50],
    }, {
        value: 4500,
        symbolRepeat: true,
        symbolSize: [20, 50],
    },{
        value: 4800,
        symbolRepeat: true,
        symbolSize: [20, 50],
    },{
        value: 2800,
        symbolRepeat: true,
        symbolSize: [20, 50],
    },{
        value: 4600,
        symbolRepeat: true,
        symbolSize: [20, 50],
    },{
        value: 4300,
        symbolRepeat: true,
        symbolSize: [20, 50],
    }];
    var option = {
        tooltip:{},
        grid:{
            top:50,
            left:50,
            bottom:500,
            right:800
        },
        legend: {
            data: ['象形柱图']
        },
        xAxis: {
            data: ['北京', '深圳', '上海', '沈阳', '广州', '杭州'],
            //axisLine:{lineStyle:{color:"#46516a"}}
        },
        yAxis: {
            splitLine: {show: false},
            //axisLine:{lineStyle:{color:"#46516a"}}
        },
        //animationEasing: 'elasticOut',
        textStyle: {
            fontSize: 20, //坐标轴名称的大小
            color: 'black', // 坐标轴名称的颜色
        },
        series: [{
            type: 'pictorialBar',
            symbol: 'path://M554.666667 810.666667v42.666666h-85.333334v-42.666666c-93.866667 0-170.666667-76.8-170.666666-170.666667h85.333333c0 46.933333 38.4 85.333333 85.333333 85.333333v-170.666666c-93.866667 0-170.666667-76.8-170.666666-170.666667s76.8-170.666667 170.666666-170.666667V170.666667h85.333334v42.666666c93.866667 0 170.666667 76.8 170.666666 170.666667h-85.333333c0-46.933333-38.4-85.333333-85.333333-85.333333v170.666666h17.066666c29.866667 0 68.266667 17.066667 98.133334 42.666667 34.133333 29.866667 59.733333 76.8 59.733333 128-4.266667 93.866667-81.066667 170.666667-174.933333 170.666667z m0-85.333334c46.933333 0 85.333333-38.4 85.333333-85.333333s-38.4-85.333333-85.333333-85.333333v170.666666zM469.333333 298.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333V298.666667z',
            itemStyle:{
                color:"#46daff"
            },
            data: data
        }]
    };

    myChart.setOption(option);
}

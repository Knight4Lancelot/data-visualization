var myChart = echarts.init(document.getElementById('barchart'));
var rankList = document.getElementsByClassName('rank-item');
// 指定图表的配置项和数据
initGrades();




function initGrades(){
    for (let i = 0; i < rankList.length; i++) {
        rankList[i].style.top = String(80+35*i) + 'px';
    }
    var option = {
        grid: {
            left: '50',
            top: '30',
            right: '0',
           // bottom: '10',
            //containLabel: true
        },
        legend: {
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [
                "21", 
                "20", "19", "18", "17", "16",
                "15", "14", "13", "12", "11",
                "10", "9", "8", "7", "6",
                "5", "4", "3", "2", "1"
            ],
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
            },
            axisLine: { //---坐标轴 轴线
                show: true, //---是否显示
                lineStyle: {
                    //color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'dotted',
                },
            },
            axisLabel: {//X轴文字
                textStyle: {
                    fontSize: 20,
                    //color: '#fff'
                },
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {//分割线
                show: true,
                lineStyle: {
                    //color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'dotted'
                }
            },
            axisLabel: {//Y轴刻度值
                formatter: '{value}',
                textStyle: {
                    fontSize: 20,
                    //color: '#fff'
                },
            },
            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示
            },
        },
        series: [{
            name: '评分',
            type: 'bar',
            stack: 'you',
            data: [
                0,0,0,0,0,0,0,
                3.6,
                4.5,
                4.4,
                6.5,
                6.1,
                7.1,
                6.4,
                7.3,
                7.5,
                7.1,
                6.9,
                6.8,
                8.4,
                6.6
            ],
            barWidth: 30,
            //barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
        }, {
            name: '首映',
            type: 'bar',
            stack: 'you',
            data: [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           barWidth: 30, //柱图宽度
           // barGap: 0.5,
        }, {
            name: '加权结果',
            type: 'bar',
            stack: 'you',
            data: [
                2.001,2.003,2.004,2.006,2.022,2.030,2.031,
                3.711,4.503,4.991,6.636,6.917,7.122,7.395,
                7.433,7.582,8.243,8.974,10.397,11.1110,14.084],
           barWidth: 30, //柱图宽度
           // barGap: 0.5,
        }]
    };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

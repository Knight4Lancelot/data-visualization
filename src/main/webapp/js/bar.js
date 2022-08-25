var myChart = echarts.init(document.getElementById('barchart'));

// 指定图表的配置项和数据
initGrades();




function initGrades(){
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

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["一班","二班","三班","四班","五班","六班"],

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

                    fontSize: 12,

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

                    fontSize: 12,

                    //color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        series: [{

            name: '英语',

            type: 'bar',

            stack: 'you',

            data: [91, 87, 84, 89, 93, 85],

            //barWidth: 15,

            //barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
        }, {

            name: '高数',

            type: 'bar',

            stack: 'you',

            data: [76, 72, 85,82, 80, 89],
           // barWidth: 15, //柱图宽度
           // barGap: 0.5,
        }]

    };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

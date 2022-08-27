// 柱形图1 暂无评分
(function () {
    let myChart = echarts.init(document.querySelector('.bar1'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["世界上最爱我的人", "永不妥协", "迷你世界之觉醒"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                //y轴文字样式
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [231, 230, 222],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
// 柱形图2 已有评分
(function () {
    let myChart = echarts.init(document.querySelector('.bar2'));
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            containLabel: false
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false
        },
        yAxis: [
            {
                type: "category",
                data: [
                    "小黄人大眼萌：神偷奶爸前传",
                    "海底小纵队：洞穴大冒险",
                    "忠犬帕尔玛",
                    "人间世",
                    "隐入尘烟"
                ],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                show: true,
                data: [7.1, 7.1,7.3,7.5,8.4],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                //柱子之间的距离
                barCategoryGap: 50,
                barWidth: 10,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function (params) {
                            return myColor[params.dataIndex];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%"

                    }
                },
                data: [71, 71,73,75,84],
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
// 折线图1 票房前五走势
(function () {
    let myChart = echarts.init(document.querySelector('.line1'));
    let yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
    ];
    var option = {
        color: ['#00f2f1', '#ed3f35', '#fff', 'green'],

        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        // 设置网格样式
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            data: ["周一", "周二"],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false, // 去除轴内间距
            data: [
                '8月20日',
                '8月21日',
                '8月22日',
                '8月23日',
                '8月24日', 
                '8月25日',
                '8月26日',],
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: '独行月球',
                type: 'line',
                smooth: true,
                data: [4729,4487,2170,2047,1944,1843,2053],
            },
            {
                name: '新神榜：杨戬',
                type: 'line',
                smooth: true,
                data: [4994,4747,2179,1859,1720,1712,2001],
            },
            {
                name: '明日战记',
                type: 'line',
                smooth: true,
                data: [2992,3282,1777,1594,1391,1253, 1272],
            },
            {
                name: '小黄人大眼萌',
                type: 'line',
                smooth: true,
                data: [2467,2758,1245,1118,1049,975,942],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//折线图2 出票量
(function () {
    let myChart = echarts.init(document.querySelector('.line2'));
    let option = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 12
            },
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        grid: {
            left: '10',
            top: "30",
            right: "10",
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .2)"
                    }
                },
                data: [
                    '8月20日',
                    '8月21日',
                    '8月22日',
                    '8月23日',
                    '8月24日', 
                    '8月25日',
                    '8月26日',],
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .2)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Line 1',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(1, 132, 213, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(1, 132, 213, 0.1)'
                    }]),

                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                //开始不显示，鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [411.4,413.3,203.8,186.3,172.9,164.0,196.3,207.7],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 饼形图1 年龄分布
(function () {
    let myChart = echarts.init(document.querySelector('.pie1'));
    let option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            data: [
                "新神榜：杨戬",
                "独行月球",
                "小黄人大眼萌：神偷奶爸前传",
                "明日战记",
                "雀斑公主"],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '45%'],
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 29.8, name: "新神榜：杨戬" },
                    { value: 26.0, name: "独行月球" },
                    { value: 16.6, name: "小黄人大眼萌：神偷奶爸前传" },
                    { value: 13.7, name: "明日战记" },
                    { value: 3.3, name: "雀斑公主" }
                ],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

//饼形图2 地区分布
(function () {
    let myChart = echarts.init(document.querySelector('.pie2'));
    let option = {
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 8
            }
        },

        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: ['10%', "70%"],
                center: ['50%', '45%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 8
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 1.连接扇形图形线长
                    length: 4,
                    // 2.连接文字线长
                    length2: 8
                },
                data: [
                        { value: 601547, name: '广东' },
                        { value: 432287, name: '江苏' },
                        { value: 357405, name: '浙江' },
                        { value: 281205, name: '四川' },
                        { value: 252762, name: '上海' },
                        { value: 249653, name: '山东' },
                        { value: 223158, name: '北京' },
                        { value: 213330, name: '河南' },
                        { value: 204619, name: '湖北' },
                        { value: 181335, name: '安徽' }
                     ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 旭日图
var myChart = echarts.init(document.getElementById('sunburst'));

var app = {};
option = null;
// 数据意义：年份，城市，专业，招生人数情况
var data = [{
name: '电影分类数据',
  itemStyle: {
       color: '#ddaf61'
    },
children:[
    {
    name:'犯罪',
    value:10,
    children: [
        {
        name:'教父',
        itemStyle:{
            color:'#9ea718'
        },
            children:[{
                name:'434164',
                value:1
            }],
    },{
        name:'低俗小说',
        itemStyle:{
            color:'#c94a44'
        },
            children:[{
                name:'456879',
                value:1
            }],
    },{
        name:'上帝之城',
        itemStyle:{
            color:'#0aa3b5'
        },
            children:[{
                name:'195168',
                value:1
            }],
    },{
        name:'后窗',
        itemStyle:{
            color:'#a2bb2b'
        },
            children:[{
                name:'125771',
                value:1
            }],
    },{
        name:'非常嫌疑犯',
        itemStyle:{
            color:'#e0719c'
        },
            children:[{
                name:'281438',
                value:1
            }],
    },{
        name:'沉默的羔羊',
        itemStyle:{
            color:'#975e6d'
        },
            children:[{
                name:'262019',
                value:1
            }],
    },{
        name:'七宗罪',
        itemStyle:{
            color:'#718933'
        },
            children:[{
                name:'299235',
                value:1
            }],
    },{
        name:'记忆碎片',
        itemStyle:{
            color:'#b09733'
        },
            children:[{
                name:'293026',
                value:1
            }],
    },{
        name:'这个杀手不太冷',
        itemStyle:{
            color:'#a2b029'
        },
            children:[{
                name:'215135',
                value:1
            }],
    },{
        name:'美国X档案',
        itemStyle:{
            color:'#5e9a80'
        },
            children:[{
                name:'240654',
                value:1
            }],
    }
    ],
},
{
    name:'剧情',
    value:10,
    children: [
    {
        name: '光荣之路',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '47674',
            value: 1
        }],
    },{
        name: '发条橙',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '204492',
            value: 1
        }],
    },{
        name: '杀死一只知更鸟',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '87145',
            value: 1
        }],
    },{
        name: '落水狗',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '224785',
            value: 1
        }],
    },{
        name: '洛城机密',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '172905',
            value: 1
        }],
    },{
        name: '绿里奇迹',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '213980',
            value: 1
        }],
    },{
        name: '偷自行车的人',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '29591',
            value: 1
        }],
    },{
        name: '不可饶恕',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '105373',
            value: 1
        }],
    },{
        name: '码头风云',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '43440',
            value: 1
        }],
    },{
        name: '冰血暴',
        itemStyle: {
            color:'#5e9a80'
        },
        children: [{
            name: '173350',
            value: 1
        }],
    }
    ],
},
{
    name:'黑色',
    value:9,
    children:[
    {
        name: '日落大道',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '58351',
            value: 1
        }],
    },{
        name: '双重赔偿',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '39395',
            value: 1
        }],
    },{
        name: '马耳他雄鹰',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '54036',
            value: 1
        }],
    },{
        name: '历劫佳人',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '34292',
            value: 1
        }],
    },{
        name: '列车上的陌生人',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '36539',
            value: 1
        }],
    },{
        name: '美人计',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '33092',
            value: 1
        }],
    },{
        name: '夜长梦多',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '30470',
            value: 1
        }],
    },{
        name: '猎人的夜晚',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '27188',
            value: 1
        }],
    },{
        name: '杀手',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '26213',
            value: 1
        }],
    }
    ],
},
{
    name:'爱情',
    value:10,
    children:[
   {
        name: '美好人生',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '108566',
            value: 1
        }],
    },{
        name: '阿甘正传',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '323452',
            value: 1
        }],
    },{
        name: '天使爱美丽',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '204214',
            value: 1
        }],
    },{
        name: '城市之光',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '29928',
            value: 1
        }],
    },{
        name: '天堂电影院',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '48732',
            value: 1
        }],
    },{
        name: '雨中曲',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '58519',
            value: 1
        }],
    },{
        name: '贫民窟的百万富翁',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '191432',
            value: 1
        }],
    },{
        name: '一夜风流',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '26571',
            value: 1
        }],
    },{
        name: '公主新娘',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '128414',
            value: 1
        }],
    },{
        name: '宾虚',
        itemStyle: {
            color:'#5e9a80'
        },
        children: [{
            name: '62087',
            value: 1
        }],
    }
    ],
},
{
    name:'喜剧',
    value:10,
    children:[
    {
        name: '奇爱博士',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '163038',
            value: 1
        }],
    },{
        name: '大独裁者',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '39856',
            value: 1
        }],
    },{
        name: '骗中骗',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '69676',
            value: 1
        }],
    },{
        name: '将军号',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '21275',
            value: 1
        }],
    },{
        name: '猜火车',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '159565',
            value: 1
        }],
    },{
        name: '弃儿的故事',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '15764',
            value: 1
        }],
    },{
        name: '土拨鼠日',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '157689',
            value: 1
        }],
    },{
        name: '布莱恩的一生',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '99842',
            value: 1
        }],
    },{
        name: '17号囚房',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '21741',
            value: 1
        }],
    },{
        name: '仁心与冠冕',
        itemStyle: {
            color:'#5e9a80'
        },
        children: [{
            name: '13874',
            value: 1
        }],
    }
    ],
},
{
    name:'动作',
    value:6,
    children:[
   {
        name: '盗梦空间',
        itemStyle: {
            color:'#5e9a80'
        },
        children: [{
            name: '363056',
            value: 1
        }],
    },{
        name: '蝙蝠侠前传2：黑暗骑士',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '539279',
            value: 1
        }],
    },{
        name: '指环王：王者归来',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '417772',
            value: 1
        }],
    },{
        name: '星球大战Ⅴ：帝国反击战',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '293597',
            value: 1
        }],
    },{
        name: '七武士',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '102591',
            value: 1
        }],
    },{
        name: '黑客帝国',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '404696',
            value: 1
        }],
    }
    ],
},
{
    name:'历史',
    value:4,
    children:[
   {
        name: '角斗士',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '297724',
            value: 1
        }],
    },{
        name: '象人',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '61990',
            value: 1
        }],
    },{
        name: '甘地传',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '54269',
            value: 1
        }],
    },{
        name: '圣女贞德的审判',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '11520',
            value: 1
        }],
    }
    ],
},
{
    name:'音乐',
    value:2,
    children:[
     {
        name: '莫扎特',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '102730',
            value: 1
        }],
    },{
        name: '绿野仙踪',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '109046',
            value: 1
        }],
    }
    ],
},
{
    name:'家庭',
    value:3,
    children:[
     {
        name: '千与千寻',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '109544',
            value: 1
        }],
    },{
        name: '回到未来',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '217018',
            value: 1
        }],
    },{
        name: '淘金记',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '22566',
            value: 1
        }],
    }
    ],
},
{
    name:'动画',
    value:3,
    children:[
   {
        name: '海底总动员',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '177757',
            value: 1
        }],
    }, {
        name: '千与千寻',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '109544',
            value: 1
        }],
    },{
        name: '龙猫',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '34038',
            value: 1
        }],
    }
    ],
},
{
    name:'科幻',
    value:3,
    children:[
     {
        name: '异形',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '190930',
            value: 1
        }],
    },{
        name: '大都会',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '42543',
            value: 1
        }],
    },{
        name: '银翼杀手',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '194150',
            value: 1
        }],
    }
    ],
}
]
}];

option = {
// backgroundColor: 'fff',
title: {
    textStyle: {
        fontSize: 35,
        align: 'right'
        },
     },

visualMap: {
    type: 'continuous',
    min: 0,
    max: 30,
    inRange: {
        color: ['#2D5F73','#538EA6','#F2D1B3','#F2B8A2',
                '#F28C8C','#ec0000','#8A0000','#00da3c',
                '#008F28','#f7f1bd','#ef5a78','#f99e1c',
                //'#c94a44','#b53b54','#a5446f','#dd4c51',
                //'#e0719c','#975e6d','#da0d68','#da1d23',
                '#dd4c51','#3e0317','#e62969','#ef2d36']
    }
},
series: {
    type: 'sunburst',
    data: data,
    radius: [0, '100%'],
    levels: [{}, {
        r0: '15%',
        r: '25%',
        itemStyle: {
            borderWidth: 2
        },
        label: {
            rotate: 'tangential'
        }
    }, {
        r0: '25%',
        r: '45%',
        label: {
            align: 'center'
        }
    }, {
        r0: '45%',
        r: '80%',
        label: {
            align: 'center'
        }
    }, {
        r0: '80%',
        r: '82%',
        label: {
            position: 'outside',

        },
        itemStyle: {
            borderWidth: 3
        }
    }]
}
};
;
if (option && typeof option === "object") {
myChart.setOption(option, true);
}


// 中国地图
// (function () {
//     let myChart = echarts.init(document.querySelector('.chinaMap'));
//     var geoCoordMap = {
//         '上海': [121.4648, 31.2891],
//         '东莞': [113.8953, 22.901],
//         '东营': [118.7073, 37.5513],
//         '中山': [113.4229, 22.478],
//         '临汾': [111.4783, 36.1615],
//         '临沂': [118.3118, 35.2936],
//         '丹东': [124.541, 40.4242],
//         '丽水': [119.5642, 28.1854],
//         '乌鲁木齐': [87.9236, 43.5883],
//         '佛山': [112.8955, 23.1097],
//         '保定': [115.0488, 39.0948],
//         '兰州': [103.5901, 36.3043],
//         '包头': [110.3467, 41.4899],
//         '北京': [116.4551, 40.2539],
//         '北海': [109.314, 21.6211],
//         '南京': [118.8062, 31.9208],
//         '南宁': [108.479, 23.1152],
//         '南昌': [116.0046, 28.6633],
//         '南通': [121.1023, 32.1625],
//         '厦门': [118.1689, 24.6478],
//         '台州': [121.1353, 28.6688],
//         '合肥': [117.29, 32.0581],
//         '呼和浩特': [111.4124, 40.4901],
//         '咸阳': [108.4131, 34.8706],
//         '哈尔滨': [127.9688, 45.368],
//         '唐山': [118.4766, 39.6826],
//         '嘉兴': [120.9155, 30.6354],
//         '大同': [113.7854, 39.8035],
//         '大连': [122.2229, 39.4409],
//         '天津': [117.4219, 39.4189],
//         '太原': [112.3352, 37.9413],
//         '威海': [121.9482, 37.1393],
//         '宁波': [121.5967, 29.6466],
//         '宝鸡': [107.1826, 34.3433],
//         '宿迁': [118.5535, 33.7775],
//         '常州': [119.4543, 31.5582],
//         '广州': [113.5107, 23.2196],
//         '廊坊': [116.521, 39.0509],
//         '延安': [109.1052, 36.4252],
//         '张家口': [115.1477, 40.8527],
//         '徐州': [117.5208, 34.3268],
//         '德州': [116.6858, 37.2107],
//         '惠州': [114.6204, 23.1647],
//         '成都': [103.9526, 30.7617],
//         '扬州': [119.4653, 32.8162],
//         '承德': [117.5757, 41.4075],
//         '拉萨': [91.1865, 30.1465],
//         '无锡': [120.3442, 31.5527],
//         '日照': [119.2786, 35.5023],
//         '昆明': [102.9199, 25.4663],
//         '杭州': [119.5313, 29.8773],
//         '枣庄': [117.323, 34.8926],
//         '柳州': [109.3799, 24.9774],
//         '株洲': [113.5327, 27.0319],
//         '武汉': [114.3896, 30.6628],
//         '汕头': [117.1692, 23.3405],
//         '江门': [112.6318, 22.1484],
//         '沈阳': [123.1238, 42.1216],
//         '沧州': [116.8286, 38.2104],
//         '河源': [114.917, 23.9722],
//         '泉州': [118.3228, 25.1147],
//         '泰安': [117.0264, 36.0516],
//         '泰州': [120.0586, 32.5525],
//         '济南': [117.1582, 36.8701],
//         '济宁': [116.8286, 35.3375],
//         '海口': [110.3893, 19.8516],
//         '淄博': [118.0371, 36.6064],
//         '淮安': [118.927, 33.4039],
//         '深圳': [114.5435, 22.5439],
//         '清远': [112.9175, 24.3292],
//         '温州': [120.498, 27.8119],
//         '渭南': [109.7864, 35.0299],
//         '湖州': [119.8608, 30.7782],
//         '湘潭': [112.5439, 27.7075],
//         '滨州': [117.8174, 37.4963],
//         '潍坊': [119.0918, 36.524],
//         '烟台': [120.7397, 37.5128],
//         '玉溪': [101.9312, 23.8898],
//         '珠海': [113.7305, 22.1155],
//         '盐城': [120.2234, 33.5577],
//         '盘锦': [121.9482, 41.0449],
//         '石家庄': [114.4995, 38.1006],
//         '福州': [119.4543, 25.9222],
//         '秦皇岛': [119.2126, 40.0232],
//         '绍兴': [120.564, 29.7565],
//         '聊城': [115.9167, 36.4032],
//         '肇庆': [112.1265, 23.5822],
//         '舟山': [122.2559, 30.2234],
//         '苏州': [120.6519, 31.3989],
//         '莱芜': [117.6526, 36.2714],
//         '菏泽': [115.6201, 35.2057],
//         '营口': [122.4316, 40.4297],
//         '葫芦岛': [120.1575, 40.578],
//         '衡水': [115.8838, 37.7161],
//         '衢州': [118.6853, 28.8666],
//         '西宁': [101.4038, 36.8207],
//         '西安': [109.1162, 34.2004],
//         '贵阳': [106.6992, 26.7682],
//         '连云港': [119.1248, 34.552],
//         '邢台': [114.8071, 37.2821],
//         '邯郸': [114.4775, 36.535],
//         '郑州': [113.4668, 34.6234],
//         '鄂尔多斯': [108.9734, 39.2487],
//         '重庆': [107.7539, 30.1904],
//         '金华': [120.0037, 29.1028],
//         '铜川': [109.0393, 35.1947],
//         '银川': [106.3586, 38.1775],
//         '镇江': [119.4763, 31.9702],
//         '长春': [125.8154, 44.2584],
//         '长沙': [113.0823, 28.2568],
//         '长治': [112.8625, 36.4746],
//         '阳泉': [113.4778, 38.0951],
//         '青岛': [120.4651, 36.3373],
//         '韶关': [113.7964, 24.7028]
//     };

//     var XAData = [
//         [{ name: '重庆' }, { name: '北京', value: 100 }],
//         [{ name: '长沙' }, { name: '上海', value: 100 }],
//         [{ name: '北京' }, { name: '长沙', value: 100 }]
//     ];

//     var XNData = [
//         [{ name: '拉萨' }, { name: '北京', value: 100 }],


//     ];

//     var YCData = [
//         [{ name: '长沙' }, { name: '北京', value: 100 }],
//         [{ name: '长沙' }, { name: '重庆', value: 100 }],
//         [{ name: '长沙' }, { name: '青岛', value: 100 }],
//         [{ name: '北京' }, { name: '拉萨', value: 100 }],
//         [{ name: '长沙' }, { name: '杭州', value: 100 }],
//         [{ name: '长沙' }, { name: '深圳', value: 100 }]
//     ];


//     var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//     //var planePath = 'arrow';
//     var convertData = function (data) {

//         var res = [];
//         for (var i = 0; i < data.length; i++) {

//             var dataItem = data[i];

//             var fromCoord = geoCoordMap[dataItem[0].name];
//             var toCoord = geoCoordMap[dataItem[1].name];
//             if (fromCoord && toCoord) {
//                 res.push({
//                     fromName: dataItem[0].name,
//                     toName: dataItem[1].name,
//                     coords: [fromCoord, toCoord],
//                     value: dataItem[1].value
//                 });
//             }
//         }
//         return res;

//     };

//     var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
//     var series = [];
//     [['长沙', XAData], ['北京', XNData], ['上海', YCData]].forEach(function (item, i) {
//         series.push({
//             name: item[0] + ' Top3',
//             type: 'lines',
//             zlevel: 1,
//             effect: {
//                 show: true,
//                 period: 6,
//                 trailLength: 0.7,
//                 color: 'red',   //arrow箭头的颜色
//                 symbolSize: 3
//             },
//             lineStyle: {
//                 normal: {
//                     color: color[i],
//                     width: 0,
//                     curveness: 0.2
//                 }
//             },
//             data: convertData(item[1])
//         },
//             {
//                 name: item[0] + ' Top3',
//                 type: 'lines',
//                 zlevel: 2,
//                 symbol: ['none', 'arrow'],
//                 symbolSize: 10,
//                 effect: {
//                     show: true,
//                     period: 6,
//                     trailLength: 0,
//                     symbol: planePath,
//                     symbolSize: 15
//                 },
//                 lineStyle: {
//                     normal: {
//                         color: color[i],
//                         width: 1,
//                         opacity: 0.6,
//                         curveness: 0.2
//                     }
//                 },
//                 data: convertData(item[1])
//             },
//             {
//                 name: item[0] + ' Top3',
//                 type: 'effectScatter',
//                 coordinateSystem: 'geo',
//                 zlevel: 2,
//                 rippleEffect: {
//                     brushType: 'stroke'
//                 },
//                 label: {
//                     normal: {
//                         show: true,
//                         position: 'right',
//                         formatter: '{b}'
//                     }
//                 },
//                 symbolSize: function (val) {
//                     return val[2] / 8;
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: color[i],
//                     },
//                     emphasis: {
//                         areaColor: '#2B91B7'
//                     }
//                 },
//                 data: item[1].map(function (dataItem) {
//                     return {
//                         name: dataItem[1].name,
//                         value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//                     };
//                 })
//             });
//     });
//     var option = {

//         title: {
//             left: 'center',
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         tooltip: {
//             trigger: 'item',
//             formatter: function (params, ticket, callback) {
//                 if (params.seriesType == "effectScatter") {
//                     return "线路：" + params.data.name + "" + params.data.value[2];
//                 } else if (params.seriesType == "lines") {
//                     return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
//                 } else {
//                     return params.name;
//                 }
//             }
//         },
//         legend: {
//             orient: 'vertical',
//             top: 'bottom',
//             left: 'right',

//             textStyle: {
//                 color: '#fff'
//             },
//             selectedMode: 'multiple'
//         },
//         geo: {
//             map: 'china',
//             label: {
//                 emphasis: {
//                     show: true,
//                     color: '#fff'
//                 }
//             },
//             roam: 'scale',
//             itemStyle: {
//                 normal: {
//                     areaColor: 'rgba(0, 24, 110,.6)',
//                     borderColor: '#195BB9',
//                     borderWidth: 1,
//                 },
//                 emphasis: {
//                     areaColor: '#2B91B7'
//                 }
//             }
//         },
//         series: series
//     };
//     myChart.setOption(option);
//     window.addEventListener('resize', function () {
//         myChart.resize();
//     })
// })();

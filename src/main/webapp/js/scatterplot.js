(function () {
    let myChart = echarts.init(document.querySelector('.chinaMap'));
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var XAData = [
        [{ name: '重庆' }, { name: '北京', value: 100 }],
        [{ name: '长沙' }, { name: '上海', value: 100 }],
        [{ name: '北京' }, { name: '长沙', value: 100 }]
    ];

    var XNData = [
        [{ name: '拉萨' }, { name: '北京', value: 100 }],


    ];

    var YCData = [
        [{ name: '长沙' }, { name: '北京', value: 100 }],
        [{ name: '长沙' }, { name: '重庆', value: 100 }],
        [{ name: '长沙' }, { name: '青岛', value: 100 }],
        [{ name: '北京' }, { name: '拉萨', value: 100 }],
        [{ name: '长沙' }, { name: '杭州', value: 100 }],
        [{ name: '长沙' }, { name: '深圳', value: 100 }]
    ];


    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    [['长沙', XAData], ['北京', XNData], ['上海', YCData]].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red',   //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
            {
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    var option = {

        title: {
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',

            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            roam: 'scale',
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0, 24, 110,.6)',
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// var myCanvas = document.getElementById('show-zhexian');
// /*1.构造函数*/
// var LineChart = function (ctx) {
//     /*获取绘图工具*/
//     this.ctx = ctx || document.querySelector('canvas').getContext('2d');
//     /*画布的大小*/
//     this.canvasWidth = this.ctx.canvas.width;
//     this.canvasHeight = this.ctx.canvas.height;
//     /*网格的大小*/
//     this.gridSize = 100;
//     /*坐标系的间距*/
//     this.space = 20;
//     /*坐标原点*/
//     this.x0 = this.space;
//     this.y0 = this.canvasHeight - this.space;
//     /*箭头的大小*/
//     this.arrowSize = 10;
//     /*绘制点*/
//     this.dottedSize = 6;
//     /*点的坐标 和数据有关系  数据可视化*/
// }
// /*2.行为方法*/
// LineChart.prototype.init = function (data) {
//     this.drawGrid();
//     this.drawAxis();
//     this.drawDotted(data);
// };
// /*绘制网格*/
// LineChart.prototype.drawGrid = function () {
//     /*x方向的线*/
//     var xLineTotal = Math.floor(this.canvasHeight / this.gridSize);
//     this.ctx.strokeStyle = '#eee';
//     for (var i = 0; i <= xLineTotal; i++) {
//         this.ctx.strokeStyle="#fff";
//         this.ctx.beginPath();
//         this.ctx.setLineDash([5,10]);
//         this.ctx.moveTo(0, i * this.gridSize - 0.5);
//         this.ctx.lineTo(this.canvasWidth, i * this.gridSize - 0.5);
//         this.ctx.stroke();
//     }
//     // /*y方向的线*/
//     // var yLineTotal = Math.floor(this.canvasWidth / this.gridSize);
//     // for (var i = 0; i <= yLineTotal; i++) {
//     //     this.ctx.beginPath();
//     //     this.ctx.moveTo(i * this.gridSize - 0.5, 0);
//     //     this.ctx.lineTo(i * this.gridSize - 0.5, this.canvasHeight);
//     //     this.ctx.stroke();
//     // }
// };
// /*绘制坐标系*/
// LineChart.prototype.drawAxis = function () {
//     /*X轴*/
//     this.ctx.beginPath();
//     this.ctx.strokeStyle = '#fff';
//     this.ctx.moveTo(this.x0, this.y0);
//     this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
//     this.ctx.lineTo(this.canvasWidth - this.space - this.arrowSize, this.y0 + this.arrowSize / 2);
//     this.ctx.lineTo(this.canvasWidth - this.space - this.arrowSize, this.y0 - this.arrowSize / 2);
//     this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
//     this.ctx.stroke();
//     this.ctx.fill();
//     /*Y轴*/
//     this.ctx.beginPath();
//     this.ctx.strokeStyle = '#fff';
//     this.ctx.moveTo(this.x0, this.y0);
//     this.ctx.lineTo(this.space, this.space);
//     this.ctx.lineTo(this.space + this.arrowSize / 2, this.space + this.arrowSize);
//     this.ctx.lineTo(this.space - this.arrowSize / 2, this.space + this.arrowSize);
//     this.ctx.lineTo(this.space, this.space);
//     this.ctx.stroke();
//     this.ctx.fill();
// };
// /*绘制所有点*/
// LineChart.prototype.drawDotted = function (data) {
//     /*1.数据的坐标 需要转换 canvas坐标*/
//     /*2.再进行点的绘制*/
//     /*3.把线连起来*/
//     var that = this;
//     /*记录当前坐标*/
//     var prevCanvasX = 0;
//     var prevCanvasY = 0;
//     data.forEach(function (item, i) {
//         /* x = 原点的坐标 + 数据的坐标 */
//         /* y = 原点的坐标 - 数据的坐标 */
//         var canvasX = that.x0 + item.x;
//         var canvasY = that.y0 - item.y;
//         /*绘制点*/
//         that.ctx.beginPath();
//         that.ctx.moveTo(canvasX - that.dottedSize / 2, canvasY - that.dottedSize / 2);
//         that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY - that.dottedSize / 2);
//         that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY + that.dottedSize / 2);
//         that.ctx.lineTo(canvasX - that.dottedSize / 2, canvasY + that.dottedSize / 2);
//         that.ctx.closePath();
//         that.ctx.fill();
//         /*点的连线*/
//         /*当时第一个点的时候 起点是 x0 y0*/
//         /*当时不是第一个点的时候 起点是 上一个点*/
//         if(i == 0){
//             that.ctx.beginPath();
//             that.ctx.moveTo(that.x0,that.y0);
//             that.ctx.lineTo(canvasX,canvasY);
//             that.ctx.stroke();
//         }else{
//             /*上一个点*/
//             that.ctx.beginPath();
//             that.ctx.moveTo(prevCanvasX,prevCanvasY);
//             that.ctx.lineTo(canvasX,canvasY);
//             that.ctx.stroke();
//         }
//         /*记录当前的坐标，下一次要用*/
//         prevCanvasX = canvasX;
//         prevCanvasY = canvasY;
//     });
// };
// /*3.初始化*/
// var data = [
//     {
//         x: 100,
//         y: 120
//     }, {
//         x: 200,
//         y: 160
//     }, {
//         x: 300,
//         y: 240
//     }, {
//         x: 400,
//         y: 120
//     }, {
//         x: 500,
//         y: 80
//     }
// ];
// var lineChart = new LineChart();
// lineChart.init(data);
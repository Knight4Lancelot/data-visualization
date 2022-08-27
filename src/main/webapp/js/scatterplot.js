(function () {
    let myChart = echarts.init(document.querySelector('.chinaMap'));
    var geoCoordMap = {
        '�Ϻ�': [121.4648, 31.2891],
        '��ݸ': [113.8953, 22.901],
        '��Ӫ': [118.7073, 37.5513],
        '��ɽ': [113.4229, 22.478],
        '�ٷ�': [111.4783, 36.1615],
        '����': [118.3118, 35.2936],
        '����': [124.541, 40.4242],
        '��ˮ': [119.5642, 28.1854],
        '��³ľ��': [87.9236, 43.5883],
        '��ɽ': [112.8955, 23.1097],
        '����': [115.0488, 39.0948],
        '����': [103.5901, 36.3043],
        '��ͷ': [110.3467, 41.4899],
        '����': [116.4551, 40.2539],
        '����': [109.314, 21.6211],
        '�Ͼ�': [118.8062, 31.9208],
        '����': [108.479, 23.1152],
        '�ϲ�': [116.0046, 28.6633],
        '��ͨ': [121.1023, 32.1625],
        '����': [118.1689, 24.6478],
        '̨��': [121.1353, 28.6688],
        '�Ϸ�': [117.29, 32.0581],
        '���ͺ���': [111.4124, 40.4901],
        '����': [108.4131, 34.8706],
        '������': [127.9688, 45.368],
        '��ɽ': [118.4766, 39.6826],
        '����': [120.9155, 30.6354],
        '��ͬ': [113.7854, 39.8035],
        '����': [122.2229, 39.4409],
        '���': [117.4219, 39.4189],
        '̫ԭ': [112.3352, 37.9413],
        '����': [121.9482, 37.1393],
        '����': [121.5967, 29.6466],
        '����': [107.1826, 34.3433],
        '��Ǩ': [118.5535, 33.7775],
        '����': [119.4543, 31.5582],
        '����': [113.5107, 23.2196],
        '�ȷ�': [116.521, 39.0509],
        '�Ӱ�': [109.1052, 36.4252],
        '�żҿ�': [115.1477, 40.8527],
        '����': [117.5208, 34.3268],
        '����': [116.6858, 37.2107],
        '����': [114.6204, 23.1647],
        '�ɶ�': [103.9526, 30.7617],
        '����': [119.4653, 32.8162],
        '�е�': [117.5757, 41.4075],
        '����': [91.1865, 30.1465],
        '����': [120.3442, 31.5527],
        '����': [119.2786, 35.5023],
        '����': [102.9199, 25.4663],
        '����': [119.5313, 29.8773],
        '��ׯ': [117.323, 34.8926],
        '����': [109.3799, 24.9774],
        '����': [113.5327, 27.0319],
        '�人': [114.3896, 30.6628],
        '��ͷ': [117.1692, 23.3405],
        '����': [112.6318, 22.1484],
        '����': [123.1238, 42.1216],
        '����': [116.8286, 38.2104],
        '��Դ': [114.917, 23.9722],
        'Ȫ��': [118.3228, 25.1147],
        '̩��': [117.0264, 36.0516],
        '̩��': [120.0586, 32.5525],
        '����': [117.1582, 36.8701],
        '����': [116.8286, 35.3375],
        '����': [110.3893, 19.8516],
        '�Ͳ�': [118.0371, 36.6064],
        '����': [118.927, 33.4039],
        '����': [114.5435, 22.5439],
        '��Զ': [112.9175, 24.3292],
        '����': [120.498, 27.8119],
        'μ��': [109.7864, 35.0299],
        '����': [119.8608, 30.7782],
        '��̶': [112.5439, 27.7075],
        '����': [117.8174, 37.4963],
        'Ϋ��': [119.0918, 36.524],
        '��̨': [120.7397, 37.5128],
        '��Ϫ': [101.9312, 23.8898],
        '�麣': [113.7305, 22.1155],
        '�γ�': [120.2234, 33.5577],
        '�̽�': [121.9482, 41.0449],
        'ʯ��ׯ': [114.4995, 38.1006],
        '����': [119.4543, 25.9222],
        '�ػʵ�': [119.2126, 40.0232],
        '����': [120.564, 29.7565],
        '�ĳ�': [115.9167, 36.4032],
        '����': [112.1265, 23.5822],
        '��ɽ': [122.2559, 30.2234],
        '����': [120.6519, 31.3989],
        '����': [117.6526, 36.2714],
        '����': [115.6201, 35.2057],
        'Ӫ��': [122.4316, 40.4297],
        '��«��': [120.1575, 40.578],
        '��ˮ': [115.8838, 37.7161],
        '����': [118.6853, 28.8666],
        '����': [101.4038, 36.8207],
        '����': [109.1162, 34.2004],
        '����': [106.6992, 26.7682],
        '���Ƹ�': [119.1248, 34.552],
        '��̨': [114.8071, 37.2821],
        '����': [114.4775, 36.535],
        '֣��': [113.4668, 34.6234],
        '������˹': [108.9734, 39.2487],
        '����': [107.7539, 30.1904],
        '��': [120.0037, 29.1028],
        'ͭ��': [109.0393, 35.1947],
        '����': [106.3586, 38.1775],
        '��': [119.4763, 31.9702],
        '����': [125.8154, 44.2584],
        '��ɳ': [113.0823, 28.2568],
        '����': [112.8625, 36.4746],
        '��Ȫ': [113.4778, 38.0951],
        '�ൺ': [120.4651, 36.3373],
        '�ع�': [113.7964, 24.7028]
    };

    var XAData = [
        [{ name: '����' }, { name: '����', value: 100 }],
        [{ name: '��ɳ' }, { name: '�Ϻ�', value: 100 }],
        [{ name: '����' }, { name: '��ɳ', value: 100 }]
    ];

    var XNData = [
        [{ name: '����' }, { name: '����', value: 100 }],


    ];

    var YCData = [
        [{ name: '��ɳ' }, { name: '����', value: 100 }],
        [{ name: '��ɳ' }, { name: '����', value: 100 }],
        [{ name: '��ɳ' }, { name: '�ൺ', value: 100 }],
        [{ name: '����' }, { name: '����', value: 100 }],
        [{ name: '��ɳ' }, { name: '����', value: 100 }],
        [{ name: '��ɳ' }, { name: '����', value: 100 }]
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

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//���ߵ���ɫ
    var series = [];
    [['��ɳ', XAData], ['����', XNData], ['�Ϻ�', YCData]].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red',   //arrow��ͷ����ɫ
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
                    return "��·��" + params.data.name + "" + params.data.value[2];
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
// /*1.���캯��*/
// var LineChart = function (ctx) {
//     /*��ȡ��ͼ����*/
//     this.ctx = ctx || document.querySelector('canvas').getContext('2d');
//     /*�����Ĵ�С*/
//     this.canvasWidth = this.ctx.canvas.width;
//     this.canvasHeight = this.ctx.canvas.height;
//     /*����Ĵ�С*/
//     this.gridSize = 100;
//     /*����ϵ�ļ��*/
//     this.space = 20;
//     /*����ԭ��*/
//     this.x0 = this.space;
//     this.y0 = this.canvasHeight - this.space;
//     /*��ͷ�Ĵ�С*/
//     this.arrowSize = 10;
//     /*���Ƶ�*/
//     this.dottedSize = 6;
//     /*������� �������й�ϵ  ���ݿ��ӻ�*/
// }
// /*2.��Ϊ����*/
// LineChart.prototype.init = function (data) {
//     this.drawGrid();
//     this.drawAxis();
//     this.drawDotted(data);
// };
// /*��������*/
// LineChart.prototype.drawGrid = function () {
//     /*x�������*/
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
//     // /*y�������*/
//     // var yLineTotal = Math.floor(this.canvasWidth / this.gridSize);
//     // for (var i = 0; i <= yLineTotal; i++) {
//     //     this.ctx.beginPath();
//     //     this.ctx.moveTo(i * this.gridSize - 0.5, 0);
//     //     this.ctx.lineTo(i * this.gridSize - 0.5, this.canvasHeight);
//     //     this.ctx.stroke();
//     // }
// };
// /*��������ϵ*/
// LineChart.prototype.drawAxis = function () {
//     /*X��*/
//     this.ctx.beginPath();
//     this.ctx.strokeStyle = '#fff';
//     this.ctx.moveTo(this.x0, this.y0);
//     this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
//     this.ctx.lineTo(this.canvasWidth - this.space - this.arrowSize, this.y0 + this.arrowSize / 2);
//     this.ctx.lineTo(this.canvasWidth - this.space - this.arrowSize, this.y0 - this.arrowSize / 2);
//     this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
//     this.ctx.stroke();
//     this.ctx.fill();
//     /*Y��*/
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
// /*�������е�*/
// LineChart.prototype.drawDotted = function (data) {
//     /*1.���ݵ����� ��Ҫת�� canvas����*/
//     /*2.�ٽ��е�Ļ���*/
//     /*3.����������*/
//     var that = this;
//     /*��¼��ǰ����*/
//     var prevCanvasX = 0;
//     var prevCanvasY = 0;
//     data.forEach(function (item, i) {
//         /* x = ԭ������� + ���ݵ����� */
//         /* y = ԭ������� - ���ݵ����� */
//         var canvasX = that.x0 + item.x;
//         var canvasY = that.y0 - item.y;
//         /*���Ƶ�*/
//         that.ctx.beginPath();
//         that.ctx.moveTo(canvasX - that.dottedSize / 2, canvasY - that.dottedSize / 2);
//         that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY - that.dottedSize / 2);
//         that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY + that.dottedSize / 2);
//         that.ctx.lineTo(canvasX - that.dottedSize / 2, canvasY + that.dottedSize / 2);
//         that.ctx.closePath();
//         that.ctx.fill();
//         /*�������*/
//         /*��ʱ��һ�����ʱ�� ����� x0 y0*/
//         /*��ʱ���ǵ�һ�����ʱ�� ����� ��һ����*/
//         if(i == 0){
//             that.ctx.beginPath();
//             that.ctx.moveTo(that.x0,that.y0);
//             that.ctx.lineTo(canvasX,canvasY);
//             that.ctx.stroke();
//         }else{
//             /*��һ����*/
//             that.ctx.beginPath();
//             that.ctx.moveTo(prevCanvasX,prevCanvasY);
//             that.ctx.lineTo(canvasX,canvasY);
//             that.ctx.stroke();
//         }
//         /*��¼��ǰ�����꣬��һ��Ҫ��*/
//         prevCanvasX = canvasX;
//         prevCanvasY = canvasY;
//     });
// };
// /*3.��ʼ��*/
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
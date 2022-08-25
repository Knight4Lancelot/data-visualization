var myChart = echarts.init(document.getElementById('sunburst'));

var app = {};
option = null;
// 数据意义：年份，城市，专业，招生人数情况
var data = [{
name: '2021年',
  itemStyle: {
       color: '#ddaf61'
    },
children: [{
    name: '北京',
    //value: 7,
    children: [{
        name: '材料科学/\n与工程',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '2人',
            value:1
            }],
    },{
        name: '机械类',
        itemStyle: {
            color: '#c94a44'
        },
        children: [{
            name: '3人',
            value:1
            }],
    },{
        name: '土木工程',
        itemStyle: {
            color: '#0aa3b5'
        },
        children: [{
            name: '2人',
            value:1
            }],
    }],
},{
    name: '安徽',
    //value: 11,
    children: [{
        name: '电子信息类',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '8人',
            value:1
            }],
    },{
        name: '自动化类',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '7人',
            value:1
            }],
    }, {
        name: '计算机类',
         itemStyle: {
            color: '#e0719c'
        },
         children: [{
            name: '21人',
            value:2
            }],
    }, {
        name: '软件工程',
         itemStyle: {
            color: '#975e6d'
        },
         children: [{
            name: '10人',
            value:2
            }],
    }, {
        name: '土木工程',
         itemStyle: {
            color: '#0aa3b5'
          },
          children: [{
            name: '6人',
            value:1
            }],
    }],
},{
    name: '山东',
    //value: 16,
    children: [{
        name: '材料科学\n与工程',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '58人',
            value:6
            }],
    },{
        name: '自动化类',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '46人',
            value:5
            }],
    },{
        name: '电子信息类',
        itemStyle: {
            color: '#718933'
        },
        children: [{
            name: '81人',
            value:9
            }],
    }, {
        name: '电气工程及其\n自动化',
         itemStyle: {
            color: '#b09733'
        },
        children: [{
            name: '20人',
            value:3
            }],
    }, {
        name: '能源动力系',
         itemStyle: {
            color: '#a2b029'
         },
        children: [{
            name: '7人',
            value:1
            }],
    }, {
        name: '计算机类',
        itemStyle: {
            color: '#5e9a80'
        },
        children: [{
            name: '58人',
            value:6
            }],
    }, {
        name: '交通工程',
         itemStyle: {
            color: '#f7a128'
        },
        children: [{
            name: '25人',
            value:3
            }],
    }, {
        name: '船舶与\n海洋工程',
        itemStyle: {
            color: '#dd4c51'
        },
        children: [{
            name: '36人',
            value:4
            }],
    }, {
        name: '机械类',
        itemStyle: {
            color: '#c94a44'
         },
         children: [{
            name: '36人',
            value:4
            }],
    },{
        name: '数学类',
         itemStyle: {
            color: '#9db2b7'
          },
         children: [{
            name: '21人',
            value:3
            }],
    },{
        name: '光电信息科学\n与工程',
         itemStyle: {
            color: '#caa465'
        },
         children: [{
            name: '18人',
            value:2
            }],
    },{
        name: '计算机类',
         itemStyle: {
            color: '#e0719c'
        },
         children: [{
            name: '43人',
            value:5
            }],
    },{
        name: '软件工程',
         itemStyle: {
            color: '#975e6d'
        },
         children: [{
            name: '46人',
            value:5
            }],
    },{
        name: '环境与\n生物工程',
         itemStyle: {
            color: '#ddaf61'
        },
         children: [{
            name: '41人',
            value:5
            }],
    },{
        name: '土木工程',
         itemStyle: {
            color: '#0aa3b5'
          },
          children: [{
            name: '35人',
            value:4
            }],
    }],
},{
    name: '黑龙江',
    //value: 13,
    children: [{
        name: '材料科学\n与工程',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '4人',
            value:1
            }],
    },{
        name: '自动化类',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '4人',
            value:1
            }],
    },{
        name: '电子信息类',
        itemStyle: {
            color: '#718933'
        },
        children: [{
            name: '6人',
            value:1
            }],
    }, {
        name: '电气工程及其\n自动化',
         itemStyle: {
            color: '#b09733'
        },
        children: [{
            name: '4人',
            value:1
            }],
    }, {
        name: '车辆工程',
        itemStyle: {
            color: '#5e9a80'
        },
        children: [{
            name: '6人',
            value:1
            }],
    },  {
        name: '计算机类',
         itemStyle: {
            color: '#e0719c'
        },
         children: [{
            name: '16人',
            value:1
            }],
    },{
        name: '软件工程',
         itemStyle: {
            color: '#975e6d'
        },
         children: [{
            name: '22人',
            value:1
            }],
    },{
        name: '土木工程',
         itemStyle: {
            color: '#0aa3b5'
          },
          children: [{
            name: '6人',
            value:1
            }],
    }],
},{
    name: '上海',
    //value: 5,
    children: [{
         name: '自动化类',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '2人',
            value:1
            }],
    }, {
        name: '计算机类',
         itemStyle: {
            color: '#e0719c'
        },
          children: [{
            name: '6人',
            value:1
            }],
    }],
},{
    name: '海南',
    //value: 6,
    children: [{
        name: '材料科学\n与工程',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '2人',
            value:1
            }],
    },{
        name: '自动化类',
         itemStyle: {
            color: '#a2bb2b'
        },
         children: [{
            name: '7人',
            value:1
            }],
    },  {
        name: '土木工程',
         itemStyle: {
            color: '#0aa3b5'
        },
            children: [{
            name: '2人',
            value:1
            }],
    }],
}],

}];

option = {
backgroundColor: 'grey',
title: {
    text: '2021年 不同省份各专业的录取人数',
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

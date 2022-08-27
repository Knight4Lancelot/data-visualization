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
backgroundColor: 'grey',
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

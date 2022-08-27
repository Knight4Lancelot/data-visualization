var myChart = echarts.init(document.getElementById('sunburst'));

var app = {};
option = null;
// �������壺��ݣ����У�רҵ�������������
var data = [{
name: '��Ӱ��������',
  itemStyle: {
       color: '#ddaf61'
    },
children:[
    {
    name:'����',
    value:10,
    children: [
        {
        name:'�̸�',
        itemStyle:{
            color:'#9ea718'
        },
            children:[{
                name:'434164',
                value:1
            }],
    },{
        name:'����С˵',
        itemStyle:{
            color:'#c94a44'
        },
            children:[{
                name:'456879',
                value:1
            }],
    },{
        name:'�ϵ�֮��',
        itemStyle:{
            color:'#0aa3b5'
        },
            children:[{
                name:'195168',
                value:1
            }],
    },{
        name:'��',
        itemStyle:{
            color:'#a2bb2b'
        },
            children:[{
                name:'125771',
                value:1
            }],
    },{
        name:'�ǳ����ɷ�',
        itemStyle:{
            color:'#e0719c'
        },
            children:[{
                name:'281438',
                value:1
            }],
    },{
        name:'��Ĭ�ĸ���',
        itemStyle:{
            color:'#975e6d'
        },
            children:[{
                name:'262019',
                value:1
            }],
    },{
        name:'������',
        itemStyle:{
            color:'#718933'
        },
            children:[{
                name:'299235',
                value:1
            }],
    },{
        name:'������Ƭ',
        itemStyle:{
            color:'#b09733'
        },
            children:[{
                name:'293026',
                value:1
            }],
    },{
        name:'���ɱ�ֲ�̫��',
        itemStyle:{
            color:'#a2b029'
        },
            children:[{
                name:'215135',
                value:1
            }],
    },{
        name:'����X����',
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
    name:'����',
    value:10,
    children: [
    {
        name: '����֮·',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '47674',
            value: 1
        }],
    },{
        name: '������',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '204492',
            value: 1
        }],
    },{
        name: 'ɱ��һֻ֪����',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '87145',
            value: 1
        }],
    },{
        name: '��ˮ��',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '224785',
            value: 1
        }],
    },{
        name: '��ǻ���',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '172905',
            value: 1
        }],
    },{
        name: '�����漣',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '213980',
            value: 1
        }],
    },{
        name: '͵���г�����',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '29591',
            value: 1
        }],
    },{
        name: '������ˡ',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '105373',
            value: 1
        }],
    },{
        name: '��ͷ����',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '43440',
            value: 1
        }],
    },{
        name: '��Ѫ��',
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
    name:'��ɫ',
    value:9,
    children:[
    {
        name: '������',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '58351',
            value: 1
        }],
    },{
        name: '˫���⳥',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '39395',
            value: 1
        }],
    },{
        name: '�������ӥ',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '54036',
            value: 1
        }],
    },{
        name: '���ټ���',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '34292',
            value: 1
        }],
    },{
        name: '�г��ϵ�İ����',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '36539',
            value: 1
        }],
    },{
        name: '���˼�',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '33092',
            value: 1
        }],
    },{
        name: 'ҹ���ζ�',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '30470',
            value: 1
        }],
    },{
        name: '���˵�ҹ��',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '27188',
            value: 1
        }],
    },{
        name: 'ɱ��',
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
    name:'����',
    value:10,
    children:[
   {
        name: '��������',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '108566',
            value: 1
        }],
    },{
        name: '��������',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '323452',
            value: 1
        }],
    },{
        name: '��ʹ������',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '204214',
            value: 1
        }],
    },{
        name: '����֮��',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '29928',
            value: 1
        }],
    },{
        name: '���õ�ӰԺ',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '48732',
            value: 1
        }],
    },{
        name: '������',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '58519',
            value: 1
        }],
    },{
        name: 'ƶ��ߵİ�����',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '191432',
            value: 1
        }],
    },{
        name: 'һҹ����',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '26571',
            value: 1
        }],
    },{
        name: '��������',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '128414',
            value: 1
        }],
    },{
        name: '����',
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
    name:'ϲ��',
    value:10,
    children:[
    {
        name: '�氮��ʿ',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '163038',
            value: 1
        }],
    },{
        name: '�������',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '39856',
            value: 1
        }],
    },{
        name: 'ƭ��ƭ',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '69676',
            value: 1
        }],
    },{
        name: '������',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '21275',
            value: 1
        }],
    },{
        name: '�»�',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '159565',
            value: 1
        }],
    },{
        name: '�����Ĺ���',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '15764',
            value: 1
        }],
    },{
        name: '��������',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '157689',
            value: 1
        }],
    },{
        name: '��������һ��',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '99842',
            value: 1
        }],
    },{
        name: '17������',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '21741',
            value: 1
        }],
    },{
        name: '���������',
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
    name:'����',
    value:6,
    children:[
   {
        name: '���οռ�',
        itemStyle: {
            color:'#5e9a80'
        },
        children: [{
            name: '363056',
            value: 1
        }],
    },{
        name: '������ǰ��2���ڰ���ʿ',
        itemStyle: {
            color:'#a2b029'
        },
        children: [{
            name: '539279',
            value: 1
        }],
    },{
        name: 'ָ���������߹���',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '417772',
            value: 1
        }],
    },{
        name: '�����ս�����۹�����ս',
        itemStyle: {
            color:'#718933'
        },
        children: [{
            name: '293597',
            value: 1
        }],
    },{
        name: '����ʿ',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '102591',
            value: 1
        }],
    },{
        name: '�ڿ͵۹�',
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
    name:'��ʷ',
    value:4,
    children:[
   {
        name: '�Ƕ�ʿ',
        itemStyle: {
            color:'#a2bb2b'
        },
        children: [{
            name: '297724',
            value: 1
        }],
    },{
        name: '����',
        itemStyle: {
            color:'#0aa3b5'
        },
        children: [{
            name: '61990',
            value: 1
        }],
    },{
        name: '�ʵش�',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '54269',
            value: 1
        }],
    },{
        name: 'ʥŮ��µ�����',
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
    name:'����',
    value:2,
    children:[
     {
        name: 'Ī����',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '102730',
            value: 1
        }],
    },{
        name: '��Ұ����',
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
    name:'��ͥ',
    value:3,
    children:[
     {
        name: 'ǧ��ǧѰ',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '109544',
            value: 1
        }],
    },{
        name: '�ص�δ��',
        itemStyle: {
            color:'#975e6d'
        },
        children: [{
            name: '217018',
            value: 1
        }],
    },{
        name: '�Խ��',
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
    name:'����',
    value:3,
    children:[
   {
        name: '�����ܶ�Ա',
        itemStyle: {
            color:'#b09733'
        },
        children: [{
            name: '177757',
            value: 1
        }],
    }, {
        name: 'ǧ��ǧѰ',
        itemStyle: {
            color:'#e0719c'
        },
        children: [{
            name: '109544',
            value: 1
        }],
    },{
        name: '��è',
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
    name:'�ƻ�',
    value:3,
    children:[
     {
        name: '����',
        itemStyle: {
            color:'#9ea718'
        },
        children: [{
            name: '190930',
            value: 1
        }],
    },{
        name: '�󶼻�',
        itemStyle: {
            color:'#c94a44'
        },
        children: [{
            name: '42543',
            value: 1
        }],
    },{
        name: '����ɱ��',
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

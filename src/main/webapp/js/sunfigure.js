var myChart = echarts.init(document.getElementById('sunburst'));

var app = {};
option = null;
// �������壺��ݣ����У�רҵ�������������
var data = [{
name: '2021��',
  itemStyle: {
       color: '#ddaf61'
    },
children: [{
    name: '����',
    //value: 7,
    children: [{
        name: '���Ͽ�ѧ/\n�빤��',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '2��',
            value:1
            }],
    },{
        name: '��е��',
        itemStyle: {
            color: '#c94a44'
        },
        children: [{
            name: '3��',
            value:1
            }],
    },{
        name: '��ľ����',
        itemStyle: {
            color: '#0aa3b5'
        },
        children: [{
            name: '2��',
            value:1
            }],
    }],
},{
    name: '����',
    //value: 11,
    children: [{
        name: '������Ϣ��',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '8��',
            value:1
            }],
    },{
        name: '�Զ�����',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '7��',
            value:1
            }],
    }, {
        name: '�������',
         itemStyle: {
            color: '#e0719c'
        },
         children: [{
            name: '21��',
            value:2
            }],
    }, {
        name: '�������',
         itemStyle: {
            color: '#975e6d'
        },
         children: [{
            name: '10��',
            value:2
            }],
    }, {
        name: '��ľ����',
         itemStyle: {
            color: '#0aa3b5'
          },
          children: [{
            name: '6��',
            value:1
            }],
    }],
},{
    name: 'ɽ��',
    //value: 16,
    children: [{
        name: '���Ͽ�ѧ\n�빤��',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '58��',
            value:6
            }],
    },{
        name: '�Զ�����',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '46��',
            value:5
            }],
    },{
        name: '������Ϣ��',
        itemStyle: {
            color: '#718933'
        },
        children: [{
            name: '81��',
            value:9
            }],
    }, {
        name: '�������̼���\n�Զ���',
         itemStyle: {
            color: '#b09733'
        },
        children: [{
            name: '20��',
            value:3
            }],
    }, {
        name: '��Դ����ϵ',
         itemStyle: {
            color: '#a2b029'
         },
        children: [{
            name: '7��',
            value:1
            }],
    }, {
        name: '�������',
        itemStyle: {
            color: '#5e9a80'
        },
        children: [{
            name: '58��',
            value:6
            }],
    }, {
        name: '��ͨ����',
         itemStyle: {
            color: '#f7a128'
        },
        children: [{
            name: '25��',
            value:3
            }],
    }, {
        name: '������\n���󹤳�',
        itemStyle: {
            color: '#dd4c51'
        },
        children: [{
            name: '36��',
            value:4
            }],
    }, {
        name: '��е��',
        itemStyle: {
            color: '#c94a44'
         },
         children: [{
            name: '36��',
            value:4
            }],
    },{
        name: '��ѧ��',
         itemStyle: {
            color: '#9db2b7'
          },
         children: [{
            name: '21��',
            value:3
            }],
    },{
        name: '�����Ϣ��ѧ\n�빤��',
         itemStyle: {
            color: '#caa465'
        },
         children: [{
            name: '18��',
            value:2
            }],
    },{
        name: '�������',
         itemStyle: {
            color: '#e0719c'
        },
         children: [{
            name: '43��',
            value:5
            }],
    },{
        name: '�������',
         itemStyle: {
            color: '#975e6d'
        },
         children: [{
            name: '46��',
            value:5
            }],
    },{
        name: '������\n���﹤��',
         itemStyle: {
            color: '#ddaf61'
        },
         children: [{
            name: '41��',
            value:5
            }],
    },{
        name: '��ľ����',
         itemStyle: {
            color: '#0aa3b5'
          },
          children: [{
            name: '35��',
            value:4
            }],
    }],
},{
    name: '������',
    //value: 13,
    children: [{
        name: '���Ͽ�ѧ\n�빤��',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '4��',
            value:1
            }],
    },{
        name: '�Զ�����',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '4��',
            value:1
            }],
    },{
        name: '������Ϣ��',
        itemStyle: {
            color: '#718933'
        },
        children: [{
            name: '6��',
            value:1
            }],
    }, {
        name: '�������̼���\n�Զ���',
         itemStyle: {
            color: '#b09733'
        },
        children: [{
            name: '4��',
            value:1
            }],
    }, {
        name: '��������',
        itemStyle: {
            color: '#5e9a80'
        },
        children: [{
            name: '6��',
            value:1
            }],
    },  {
        name: '�������',
         itemStyle: {
            color: '#e0719c'
        },
         children: [{
            name: '16��',
            value:1
            }],
    },{
        name: '�������',
         itemStyle: {
            color: '#975e6d'
        },
         children: [{
            name: '22��',
            value:1
            }],
    },{
        name: '��ľ����',
         itemStyle: {
            color: '#0aa3b5'
          },
          children: [{
            name: '6��',
            value:1
            }],
    }],
},{
    name: '�Ϻ�',
    //value: 5,
    children: [{
         name: '�Զ�����',
         itemStyle: {
            color: '#a2bb2b'
        },
        children: [{
            name: '2��',
            value:1
            }],
    }, {
        name: '�������',
         itemStyle: {
            color: '#e0719c'
        },
          children: [{
            name: '6��',
            value:1
            }],
    }],
},{
    name: '����',
    //value: 6,
    children: [{
        name: '���Ͽ�ѧ\n�빤��',
        itemStyle: {
            color: '#9ea718'
        },
        children: [{
            name: '2��',
            value:1
            }],
    },{
        name: '�Զ�����',
         itemStyle: {
            color: '#a2bb2b'
        },
         children: [{
            name: '7��',
            value:1
            }],
    },  {
        name: '��ľ����',
         itemStyle: {
            color: '#0aa3b5'
        },
            children: [{
            name: '2��',
            value:1
            }],
    }],
}],

}];

option = {
backgroundColor: 'grey',
title: {
    text: '2021�� ��ͬʡ�ݸ�רҵ��¼ȡ����',
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

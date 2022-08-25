var myChart = echarts.init(document.getElementById('radarchart'));

function initInterest() {
    var data=[
        {
            value: [4, 7, 2, 3, 5, 7],
            name: '����',

            lineStyle: {
                normal: {
                    color: '#46daff'
                }
            },
            itemStyle: {
                normal: {
                    color: "#46daff",
                }
            }
        },
        {
            value: [7, 2, 6, 5, 4, 2],
            name: 'Ů��',
            lineStyle: {
                normal: {
                    color: 'orange'
                }
            },
            itemStyle: {
                normal: {
                    color: 'orange',
                }
            }
        }
    ];
    var option = {
        backgroundColor: 'dark blue',
        title: {
            text: '',
            subtext: '',
            top: 10,
            left: 10
        },
        legend:{
            data:["����","Ů��"],
            top:200,
            right:500,
            orient:"vertical",
            textStyle:{
                color:"white"
            }
        },
        tooltip: {
            show: true,
            trigger: "item"
        },
        radar: {
            center: ["50%", "50%"],//ƫ��λ��
            radius: "60%",
            startAngle: 40, // ��ʼ�Ƕ�
            splitNumber: 4,
            shape: "circle",
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize:30
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 20,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                   color: "rgba(255, 255, 255, 0.5)"
                }
            },
            indicator: [
                { text: '����', max: 10},
                { text: '����', max: 10},
                { text: '����', max: 10},
                { text: '����', max: 10},
                { text: '����', max: 10},
                { text: '�鷨', max: 10}
            ]
        },
        series: [{
            name: 'ѧ����Ȥ���÷ֲ�',
            type: 'radar',
            data: data,

        }]
    };

    myChart.setOption(option);
}

initInterest();
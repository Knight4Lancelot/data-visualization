var myChart = echarts.init(document.getElementById('barchart'));

// ָ��ͼ��������������
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

            axisPointer: { // ������ָʾ���������ᴥ����Ч

                type: 'shadow' // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["һ��","����","����","�İ�","���","����"],

            axisTick: { //---������ �̶�

                show: true, //---�Ƿ���ʾ

            },

            axisLine: { //---������ ����

                show: true, //---�Ƿ���ʾ

                lineStyle: {

                    //color: 'rgba(255,255,255,.1)',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X������

                textStyle: {

                    fontSize: 12,

                    //color: '#fff'

                },

            },

        },

        yAxis: {

            type: 'value',

            splitLine: {//�ָ���

                show: true,

                lineStyle: {
                    //color: 'rgba(255,255,255,.1)',

                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y��̶�ֵ

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,

                    //color: '#fff'

                },

            },

            axisLine: { //---������ ����

                show: false, //---�Ƿ���ʾ

            },

        },

        series: [{

            name: 'Ӣ��',

            type: 'bar',

            stack: 'you',

            data: [91, 87, 84, 89, 93, 85],

            //barWidth: 15,

            //barGap: 0.5, //����֮���� //��ͼ���      ���������Ҫ���ã�����series �ж�Ӧ�������ε�itemStyle�����µ�emphasis��normal��barBorderRadius���Գ�ʼ��ʱ��Բ��  �������ȥԲ��
        }, {

            name: '����',

            type: 'bar',

            stack: 'you',

            data: [76, 72, 85,82, 80, 89],
           // barWidth: 15, //��ͼ���
           // barGap: 0.5,
        }]

    };
        // ʹ�ø�ָ�����������������ʾͼ��
        myChart.setOption(option);
}

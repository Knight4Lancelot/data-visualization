var myChart = echarts.init(document.getElementById('barchart'));
var rankList = document.getElementsByClassName('rank-item');
// ָ��ͼ��������������
initGrades();




function initGrades(){
    for (let i = 0; i < rankList.length; i++) {
        rankList[i].style.top = String(80+35*i) + 'px';
    }
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
                type: 'line' // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [
                "21", 
                "20", "19", "18", "17", "16",
                "15", "14", "13", "12", "11",
                "10", "9", "8", "7", "6",
                "5", "4", "3", "2", "1"
            ],
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
                    fontSize: 20,
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
                    fontSize: 20,
                    //color: '#fff'
                },
            },
            axisLine: { //---������ ����
                show: false, //---�Ƿ���ʾ
            },
        },
        series: [{
            name: '����',
            type: 'bar',
            stack: 'you',
            data: [
                0,0,0,0,0,0,0,
                3.6,
                4.5,
                4.4,
                6.5,
                6.1,
                7.1,
                6.4,
                7.3,
                7.5,
                7.1,
                6.9,
                6.8,
                8.4,
                6.6
            ],
            barWidth: 30,
            //barGap: 0.5, //����֮���� //��ͼ���      ���������Ҫ���ã�����series �ж�Ӧ�������ε�itemStyle�����µ�emphasis��normal��barBorderRadius���Գ�ʼ��ʱ��Բ��  �������ȥԲ��
        }, {
            name: '��ӳ',
            type: 'bar',
            stack: 'you',
            data: [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
           barWidth: 30, //��ͼ���
           // barGap: 0.5,
        }, {
            name: '��Ȩ���',
            type: 'bar',
            stack: 'you',
            data: [
                2.001,2.003,2.004,2.006,2.022,2.030,2.031,
                3.711,4.503,4.991,6.636,6.917,7.122,7.395,
                7.433,7.582,8.243,8.974,10.397,11.1110,14.084],
           barWidth: 30, //��ͼ���
           // barGap: 0.5,
        }]
    };
        // ʹ�ø�ָ�����������������ʾͼ��
        myChart.setOption(option);
}

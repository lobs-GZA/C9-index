// 基于准备好的dom，初始化echarts实例
let chartThree = echarts.init(document.getElementById('chart-three'));

// 指定图表的配置项和数据
let option_3 = {
    tooltip: {},
    radar: {
        indicator: [
            { name: '', max: 6500},
            { name: '', max: 16000},
            { name: '', max: 30000},
            { name: '', max: 38000},
            { name: '', max: 52000},
            { name: '', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
chartThree.setOption(option_3);
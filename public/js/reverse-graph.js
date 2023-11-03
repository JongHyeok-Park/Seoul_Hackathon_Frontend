const speedGraph = $('.graph-lists');

$.ajax({
    url: `https://${config.ServerUrl}/api/reverse-run/week`,
    type: 'GET',
    success: function (res) {
        let arr = [];

        Object.keys(res).forEach(k => {
            let template = `
            <li><span class="day">${k}</span><span class="bar-graph" data-day="mon" data-per="${res[k]}"></span></li>`
            speedGraph.append(template);
            arr.push([k, res[k]]);
        })


        for(let i = 0; i < 7; i++) {
            $('.graph-lists > li > .bar-graph').eq(i).css('width', $('.graph-lists > li > .bar-graph').eq(i).data('per') + "%");
        }

        arr.sort((a, b) => b[1] - a[1]);
        let index;
        switch (arr[0][0]) {
            case '월': index = 0; break;
            case '화': index = 1; break;
            case '수': index = 2; break;
            case '목': index = 3; break;
            case '금': index = 4; break;
            case '토': index = 5; break;
            case '일': index = 6; break;
        }

        console.log(index);
        $('.bar-graph').eq(index).addClass("rank");
    }
})
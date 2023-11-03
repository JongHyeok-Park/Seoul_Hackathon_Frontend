const chartRank = $('#ranking-time');
const chart = $('.chart-bar');

$.ajax({
    url: `https://${config.ServerUrl}/api/reverse-run/time`,
    type: 'GET',
    success: function (res) {
        let times = Object.keys(res);
        let per = Object.values(res);
        let arr = [];

        let attribute = "";
        times.forEach((t, i) => {
            let sector = (Number(t) / 24 * 360).toString();
            attribute = attribute + "#CFBFFF " + sector + "deg, " + "#6A43D7 " + sector + "deg, " + "#6A43D7 " + (Number(sector) + 15).toString() + "deg, " + "#CFBFFF "
                + (Number(sector) + 15).toString() + "deg, ";

            arr.push([t, res[t]]);
        })
        arr.sort((a, b) => b[1] - a[1]);

        arr.forEach((a, i) => {
            let template;
            template = `<li>0${i + 1}<span>${Number(a[0])}:00 ~ ${Number(a[0]) + 1}:00</span></li>`;
            chartRank.append(template);
        })
        attribute = attribute.substring(0, attribute.length - 2);

        chart.css("background", `conic-gradient(${attribute})`);
    }
})

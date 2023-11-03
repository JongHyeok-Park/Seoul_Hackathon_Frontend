const place = $('#ranking-place');

$.ajax({
    url: `https://${config.ServerUrl}/api/reverse-run/region`,
    type: 'GET',
    success: function (res) {
        Object.keys(res).forEach((k, i) => {
            let template = `
                <li>0${i + 1}<span>${k}</span></li>`;
            place.append(template);
        })

    }
})
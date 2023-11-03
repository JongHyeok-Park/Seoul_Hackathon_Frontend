const speedTable = $('#speed-table');
const socket = new WebSocket(`ws://${config.ServerUrl}/speed`);

function toDate(date) {
    let yyyy = date.substring(0, 4);
    let mm = date.substring(5, 7);
    let dd = date.substring(8, 9);
    mm = Number(mm) - 1;

    let stringNewDate = new Date(yyyy, mm, dd);
    stringNewDate.setDate(stringNewDate.getDate());

    return ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
        "/" + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString());
}

function toTimeNew(nowDate) {
    return nowDate.substring(11, 16);
}

socket.onmessage = function (e) {
    let data = JSON.parse(e.data);
    let template;

    template = `
        <tr>
            <td>${toDate(data.created_at)}</td>
            <td>${toTimeNew(data.created_at)}</td>
            <td>${data.region}</td>
            <td class="speed-data">${data.speed}km/h</td>
        </tr>
    `;
    speedTable.append(template);

    $('.log-container').animate( { scrollTop : speedTable.height() }, 100);
}
const speedTable = $('#speed-table');
const socket = new WebSocket(`wss://${config.ServerUrl}/speed`);

function toDate(date) {
    let yyyy = date.substring(0, 4);
    let mm = date.substring(5, 7);
    let dd = date.substring(8, 10);

    return mm + "/" + dd;
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
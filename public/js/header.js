const date = $('#date');
const time = $('#time');

function toLongDate(stringNewDate) {
    stringNewDate.setDate(stringNewDate.getDate());

    let result;
    switch (stringNewDate.getDay()) {
        case 0: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 일요일";
            break;
        case 1: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 월요일";
            break;
        case 2: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 화요일";
        break;
        case 3: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 수요일";
            break;
        case 4: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 목요일";
            break;
        case 5: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 금요일";
            break;
        case 6: result = stringNewDate.getFullYear() +
            "년 " + ((stringNewDate.getMonth() + 1) > 9 ? (stringNewDate.getMonth() + 1).toString() : "0" + (stringNewDate.getMonth() + 1)) +
            "월 " + (stringNewDate.getDate() > 9 ? stringNewDate.getDate().toString() : "0" + stringNewDate.getDate().toString()) + "일 토요일";
            break;
    }

    return result;
}

function toTime(nowDate) {
    return (nowDate.getHours().toString().length < 2 ? "0" + nowDate.getHours() : nowDate.getHours()) + "<span class='blink'>:</span>" +
        (nowDate.getMinutes().toString().length < 2 ? "0" + nowDate.getMinutes() : nowDate.getMinutes());
}

date.html(toLongDate(new Date(Date.now())));
time.html(toTime(new Date(Date.now())))

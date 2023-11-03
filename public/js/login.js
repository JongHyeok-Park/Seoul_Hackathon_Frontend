const loginCode = new URL(window.location).searchParams.get("code");
const accessTime = 2 * 60;
const refreshTime = 24 * 60 * 7;

if (!!loginCode) {
    $.get("https://" + config.ServerUrl + `/api/auth/login?code=${loginCode}`).then((res) => {
        setCookie('AccessToken', res.accessToken, accessTime);
        setCookie('RefreshToken', res.refreshToken, refreshTime);
        window.location.href = '/Reverse.html';
    }).catch(() => {
        alert("로그인에 실패했습니다. 관리자에게 문의하세요.");
    })
} else {
    alert('잘못된 접근입니다.');
    window.location.href = '/Reverse.html';
}
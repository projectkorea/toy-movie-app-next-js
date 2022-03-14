### api parameter 수정시

- fetch(`/api/foo=bar&key=val`)

{
source: "/api/:params",
destination: `https://some.api/items?key=${API_KEY}&:params`
}
destination에서 "&:" 부분을 그대로 인식하지 않고 "&\__ESC_COLON_" 이라는 문자열로 바꿔버립니다.
그렇기 때문에 destination을 다음과 같이 바꿔주어야 합니다.
`https://some.api/items?key=${API_KEY}${encodeURIComponent("&")}:params`
이렇게 하면 :params로 넘어온 문자열이 &와 문제없이 결합합니다.

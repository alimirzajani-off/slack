var headers = new Headers();
var webSocketHeaders = new Headers();

headers.append("Accept", "*/*");
headers.append("Content-Type", "application/x-www-form-urlencoded");
headers.append(
  "Authorization",
  "Bearer xoxb-2634727642903-2679813447588-q1LuUdCsO3M8o1J6dHjPItUz"
  // xoxb-871193136326-2636258248070-hpHuTnmgDLmug3MSg5cIyJ9P
  //"wss://wss-primary.slack.com/link/?ticket=ec1732b3-66b0-40c2-ac93-e48f76cc3b8a&app_id=3949272e5d3454e4abfe7aaa7f49dec426315d7985e9e7fb0a075fde8ecb997d"
);

webSocketHeaders.append("Accept", "*/*");
webSocketHeaders.append("Content-Type", "application/x-www-form-urlencoded");
webSocketHeaders.append(
  "Authorization",
  "Bearer xoxb-2634727642903-2679851625684-SFxkBWB0wj55TQXaQFuEuFak"
);

var url = "https://slack.com/api";
var WebSocketApi = "";

export const fetchChannelList = () => async (dispatch) => {
  const response = await fetch(`${url}/conversations.list`, {
    method: "post",
    headers: headers,
  });
  const data = await response.json();
  console.log(data);
  dispatch({ type: "FETCH_CHANNEL_LIST", payload: data.channels });
};

export const fetchDirectList = () => async (dispatch) => {
  const response = await fetch(`${url}/users.list`, {
    method: "post",
    headers: headers,
  });
  const data = await response.json();
  dispatch({ type: "FETCH_DIRECT_LIST", payload: data.members });
};

export const fetchMessage = (id) => async (dispatch) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("channel", `${id}`);
  const response = await fetch(`${url}/conversations.history`, {
    method: "post",
    headers: headers,
    body: urlencoded,
  });
  const data = await response.json();
  if (data.messages) {
    dispatch({ type: "FETCH_MESSAGE", payload: data.messages });
  }
};

export const fetchPostMessage = (id, messagedata) => async (dispatch) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("channel", `${id}`);
  urlencoded.append("text", `${messagedata}`);
  const response = await fetch(`${url}/chat.postMessage`, {
    method: "post",
    headers: headers,
    body: urlencoded,
  });
  dispatch({ type: "FETCH_POST_MESSAGE" });
};

export const fetchDeleteMessage = (id, ts) => async (dispatch) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("channel", `${id}`);
  urlencoded.append("ts", `${ts}`);
  const response = await fetch(`${url}/chat.delete`, {
    method: "post",
    headers: headers,
    body: urlencoded,
  });
};

export const fetchLeaveChannel = (id) => async (dispatch) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("channel", `${id}`);
  const response = await fetch(`${url}/conversations.leave`, {
    method: "post",
    headers: headers,
    body: urlencoded,
  });
};

export const fetchJoinChannel = (id) => async (dispatch) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("channel", `${id}`);
  const response = await fetch(`${url}/conversations.join`, {
    method: "post",
    headers: headers,
    body: urlencoded,
  });
};

export const fetchWebSocket = (id) => async (dispatch) => {
  const response = await fetch(`${url}/rtm.connect`, {
    method: "post",
    headers: webSocketHeaders,
  });
  const data = await response.json();
  console.log(data);
  WebSocketApi = `${data.url}`;
  const ur = WebSocketApi;
  const websocket = new WebSocket(ur);
  // websocket.onopen = () => console.log('hi')
  websocket.onmessage = (data) => dispatch(fetchMessage(id));
};

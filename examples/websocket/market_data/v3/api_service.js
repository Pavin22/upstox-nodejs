var UpstoxClient = require("upstox-js-sdk");
const WebSocket = require("ws").WebSocket;

let defaultClient = UpstoxClient.ApiClient.instance;
let apiVersion = "2.0";
let OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIzNkFXR0giLCJqdGkiOiI2N2RiOWNjOWM1MGY4MTU4NjhjOTg1MGIiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaWF0IjoxNzQyNDQ1NzY5LCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3NDI1MDgwMDB9.N4CfAZ7447_IONS0yyBa-CsM8YTpOc8FNIBcxMik3PY"; // Replace "ACCESS_TOKEN" with your actual token
export const wsFetch=(wsUrl)=>{
    const ws = new WebSocket(wsUrl, {
        headers: {
          "Api-Version": apiVersion,
          Authorization: "Bearer " + OAUTH2.accessToken,
        },
        followRedirects: true,
      });
}

export const getMarketFeedUrl = async () => {
    return new Promise((resolve, reject) => {
      let apiInstance = new UpstoxClient.WebsocketApi(); // Create new Websocket API instance
  
      // Call the getMarketDataFeedAuthorize function from the API
      apiInstance.getMarketDataFeedAuthorize(
        apiVersion,
        (error, data, response) => {
          if (error) reject(error); // If there's an error, reject the promise
          else resolve(data.data.authorizedRedirectUri); // Else, resolve the promise with the authorized URL
        }
      );
    });
  };

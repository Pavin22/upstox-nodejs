// Import required modules
const WebSocket = require("ws").WebSocket;
const protobuf = require("protobufjs");
const axios = require("axios");
const {buyingAlgo} = require('../v3/buyingStock')

// Initialize global variables
let protobufRoot = null;
const accessToken = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIzNkFXR0giLCJqdGkiOiI2N2RiOWNjOWM1MGY4MTU4NjhjOTg1MGIiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaWF0IjoxNzQyNDQ1NzY5LCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3NDI1MDgwMDB9.N4CfAZ7447_IONS0yyBa-CsM8YTpOc8FNIBcxMik3PY"; // Replace "ACCESS_TOKEN" with your actual token

// Function to authorize the market data feed
const getMarketFeedUrl = async () => {
  const url = "https://api.upstox.com/v2/feed/market-data-feed/authorize";
  const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  };
  const response = await axios.get(url, { headers });
  return response.data.data.authorizedRedirectUri;
};

// Function to establish WebSocket connection
const connectWebSocket = async (wsUrl) => {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl, {
      followRedirects: true,
    });

    // WebSocket event handlers
    ws.on("open", () => {
      console.log("connected");
      resolve(ws); // Resolve the promise once connected

      // Set a timeout to send a subscription message after 1 second
      setTimeout(() => {
        const data = {
          guid: "someguid",
          method: "sub",
          data: {
            mode: "full",
            instrumentKeys: ["NSE_EQ|INE254N01026"],
          },
        };
        ws.send(Buffer.from(JSON.stringify(data)));
      }, 1000);
    });

    ws.on("close", () => {
      console.log("disconnected");
    });

    ws.on("message", (data) => {
      const output = JSON.stringify(decodeProfobuf(data));
      const currentValue = output.feeds["NSE_EQ|INE254N01026"].fullFeed.marketFF.ltpc 
      const oneDayValue = output.feeds["NSE_EQ|INE254N01026"].fullFeed.marketFF.marketOHLC.ohlc[0]
      const orderInput = {currentValue,oneDayValue}
      const orderStock = buyingAlgo(orderInput)
      console.log(output); // Decode the protobuf message on receiving it
    });

    ws.on("error", (error) => {
      console.log("error:", error);
      reject(error); // Reject the promise on error
    });
  });
};

// Function to initialize the protobuf part
const initProtobuf = async () => {
  protobufRoot = await protobuf.load(__dirname + "/MarketDataFeedV3.proto");
  console.log("Protobuf part initialization complete");
};

// Function to decode protobuf message
const decodeProfobuf = (buffer) => {
  if (!protobufRoot) {
    console.warn("Protobuf part not initialized yet!");
    return null;
  }

  const FeedResponse = protobufRoot.lookupType(
    "com.upstox.marketdatafeederv3udapi.rpc.proto.FeedResponse"
  );
  return FeedResponse.decode(buffer);
};

// Initialize the protobuf part and establish the WebSocket connection
(async () => {
  try {
    await initProtobuf(); // Initialize protobuf
    const wsUrl = await getMarketFeedUrl(); // Get the market feed URL
    const ws = await connectWebSocket(wsUrl); // Connect to the WebSocket
    
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();

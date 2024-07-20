exports.handler = async (event, context, callback) => {
  console.log("event>>>>>>>>>>>>", event);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, World!",
    }),
  };
  callback(null, response);
};

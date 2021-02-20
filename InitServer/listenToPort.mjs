export const ListenToPort = async (http, path) => {
  http.listen(process.env.port, function () {
    console.log(`listening on *:${process.env.port}`);
  });
};
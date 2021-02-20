export const routes = async (app) => {
  app.get('/', function (req, res) {
    res.render("bd", {
      layout: false,
      mainUrl: `${process.env.mainUrl}`
    });
  });
}
export default (app, { r }, next) => {
    app.get("/", async (request, reply) => {
        return "movies";
      });      
    next()
}

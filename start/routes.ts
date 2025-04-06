import router from "@adonisjs/core/services/router";

/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const SearchQueriesController = () =>
  import("#controllers/search_queries_controller");

router.get("/", async () => {
  return {
    hello: "world",
  };
});

router.get("/elo", async () => {
  return "żelo";
});

router.post("/test", [SearchQueriesController, "store"]);

import { App } from "./index";

(async () => {
  const app = new App();

  try {
    await app.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

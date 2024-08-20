import productsMigration from "./products.js";
import usersMigration from "./users.js";

async function main() {
  await usersMigration();
  await productsMigration();
}

main();

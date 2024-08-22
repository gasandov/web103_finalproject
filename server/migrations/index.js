import accountsMigration from "./accounts.js";
import categoriesMigration from "./categories.js";
import expensesMigration from "./expenses.js";
import usersMigration from "./users.js";

async function main() {
  await usersMigration();
  await categoriesMigration();
  await accountsMigration();
  await expensesMigration();

  process.exit(0);
}

main();

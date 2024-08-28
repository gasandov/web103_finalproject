import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Fragment>
      <div className="p-4 flex flex-row justify-between items-center">
        <h1>Expenses Management</h1>
        {/* <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div> */}
        <nav>
          <ul className="flex flex-row justify-between items-center gap-x-4">
            <li>
              <Link to={`expenses/create`}>Create Expense</Link>
            </li>
            <li>
              <Link to={`expenses`}>Expenses List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
}

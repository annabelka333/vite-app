import { Outlet } from "react-router-dom";
//to do: create greeting components, footer and header component 
export default () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet/>
      </main>
      <footer>
        Made by Anna V.
      </footer>
    </>
  );
};

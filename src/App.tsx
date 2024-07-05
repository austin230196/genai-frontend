import {RouterProvider, createBrowserRouter} from "react-router-dom";

import { AppWrapper } from "./styles";
import Search from "./pages/Search";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Search
  }
]);


const App = () => {


  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  )
}


export default App;
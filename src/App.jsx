import {router} from './Route.jsx';
import { RouterProvider } from "react-router/dom";

export const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

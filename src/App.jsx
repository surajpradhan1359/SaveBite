import {router} from './Route';
import { RouterProvider } from 'react-router';

export const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

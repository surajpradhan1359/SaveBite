import {Navbar} from './components/Navbar';
import {Body} from './components/Body';
import { Eat } from './components/Eat';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Eat/>
    </div>
  )
}

import './css/App.css'
import routes from './routes';
import { useRoutes } from "react-router"
import TopBar from './components/topbar/Topbar';
import SideBar from './components/sidebar/Sidebar';

function App() {

  let router = useRoutes(routes)
  return (
    <>
      <TopBar />
        <div className="container">
          <SideBar />
          {router}
        </div>
    </>
  );
}

export default App;

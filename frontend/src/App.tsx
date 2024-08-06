import Sidebar from './components/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
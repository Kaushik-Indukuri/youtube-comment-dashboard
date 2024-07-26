import Sidebar from './components/Sidebar.tsx';
import TableHeader from './components/TableHeader.tsx';
import Header from './components/Header.tsx';
import DataTable from './components/DataTable.tsx';
import Overview from './components/Overview.tsx';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <Header />
          <div className="p-5">
            <Overview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
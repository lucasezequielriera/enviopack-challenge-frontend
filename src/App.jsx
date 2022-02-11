import Navbar from "./components/Navbar";
import DataProvider from './context/DataContext';

function App() {
  
  return (
    <DataProvider>
      <div className="App">
          <Navbar />
      </div>
    </DataProvider>
  );
}

export default App;

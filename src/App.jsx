import './App.css';
import Posts from './components/Posts';
import ReadingList from './components/ReadingList';
import AppProvider from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="ui-container">
        <ReadingList />
        <Posts />
      </div>
    </AppProvider>
  );
}

export default App;

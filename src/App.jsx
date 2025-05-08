import { AppProvider } from './context/AppContext';
import LikedSongsPage from './components/LikedSongsPage';
import PlayerControls from './components/PlayerControls';

function App() {
  
  return (
    <AppProvider>
      <div className="relative min-h-screen">
        <div className="md:hidden">
            <LikedSongsPage />
        </div>
        <div className="hidden md:flex">
          <div className="w-full h-screen overflow-y-auto">
            <LikedSongsPage />
          </div>
        </div>
        <PlayerControls />
      </div>
    </AppProvider>
  );
}

export default App;
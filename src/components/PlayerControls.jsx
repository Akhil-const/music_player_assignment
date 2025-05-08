import { useAppContext } from '../context/AppContext';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const PlayerControls = () => {
  const { currentSong, isPlaying, togglePlay, progress } = useAppContext();
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-[#141823] bg-opacity-95 backdrop-blur-sm z-20 shadow-lg`}>
      <div className="w-full bg-gray-600 h-1">
        <div 
          className="bg-gray-200 h-1" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center p-3 justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title} 
            className="w-12 h-12 rounded" 
          />
          <div>
            <h3 className={`font-medium text-sm text-white`}>{currentSong.title}</h3>
            <p className="text-xs text-gray-400">{currentSong.artist}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-gray-300">
            <SkipBack size={20} />
          </button>
          <button 
            className={`bg-white text-black rounded-full p-1 hover:scale-110 transition-transform`}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="text-gray-400 hover:text-gray-300">
            <SkipForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
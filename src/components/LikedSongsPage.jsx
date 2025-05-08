import { useAppContext } from '../context/AppContext';
import SongCard from './SongCard';
import { ChevronLeft } from 'lucide-react';

const LikedSongsPage = () => {
  const { likedSongs } = useAppContext();
  
  return (
    <div className={`min-h-screen pb-24 bg-[#141823] text-white`}>
      <div className="pt-6 px-6">
        <div className="flex items-center mb-6">
          <button className="mr-4 hover:text-gray-400 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Liked Songs</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {likedSongs.map(song => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedSongsPage;
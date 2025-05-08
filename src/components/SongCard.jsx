import { useAppContext } from '../context/AppContext';

const SongCard = ({ song }) => {
  const { setCurrentSong, togglePlay } = useAppContext();
  
  const playSong = () => {
    setCurrentSong(song);
    togglePlay();
  };
  
  return (
    <div className="flex flex-col cursor-pointer transition-transform hover:scale-105" onClick={playSong}>
      <div className="aspect-square overflow-hidden rounded-lg shadow-md">
        <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-2 font-medium text-sm">{song.title}</h3>
      <p className="text-xs text-gray-400">{song.artist}</p>
    </div>
  );
};

export default SongCard;
import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({
    title: "Chaff & Dust",
    artist: "HYORINA",
    cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg"
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  

  const likedSongs = [
    {
      id: 1,
      title: "Believer",
      artist: "IMAGINE DRAGONS",
      cover: `https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg`
    },
    {
      id: 2,
      title: "Shortwave",
      artist: "RYAN GRIGORY",
      cover: "https://a.ltrbxd.com/resized/film-poster/3/3/5/8/6/0/335860-shortwave-0-2000-0-3000-crop.jpg?v=c6b2758b25"
    },
    {
      id: 3,
      title: "Dream On",
      artist: "ROGER TERRY",
      cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg"
    },
    {
      id: 4,
      title: "Origins",
      artist: "IMAGINE DRAGON",
      cover: "https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png"
    },
    {
      id: 5,
      title: "Drifting",
      artist: "GETHIN",
      cover: "https://a.ltrbxd.com/resized/film-poster/3/3/5/8/6/0/335860-shortwave-0-2000-0-3000-crop.jpg?v=c6b2758b25"
    },
    {
      id: 6,
      title: "Sunset Vibes",
      artist: "LUNA RAY",
      cover: "https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png"
    }
  ];

  return (
    <AppContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        togglePlay,
        progress,
        setProgress,
        likedSongs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
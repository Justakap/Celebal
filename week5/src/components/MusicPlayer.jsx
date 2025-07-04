import { useSelector, useDispatch } from 'react-redux';
import { playPause } from '../redux/playerSlice';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const handlePlayPause = () => {
    dispatch(playPause(!isPlaying));
  };

  return (
    <div className="fixed bottom-0 w-full bg-black p-4 text-white flex items-center justify-between">
      <div>{activeSong?.title || "No song playing"}</div>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;

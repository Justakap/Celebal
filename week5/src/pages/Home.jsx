import { useGetTopChartsQuery } from '../redux/services/shazam';

const Home = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading songs</div>;

  return (
    <div className="p-6">
      <h2 className="text-white text-3xl mb-4">Top Charts</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.tracks?.map((track, i) => (
          <div key={track.key} className="bg-gray-800 p-4 rounded">
            <img src={track.images.coverart} alt={track.title} className="rounded" />
            <p className="text-white mt-2">{track.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

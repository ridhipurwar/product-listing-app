function Loader() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse bg-white p-4 rounded shadow">
          <div className="h-32 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 mt-3 rounded"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;

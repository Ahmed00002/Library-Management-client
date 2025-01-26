const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-blur-sm z-50">
      <span className="loading loading-infinity loading-lg bg-blue-500"></span>
      <p className="tex-md font-medium">Loading</p>
    </div>
  );
};

export default Loading;

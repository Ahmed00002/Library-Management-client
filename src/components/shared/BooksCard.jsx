const BookCard = ({ book }) => {
  return (
    <div className="w-full bg-white mx-auto rounded-lg overflow-hidden p-2">
      <img
        src="https://m.media-amazon.com/images/I/61+sQqqA6hL._SL350_.jpg"
        alt={"title"}
        className="w-full  h-48 object-cover mx-auto"
      />
      <div className="">
        <h2 className="text-lg font-bold text-gray-800">Roar</h2>
        <p className="text-sm text-gray-600">by Ahmed Numan</p>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500 text-sm">rating : 5⭐</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

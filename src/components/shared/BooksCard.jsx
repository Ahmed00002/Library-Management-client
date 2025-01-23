import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const BookCard = ({ bookData }) => {
  const { image, title, rating, author, category } = bookData;
  return (
    <div className="bookCard w-full mx-auto rounded-lg overflow-hidden p-2 cursor-pointer  flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={"title"}
          className="w-full  h-48 object-cover mx-auto"
        />
      </div>
      {/* book rating */}
      <div className="mt-2 flex items-end">
        <div className="text-yellow-500 text-sm flex items-center gap-2">
          <p>{rating}</p>

          {
            <ReactStars
              count={5}
              value={rating}
              //   size={24}
              activeColor="#ffd700"
              isHalf={true}
              edit={false}
            />
          }
        </div>
      </div>
      {/* book name */}
      <div className="">
        <h2 className="text-md font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">by {author}</p>
        <p className="text-sm text-gray-600">Category: {category}</p>
      </div>
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  bookData: PropTypes.object,
};

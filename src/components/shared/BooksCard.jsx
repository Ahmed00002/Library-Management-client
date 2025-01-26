import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const BookCard = ({ bookData }) => {
  const { book, isButton } = bookData;
  const { _id, image, title, rating, author, category } = book;
  return (
    <>
      <div className="flex flex-col">
        <Link to={`/books/${_id}`}>
          <div
            className={`bookCard w-full mx-auto rounded-lg overflow-hidden p-2 cursor-pointer  flex flex-col`}
          >
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
                    size={24}
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
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span> {category}
              </p>
            </div>
          </div>
        </Link>
        {/* button */}
        {isButton && (
          <>
            <div className="grow flex items-end px-2">
              <Link className="w-full" to={`/books/edit/${_id}`}>
                <button className="btn btn-sm my-2 w-full rounded-sm bg-green-500 text-white hover:bg-green-600">
                  Update
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.object,
  bookData: PropTypes.object,
  isButton: PropTypes.string,
};

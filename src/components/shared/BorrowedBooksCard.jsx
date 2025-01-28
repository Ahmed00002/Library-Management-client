import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ReactStars from "react-rating-stars-component";

const BorrowedBookCard = ({ props }) => {
  const { book, handleReturn } = props;
  const axiosSecure = useAxiosSecure();
  const [bookDetails, setBookDetails] = useState(null);

  const { _id, borrowData, borrowedBookId, returnDate } = book;

  useEffect(() => {
    axiosSecure
      .get(`/books/${borrowedBookId}`)
      .then((res) => setBookDetails(res.data))
      .catch((err) => console.error(err));
  }, [axiosSecure, borrowedBookId]);

  // Provide fallback values
  const {
    image = "",
    title = "Unknown Title",
    rating = 0,
    author = "Unknown Author",
    category = "Uncategorized",
  } = bookDetails || {};

  // Show loading state until data is fetched
  if (!bookDetails) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div
        className={`${
          bookDetails || "skeleton"
        }bookCard w-full mx-auto rounded-lg overflow-hidden p-2 cursor-pointer flex flex-col`}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover mx-auto"
          />
        </div>

        {/* Book Rating */}
        <div className="mt-2 flex items-end">
          <div className="text-yellow-500 text-sm flex items-center gap-2">
            <p>{rating}</p>
            <ReactStars
              count={5}
              value={parseFloat(rating) || 0}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor={"#ffd700"}
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="text-gray-600 text-sm">
          <h2 className="text-md font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600">by {author}</p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p>
            Borrowed at: <span>{borrowData}</span>
          </p>
          <p>
            Return at:{" "}
            <span className="font-medium text-red-500">{returnDate}</span>
          </p>
        </div>
      </div>

      <div className="grow flex items-end px-2">
        <button
          onClick={() => handleReturn(borrowedBookId, _id)}
          className="btn btn-sm my-2 w-full rounded-sm bg-green-500 text-white hover:bg-green-600"
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default BorrowedBookCard;

BorrowedBookCard.propTypes = {
  props: PropTypes.object,
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    borrowData: PropTypes.string.isRequired,
    borrowedBookId: PropTypes.string.isRequired,
    returnDate: PropTypes.string.isRequired,
  }).isRequired,
  handleReturn: PropTypes.func.isRequired,
};

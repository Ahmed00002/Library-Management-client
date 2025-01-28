import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BorrowedBookCard = ({ props }) => {
  const axiosSecure = useAxiosSecure();

  const { book, handleReturn } = props;

  const [bookDetails, setBookDetails] = useState([]);
  const { _id, borrowData, borrowedBookId, returnDate } = book;

  useEffect(() => {
    axiosSecure
      .get(`/books/${borrowedBookId}`)
      .then((res) => setBookDetails(res.data));
  }, []);

  const { image, title, rating, author, category } = bookDetails;

  return (
    <>
      <div className="flex flex-col">
        <div
          className={`bookCard w-full mx-auto rounded-lg overflow-hidden p-2 cursor-pointer  flex flex-col`}
        >
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
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
    </>
  );
};

export default BorrowedBookCard;

BorrowedBookCard.propTypes = {
  book: PropTypes.object,
  bookData: PropTypes.object,
  isButton: PropTypes.string,
  props: PropTypes.object,
  handleReturn: PropTypes.func,
};

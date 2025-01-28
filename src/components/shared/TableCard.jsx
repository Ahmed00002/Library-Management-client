import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const TableCard = ({ bookData }) => {
  const { _id, image, title, rating, author, category } = bookData;

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">By {author}</div>
            </div>
          </div>
        </td>
        <td>
          {category}

          <div className="mt-2 flex items-end">
            <div className="text-yellow-500 text-sm flex items-center gap-2">
              <p>{rating}</p>

              {
                <ReactStars
                  count={5}
                  value={rating}
                  size={16}
                  activeColor="#ffd700"
                  isHalf={true}
                  edit={false}
                />
              }
            </div>
          </div>
        </td>
        <th className=" flex justify-end">
          <div className="space-x-2">
            <Link className="" to={`/books/edit/${_id}`}>
              <button className="btn btn-sm my-2  rounded-lg bg-green-500 text-white hover:bg-green-600">
                Update
              </button>
            </Link>
            <Link className="" to={`/books/${_id}`}>
              <button className="btn btn-sm my-2  rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                Borrow
              </button>
            </Link>
          </div>
        </th>
      </tr>
    </>
  );
};

export default TableCard;

TableCard.propTypes = {
  bookData: PropTypes.object,
};

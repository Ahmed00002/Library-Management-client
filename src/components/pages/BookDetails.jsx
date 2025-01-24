import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const BookDetails = () => {
  const bookDtls = useLoaderData();
  const { image, title, rating, author, category, description } = bookDtls;
  return (
    <div className="  min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Book Image */}
          <div className="w-full md:w-1/3">
            <img
              src={image}
              alt={`Books cover of ${title}`}
              className="rounded-lg shadow-lg w-full h-full "
            />
          </div>

          {/* Book Details */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold">{title}</h1>
            {/* book rating */}
            <div className="mt-2 flex items-end">
              <div className="text-yellow-500 text-lg flex items-center gap-2">
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
            <p className="text-lg mt-2">Book | {category}</p>
            <p className="text-md mt-1 text-gray-600">by {author}</p>

            <p className="text-gray-500 mt-4">
              <span className="font-semibold ">Description:</span> {description}
            </p>

            {/* Borrow Button */}
            <div className="mt-6">
              <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Borrow Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import BorrowModal from "../shared/modals/BorrowModal";
import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

const BookDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [bookDtls, setBookDtls] = useState(useLoaderData());
  const { _id, image, title, rating, author, category, description, quantity } =
    bookDtls;
  const [isOpen, setIsOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [isAlreadyBorrowed, setIsAlreadyBorrowed] = useState(false);
  const { user, setLoading } = useAuthContext();
  const today = new Date().toISOString().split("T")[0];

  // update book data after borrowing
  const refreshBookData = () => {
    axiosSecure.get(`/books/${_id}`).then((res) => {
      setBookDtls(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  //   fetch data from server and check if the book already borrowed by the user
  useEffect(() => {
    axiosSecure
      .get(`/user/borrowed?email=${user.email}&bookId=${_id}&validate=true`)
      .then((res) => {
        if (res.data.length !== 0) {
          setIsAlreadyBorrowed(true);
        }
      });
  }, [refreshBookData]);

  // function for open and close modal
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  // handle modal on submit
  const handleModalSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const userInfo = {
      returnDate: returnDate,
      userName: user.displayName,
      userEmail: user.email,
      bookTitle: title,
    };

    if (returnDate < today) {
      toast.error("Please select a future date");
      setLoading(false);
      return;
    }

    if (returnDate) {
      axiosSecure.post(`/books/borrow/${_id}`, userInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "You borrowed the book successfully. Kindly return it on time",
            icon: "success",
          });
          refreshBookData();
        }
      });
    } else {
      toast.error("Retrun date required");
      setLoading(false);
    }
    setIsOpen(false);
  };

  return (
    <>
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
                <span className="font-semibold ">Description:</span>{" "}
                {description}
              </p>

              {/* Borrow Button */}
              <div className="mt-6 flex gap-4 items-center">
                <button
                  disabled={isAlreadyBorrowed || quantity === 0 ? true : false}
                  onClick={openModal}
                  className={`${
                    quantity === 0
                      ? "bg-red-500"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white font-bold py-2 px-6 rounded-lg shadow-lg  transition duration-300 flex items-center gap-2`}
                >
                  {quantity !== 0 ? (
                    isAlreadyBorrowed ? (
                      <>
                        <CiBookmarkCheck className="text-xl" /> Borrowed
                      </>
                    ) : (
                      <>
                        <CiBookmark className="text-xl" /> Borrow Now
                      </>
                    )
                  ) : (
                    "Out of collections"
                  )}
                </button>
                <h1 className="bg-gray-200 text-green-500 font-medium py-2 px-6 rounded-lg shadow-lg  transition duration-300">
                  Available : {quantity}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <BorrowModal
          props={{
            setReturnDate,

            handleModalSubmit,
            title,
            quantity,
            openModal,
          }}
        ></BorrowModal>
      )}
    </>
  );
};

export default BookDetails;

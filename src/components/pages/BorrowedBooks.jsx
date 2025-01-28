import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuthContext from "../hooks/useAuthContext";
import BorrowedBookCard from "../shared/BorrowedBooksCard";
import { FaRegSadCry } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const axiosSecure = useAxiosSecure();
  //   const [bookData, setBookData] = useState([]);
  const [BorrowedBookData, setBorrowedBookData] = useState([]);
  const { user } = useAuthContext();
  const [isFetching, setIsFetching] = useState(true);

  //   get borrowed books of user through the email
  useEffect(() => {
    axiosSecure
      .get(`/user/borrowed?email=${user?.email}`)
      .then((res) => {
        setBorrowedBookData(res.data);
        setIsFetching(false);
        if (BorrowedBooks.length === 0) {
          setIsFetching(false);
        }
      })
      .catch(() => toast.error("Something went wrong"));
  }, [user?.email]);

  const refreshData = () => {
    axiosSecure
      .get(`/user/borrowed?email=${user?.email}`)
      .then((res) => setBorrowedBookData(res.data));
  };

  //   handle return book
  const handleReturn = (borrowedId, currentId) => {
    axiosSecure
      .get(`/return?bbId=${borrowedId}&cbId=${currentId}&email=${user.email}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refreshData();
          Swal.fire({
            title: "Successful",
            text: "Thanks for returning the books. Feel free to borrow again",
            icon: "success",
          });
        }
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  return (
    <>
      <section className="py-12 min-h-screen">
        <h1 className="text-center text-2xl font-medium">Borrowed Books</h1>
        <div className="flex justify-between items-center center resPadding pb-4">
          <h1 className="font-medium">All Books That You Borrowed </h1>
          <p>Available to return: {BorrowedBookData.length}</p>
        </div>
        {!isFetching && (
          // no books message
          <div
            className={`${
              BorrowedBookData.length !== 0 ? "hidden" : "block"
            } text-center space-y-4  flex flex-col justify-center items-center mt-12`}
          >
            <FaRegSadCry className="text-blue-500 text-6xl mx-auto" />
            <h1 className="text-lg font-bold text-gray-400">
              You Haven&apos;t borrowed any book yet
            </h1>
          </div>
        )}
        <div
          className={`${
            !isFetching && "grid"
          } grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 center resPadding`}
        >
          {isFetching ? (
            <div className="flex flex-col justify-center items-center py-12">
              <span className="loading loading-infinity loading-lg"></span>
              <p>Loading Data</p>
            </div>
          ) : (
            BorrowedBookData.map((book) => (
              <BorrowedBookCard key={book._id} props={{ book, handleReturn }} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default BorrowedBooks;

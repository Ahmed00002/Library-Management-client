import { useLoaderData } from "react-router-dom";
import BookCard from "../shared/BooksCard";
import { useState } from "react";
import TableCard from "../shared/TableCard";

const AllBooks = () => {
  const booksList = useLoaderData();
  const [viewAs, setViewAs] = useState("grid");

  const handleView = (e) => {
    setViewAs(e.target.value);
  };

  return (
    <>
      <section className="center resPadding  py-12">
        {/* section title and subtitle */}
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-3xl font-medium">Explore Our Collections</h1>
          <h2 className="text-gray-600">
            There&apos;s something for everybody
          </h2>
        </div>

        {/* sorting and layout */}
        <div className="flex justify-between mb-4">
          <button>Show Available Books</button>
          <div className="flex items-center gap-2">
            <p>View as</p>
            <select
              onChange={handleView}
              className="px-4 py-1 bg-blue-50 rounded-lg"
              name="layout"
              id="layout"
            >
              <option className="flex items-center justify-center" value="grid">
                Grid
              </option>
              <option value="table">table</option>
            </select>
          </div>
        </div>
        {/* all book list */}
        {viewAs === "grid" ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
              {booksList.map((book) => (
                <BookCard
                  key={book._id}
                  bookData={{ book, isButton: true }}
                ></BookCard>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Category & Rating</th>

                    <th className="flex justify-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {booksList.map((book) => (
                    <TableCard key={book._id} bookData={book} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default AllBooks;

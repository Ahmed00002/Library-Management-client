import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateBooks = () => {
  const axiosSecure = useAxiosSecure();
  const bookData = useLoaderData();
  const categories = [
    "Literature",
    "Social Sciences",
    "Applied Science",
    "Art and Recreation",
  ];

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const newBookData = {
      image: data.image,
      author: data.author,
      category: data.category,
      title: data.title,
      rating: data.rating,
      description: data.description,
      quantity: data.quantity,
    };

    // make post request
    axiosSecure
      .post(`/books/update/${bookData._id}`, newBookData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Book details updated successfully");
        }
      })
      .catch(() => {
        toast.error("Something went wrong try again");
      });
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gray-100 py-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Edit Book Details
          </h1>
          <form onSubmit={handleUpdateBook} className="space-y-4">
            {/* Upload Image */}
            <div>
              <label className="block font-medium text-gray-700">
                Book cover image
              </label>
              <input
                type="url"
                name="image"
                defaultValue={bookData.image}
                placeholder="Enter cover image url"
                className="mt-1 block w-full text-gray-800 border-gray-300 rounded-lg shadow-sm outline-none border px-2"
                required
              />
            </div>

            {/* Edit Name */}
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="title"
                defaultValue={bookData.title}
                placeholder="Enter book title"
                className="mt-1 block w-full text-gray-800 border-gray-300 rounded-lg shadow-sm outline-none border px-2"
                required
              />
            </div>

            {/* Edit Author Name */}
            <div>
              <label className="block font-medium text-gray-700">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                defaultValue={bookData.author}
                placeholder="Enter author's name"
                className="mt-1 block w-full text-gray-800 border-gray-300 rounded-lg shadow-sm outline-none border px-2"
                required
              />
            </div>

            {/* Select Category */}
            <div>
              <label className="block font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                defaultValue={bookData.category}
                className="mt-1 block w-full text-gray-800 border-gray-300 rounded-lg shadow-sm outline-none border px-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Edit description */}
            <div>
              <label className="block font-medium text-gray-700">
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                min={1}
                max={5}
                step={0.1}
                defaultValue={bookData.rating}
                className="mt-1 block w-full text-gray-800 border-gray-300 rounded-lg shadow-sm outline-none border px-2"
                required
              />
            </div>

            {/* Edit quantity */}
            <div>
              <label className="block font-medium text-gray-700">
                Quantity
              </label>
              <textarea
                type="number"
                name="quantity"
                defaultValue={bookData.quantity}
                className="mt-1 block w-full text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none px-2"
                required
              />
            </div>

            {/* Edit Rating */}
            <div>
              <label className="block font-medium text-gray-700">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                defaultValue={bookData.description}
                className="mt-1 block w-full text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none px-2"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateBooks;

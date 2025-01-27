import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddBook = () => {
  const axiosSecure = useAxiosSecure();
  const categories = [
    "Literature",
    "Social Sciences",
    "Applied Science",
    "Art and Recreation",
  ];
  //   handle form on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    axiosSecure.post("/book/add", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Successful..!",
          text: "Books added successfully",
          icon: "success",
        });
      }
      e.target.reset();
    });
  };
  return (
    <>
      <section className="center resPadding py-12">
        <div className="w-9/12 p-4 rounded-lg shadow-sm mx-auto bg-white">
          <h1 className="text-left text-xl font-bold">Add a New Book</h1>
          <p className="text-gray-600 mt-2">
            Books are a uniquely portable magic. Fill in the form bellow to
            share the joy of reading with others by adding new books to our
            library!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Image Upload */}
            <div>
              <label className="block font-semibold mb-1">
                Book Cover Image:
              </label>
              <input
                name="image"
                type="url"
                placeholder="Enter book cover image URL"
                className="w-full border rounded p-2"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">Name:</label>
              <input
                type="text"
                name="title"
                className="w-full border rounded p-2"
                placeholder="Enter book name"
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block font-semibold mb-1">Quantity:</label>
              <input
                type="number"
                name="quantity"
                className="w-full border rounded p-2"
                placeholder="Enter quantity"
                min="1"
                required
              />
            </div>

            {/* Author Name */}
            <div>
              <label className="block font-semibold mb-1">Author Name:</label>
              <input
                type="text"
                name="author"
                className="w-full border rounded p-2"
                placeholder="Enter author name"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold mb-1">Category:</label>
              <select
                name="category"
                className="w-full border rounded p-2"
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Short Description */}
            <div>
              <label className="block font-semibold mb-1">
                Short Description:
              </label>
              <textarea
                name="description"
                className="w-full border rounded p-2"
                placeholder="Enter a brief description"
                required
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label className="block font-semibold mb-1">Rating (1-5):</label>
              <input
                type="number"
                name="rating"
                className="w-full border rounded p-2"
                placeholder="Enter rating"
                min="1"
                max="5"
                step={0.1}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
            >
              Add Book
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddBook;

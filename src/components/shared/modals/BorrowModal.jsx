import PropTypes from "prop-types";
import useAuthContext from "../../hooks/useAuthContext";

const BorrowModal = ({ props }) => {
  const {
    setReturnDate,
    openModal,
    handleModalSubmit,
    title,
    // quantity,
  } = props;
  const { user } = useAuthContext();

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <h2 className="text-xl font-semibold mb-4">Borrow : {title}</h2>

          <form onSubmit={handleModalSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Return Date Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Return Date
              </label>
              <input
                type="date"
                //   value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
              >
                Borrow
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BorrowModal;

BorrowModal.propTypes = {
  props: PropTypes.object,
  setReturnDate: PropTypes.string,
  openModal: PropTypes.func,
  handleModalSubmit: PropTypes.func,
  title: PropTypes.string,
  quantity: PropTypes.number,
};

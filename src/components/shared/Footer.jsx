const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <img src="/src/assets/libraryFab.png" alt="logo" />
          <h2 className="text-lg font-bold">Librario</h2>
          <p className="text-sm">Knowledge haven</p>
        </aside>
        <nav>
          <h6 className="footer-title">Options</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Books</a>
          <a className="link link-hover">Borrow Books</a>
        </nav>
        <nav>
          <h6 className="footer-title">information</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className=" w-full">
          <p>Subscribe Now</p>
          <input
            type="text"
            placeholder="Enter email"
            className="input input-bordered w-full  max-w-xs"
          />
        </nav>
      </footer>
      <div className=" bg-base-200 text-center pb-2 w-full border border-t-gray-300">
        <small>&copy; 2025, All Rights Reserved by Librario</small>
      </div>
    </>
  );
};

export default Footer;

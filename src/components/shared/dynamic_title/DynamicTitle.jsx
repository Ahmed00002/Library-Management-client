import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = ({ title }) => {
  const location = useLocation();
  useEffect(() => {
    const setTitle = `${title} | Librario`;
    document.title = setTitle;
  }, [location, title]);

  return null;
};

export default DynamicTitle;

DynamicTitle.propTypes = {
  title: PropTypes.string,
};

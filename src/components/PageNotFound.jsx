import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = (props) => {
  // const {} = props;
  return (
    <div className="m-page-not-found">
      <p className="first-show-up">404</p>
      <p className="second-show-up">
        <span>Not Found</span>
      </p>
      <Link className="link-homepage" to="/">
        Back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;

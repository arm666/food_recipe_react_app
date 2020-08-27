import React from "react";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

function NotFounds() {
  return (
    <div className="NotFound">
      <div>
        <div className="msg">Page Not Found !!</div>
        <div>
          <Link to="/" className="button">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFounds;

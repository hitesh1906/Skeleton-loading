import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function index() {
  return <Skeleton count={3} />;
}

export default index;

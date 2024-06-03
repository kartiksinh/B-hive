import React from "react";
const Home = React.lazy(() => import("../../components/Home/Home"));

export const HomePage = () => {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
};

export default HomePage;

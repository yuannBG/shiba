import React from "react";
import { Link } from 'react-router-dom';
import CustomThemeTypo from "../../common/design/custom-typo";

const PageNotFound = () => {

  return (
    <CustomThemeTypo variant="h2">
      PageNotFoundContent
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/discord">Go to the discord page</Link>
      </p>
    </div>
    </CustomThemeTypo>


  );
};

export default PageNotFound;

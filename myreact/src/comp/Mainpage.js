import React from "react";

const Mainpage = ({ PageName , designd}) => {
  return (
    <div>
      <main>{PageName}
        <br />
        designed by : {designd}
      </main>
    </div>
  );
};

export default Mainpage;

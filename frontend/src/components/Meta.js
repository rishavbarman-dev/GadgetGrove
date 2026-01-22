import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </div>
  );
};

Meta.defaultProps = {
  title: "Welcome To GadgetGrove",
  description: "We sell the best products at reasonble price",
  keywords: "electronics, buy electronics",
};

export default Meta;

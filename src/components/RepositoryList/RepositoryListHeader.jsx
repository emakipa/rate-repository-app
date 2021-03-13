import React from "react";
import ListHeaderMenu from "./ListHeaderMenu";

const RepositoryListHeader = ({ sortBy, onPress }) => {
  return (
    <>
      <ListHeaderMenu sortBy={sortBy} onPress={onPress} />
    </>
  );
};

export default RepositoryListHeader;
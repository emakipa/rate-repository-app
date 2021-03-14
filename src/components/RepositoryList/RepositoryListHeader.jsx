import React from "react";
import ListHeaderSearchBar from "./ListHeaderSearchbar";
import ListHeaderMenu from "./ListHeaderMenu";

const RepositoryListHeader = ({ sortBy, onPress, searchQuery, onChangeSearch }) => {
  
  return (
    <>
      <ListHeaderSearchBar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      <ListHeaderMenu sortBy={sortBy} onPress={onPress} />
    </>
  );
};

export default RepositoryListHeader;
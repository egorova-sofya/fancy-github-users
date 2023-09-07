import { API } from "../../app/services/ApiService";
import UsersList from "../UsersList/UsersList";
import "./SearchingResultsComponent.css";
import Loader from "../Loader/Loader";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { useSearchParams } from "react-router-dom";
import { FC, useEffect } from "react";

const SearchingResultsComponent = () => {
  const [searchUsers, { data: users, isFetching, isError }] =
    API.useLazySearchUsersQuery();

  const [searchParams] = useSearchParams();

  const searchingData = searchParams.get("search-value");

  console.log("searchingData", searchingData);

  const getFullUsersFullInfo = (searchingData: string) => {
    !isFetching && searchUsers({ searchingData: searchingData });
  };

  useEffect(() => {
    searchingData && getFullUsersFullInfo(searchingData);
  }, [searchingData]);

  if (isFetching || !users) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  if (users?.length === 0 && searchingData) {
    return <NoResults searchingData={searchingData} />;
  }

  return (
    <div className="searching-results">
      <p className="searching-results__title">Users by request Naomi</p>
      <UsersList users={users} />
    </div>
  );
};

const NoResults: FC<{ searchingData: string }> = ({ searchingData }) => {
  return (
    <div className="searching-results">
      <div className="searching-results__not-found">
        <p className="searching-results__not-found-title">
          No results found for {searchingData}
        </p>
      </div>
    </div>
  );
};

export default SearchingResultsComponent;

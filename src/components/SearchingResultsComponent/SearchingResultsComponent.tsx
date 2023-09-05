import UsersList from "../UsersList/UsersList";
import "./SearchingResultsComponent.css";

const SearchingResultsComponent = () => {
  if (true) {
    return <NoResults />;
  }

  return (
    <div className="searching-results">
      <p className="searching-results__title">Users by request Naomi</p>
      <UsersList />
    </div>
  );
};

const NoResults = () => {
  return (
    <div className="searching-results">
      <div className="searching-results__not-found">
        <p className="searching-results__not-found-title">
          No results found for Naomi
        </p>
      </div>
    </div>
  );
};

export default SearchingResultsComponent;

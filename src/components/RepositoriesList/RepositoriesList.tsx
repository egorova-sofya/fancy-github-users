import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./RepositoriesList.css";

const RepositoriesList = () => {
  return (
    <div className="repositories-list">
      <div className="repositories-list__header">
        <h2 className="repositories-list__title">Repositories</h2>
        <button className="repositories-list__button">All repositories</button>
      </div>
      <div className="repositories-list__wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return <RepositoryCard key={item} />;
        })}
      </div>
    </div>
  );
};

export default RepositoriesList;

import { FC } from "react";
import { IRepository } from "../../types";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import "./RepositoriesList.css";

interface Props {
  repositoriesUrl: string;
  repositories: Array<IRepository>;
}

const RepositoriesList: FC<Props> = ({ repositories, repositoriesUrl }) => {
  return (
    <div className="repositories-list">
      <div className="repositories-list__header">
        <h2 className="repositories-list__title">Repositories</h2>
        <a
          href={`${repositoriesUrl}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="repositories-list__link"
        >
          All repositories
        </a>
      </div>
      <div className="repositories-list__wrapper">
        {repositories.map((repository) => {
          return <RepositoryCard key={repository.id} repository={repository} />;
        })}
      </div>
    </div>
  );
};

export default RepositoriesList;

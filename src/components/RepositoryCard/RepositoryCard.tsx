import "./RepositoryCard.css";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { IRepository } from "../../app/types";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  repository: IRepository;
}

const RepositoryCard: FC<Props> = ({ repository, className, ...props }) => {
  return (
    <div {...props} className={cn("repository-card", className)}>
      <Link
        target="_blank"
        rel="noreferrer"
        to={repository.html_url}
        className="repository-card__link"
      >
        <div className="repository-card__info">
          <p className="repository-card__name crop-line">{repository.name}</p>
          <p className="repository-card__description crop-line">
            {repository.description
              ? repository.description
              : "No description provided"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RepositoryCard;

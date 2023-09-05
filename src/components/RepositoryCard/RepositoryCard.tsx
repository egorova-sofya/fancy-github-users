import "./RepositoryCard.css";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const RepositoryCard: FC<Props> = ({ className, ...props }) => {
  return (
    <div {...props} className={cn("repository-card", className)}>
      <Link to="#" className="repository-card__link">
        <div className="repository-card__info">
          <p className="repository-card__name">Repository name</p>

          <p className="repository-card__description">
            Repository description repository description
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RepositoryCard;

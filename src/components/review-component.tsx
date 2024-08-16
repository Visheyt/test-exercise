import "./review-component.css";

export interface IReview {
  id: string;
  name: string;
  text: string;
}

export const Review: React.FC<IReview> = ({ name, text }: IReview) => {
  return (
    <div className="review">
      <div className="profile">
        <div className="profile__icon">{name[0]}</div>
        <h2>{name}</h2>
      </div>
      <div className="review__block">
        <h3>User`s review:</h3>
        <div className="review__text">{text}</div>
      </div>
    </div>
  );
};

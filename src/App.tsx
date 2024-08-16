import { FormEvent, useEffect, useState } from "react";

import "./App.css";

import { IReview, Review } from "./components/review-component";

import reviews from "./data/reviews.json";

function App() {
  const [index, setIndex] = useState<number>(0);

  const [reviewsState, setReviewState] = useState<IReview[]>(reviews.items);

  const [displayFormState, setDisplayFormState] = useState<boolean>(false);

  const handleNext = () => {
    if (index < reviewsState.length - 1) {
      setIndex((prev) => (prev += 1));
    } else setIndex(0);
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => (prev -= 1));
    } else setIndex(reviewsState.length - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newReview = {
      id: reviewsState.length.toString(),
      name: formData.get("name") as string,
      text: formData.get("review") as string,
    };

    setReviewState([...reviewsState, newReview]);
  };
  return (
    <>
      <main>
        <button onClick={() => setDisplayFormState((prev) => !prev)}>
          Add new review
        </button>

        {displayFormState ? (
          <form onSubmit={handleSubmit} className="review__form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <textarea
              id="review"
              name="review"
              placeholder="Enter your review"
            />
            <button type="submit" className="add__button">
              Add
            </button>
          </form>
        ) : null}
        <div className="review__container">
          <button onClick={handlePrev}>←</button>
          <Review {...reviewsState[index]} />
          <button onClick={handleNext}>→</button>
        </div>
      </main>
    </>
  );
}

export default App;

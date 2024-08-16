import { IReview } from "../components/review-component";

export const addReview = async (review: IReview) => {
  try {
    const resp = await fetch("http://example-api.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });

    if (!resp.ok) {
      throw new Error("Failed to add Review");
    }
    const result = await resp.json();
    console.log("Review submitted", result);
  } catch (error) {
    console.error(error);
  }
};

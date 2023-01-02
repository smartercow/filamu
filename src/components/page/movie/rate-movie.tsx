import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const fillColorArray = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045",
];

export default function RateMovie(): JSX.Element {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="mt-4 w-full space-y-3">
      <div>
        <p className="pl-1 text-sm font-semibold">
          <span className="text-lg md:text-2xl">4.5</span>{" "}
          <span className="text-xs font-semibold uppercase">stars</span>
        </p>
      </div>
      <div className="space-y-2">
        <h5 className="pl-1 text-xs font-semibold uppercase text-main-gray">
          Rate this movie
        </h5>
        <Rating
          onClick={handleRating}
          size={35}
          transition
          allowFraction
          fillColorArray={fillColorArray}
        />
      </div>
    </div>
  );
}

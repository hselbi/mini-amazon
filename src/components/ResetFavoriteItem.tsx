import { resetFavoriteData } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetFavoriteItem = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset yoru cart items?"
    );
    if (confirmReset) {
      dispatch(resetFavoriteData());
    }
  };
  return (
    <button
      onClick={handleResetCart}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      reset favorite list
    </button>
  );
};

export default ResetFavoriteItem;

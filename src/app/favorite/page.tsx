"use client";
import React from "react";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import FavoriteProduct from "@/components/FavoriteProduct";
import ResetFavoriteItem from "@/components/ResetFavoriteItem";
import Link from "next/link";

const FavoritePage = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.next);
  return (
    <div className="max-w-screen-xl mx-auto px-6 gap-10 py-4">
      {favoriteData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Favorite Items
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Action</p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              {favoriteData.map((item: StoreProduct) => (
                <div key={item._id}>
                  <FavoriteProduct item={item} />
                </div>
              ))}
              <ResetFavoriteItem />
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white h-96  flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1>Nothing is available in the Favorite list</h1>
          <Link href="/">
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black duration-300 mt-2">
              go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;

import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { db } from "../app/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import PageTitle from "../components/Typography/PageTitle";
import { categories, subcategories } from "../utils/categories";
import ImageUpload from "../components/ImageUpload";

function Create() {
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [brand, setBrand] = useState("");
  // const [selected, setSelected] = useState([]);

  const itemsRef = collection(db, "items");
  const user = useSelector(selectUser);

  // This should be stored in DB

  const insertListing = async () => {
    try {
      await addDoc(itemsRef, {
        category: category,
        subcategory: subcategory,
        brand: brand,
        createdBy: user,
        createdTimestamp: Timestamp.now(),
        updatedTimestamp: Timestamp.now(),
        isValidated: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // const handleSelected = (id) => {
  //   if (selected.includes(id)) {
  //     setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
  //   } else {
  //     setSelected((prevSelected) => [...prevSelected, id]);
  //   }
  // };

  return (
    <>
      <PageTitle>Create</PageTitle>
      <div className="flex flex-col">
        <ImageUpload />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="form-select px-4 py-3 rounded my-2"
        >
          <option value="">category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.value}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSubcategory(e.target.value)}
          className="form-select px-4 py-3 rounded my-2"
        >
          <option value="">subcategory</option>
          {category &&
            subcategories[category].map((c) => (
              <option key={c.id} value={c.value}>
                {c.name}
              </option>
            ))}
        </select>
        <input
          type="text"
          className="form-input px-4 py-3 rounded my-2"
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={insertListing}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Create;

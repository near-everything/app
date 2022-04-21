import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { db } from "../../app/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

function Insert() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");
  const itemsRef = collection(db, "items");
  const user = useSelector(selectUser);
  // This should be stored in DB
  const categories = [
    {
      name: 'one',
      id: 1,
      isSelected: true
   }, 
   {
      name: 'two',
      id: 2,
      isSelected: false,
   }
  ]

  const insertListing = async () => {
    try {
      await addDoc(itemsRef, {
        name: input,
        createdBy: user,
        createdTimestamp: Timestamp.now(),
        updatedTimestamp: Timestamp.now(),
        isValidated: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelected = (id) => {
    if (selected.includes(id)) {
      setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
    } else {
      setSelected((prevSelected) => [...prevSelected, id]);
    }
  };

  return (
    <>
        <div>
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => handleSelected(category.id)}
              className={
                selected.includes(category.id) ? 'bg-red-500' : 'bg-blue-500'
              }
            >
              {category.name}
            </button>
          ))}
        </div>
        {selectedImage &&
          selectedImage.map((it, index) => {
            return <img alt="not found" width={"250px"} src={it} key={index} />;
          })}
        <button className="text-white" onClick={() => setSelectedImage([])}>
          Remove
        </button>
        <br />
        <label htmlFor="upload-photo" className="cursor-pointer text-white">
          Browse...
        </label>
        <input
          type="file"
          name="photo"
          id="upload-photo"
          className="absolute opacity-0 -z-10"
          onChange={(event) => {
            if (event.target.files.length > 0) {
              const len = event.target.files.length;
              for (let i = 0; i < len; i++) {
                const url = URL.createObjectURL(event.target.files[i]);
                setSelectedImage([...selectedImage, url]);
              }
            }
          }}
          multiple
        />
        <input
          type="text"
          className="form-input px-4 py-3 rounded my-2"
          placeholder="Test"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={insertListing}
        >
          Button
        </button>
    </>
  );
}

export default Insert;

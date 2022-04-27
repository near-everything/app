import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { db, st } from "../app/firebase";
import Button from "../components/Button";
import FileUpload from "../components/FileUpload";
import Input from "../components/Input";
import Select from "../components/Select";
import ThemedSuspense from "../components/ThemedSuspense";
import PageTitle from "../components/Typography/PageTitle";
import { selectUser } from "../features/auth/authSlice";
import { categories, subcategories } from "../utils/categories";

function Create() {
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [brand, setBrand] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const itemsRef = collection(db, "items");
  const user = useSelector(selectUser);

  const insertListing = async () => {
    setLoading(true);
    // const urls = await createUrls();
    let urls = [];
    for (const img of files) {
      const storageRef = ref(st, `images/${user}/${img.name}`);
      const snapshot = await uploadBytes(storageRef, img);
      const downloadURL = await getDownloadURL(snapshot.ref);
      urls.push(downloadURL);
    }

    try {
      await addDoc(itemsRef, {
        category: category,
        subcategory: subcategory,
        brand: brand,
        createdBy: user,
        media: urls,
        createdTimestamp: Timestamp.now(),
        updatedTimestamp: Timestamp.now(),
        isValidated: false,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // const handleSelected = (id) => {
  //   if (selected.includes(id)) {
  //     setSelected((prevSelected) => prevSelected.filter((s) => s !== id));
  //   } else {
  //     setSelected((prevSelected) => [...prevSelected, id]);
  //   }
  // };
  if (loading) {
    return <ThemedSuspense />;
  }

  return (
    <>
      <PageTitle>collect</PageTitle>
      <div className="flex flex-col">
        <FileUpload
          onChange={(event) => {
            if (event.target.files.length > 0) {
              setFiles([...files, ...event.target.files]);
            }
          }}
        />
        <div className="flex flex-row mt-4">
          {files.length > 0 &&
            files.map((file, index) => (
              <img
                key={index}
                alt="not found"
                src={URL.createObjectURL(file)}
                className="w-32 m-2"
              />
            ))}
        </div>
        <br />
        <Select
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          options={categories}
        />
        <br />
        <Select
          placeholder="subcategory"
          onChange={(e) => setSubcategory(e.target.value)}
          options={category ? subcategories[category] : []}
        />
        <br />
        <Input
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <Button onClick={insertListing} disabled={!category || !subcategory || files.length == 0}>Submit</Button>
      </div>
    </>
  );
}

export default Create;

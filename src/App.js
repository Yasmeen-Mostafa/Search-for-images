import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./Components/ImageList/ImageList";
function App() {
  //will receive a props from child(upward) => searching term
  //callback fn always will be in the parent component and will be sent to child as props
  const [images, setImages] = useState([]);
  const handleSubmition = async (searchingTerm) => {
    const result = await searchImages(searchingTerm); //we want to pass the images array to the ImageList component
    //using props system + state system because the screen updated with the new list of images
    // console.log(result);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmition} />
      <ImageList listOfImages={images} />
    </div>
  );
}

export default App;

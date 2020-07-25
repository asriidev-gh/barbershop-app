import React, { useState, useEffect } from "react";

export const ReservationForm = () => {
  const [hairstyles, setHairstyles] = useState([]);
  const [hairstylecategory, setHairstylecategory] = useState("Men's Haircut");
  const [tagfade, setTagfade] = useState("Fade");

  useEffect(() => {
    const hairStylesData = require("../data/hairstyles.json");
    setHairstyles(hairStylesData);
  }, []);

  const getUnique = (arr, comp) => {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  };

  const uniqueHairstyle = getUnique(hairstyles, "category");

  const handleChangeHairstyle = (event) => {
    setHairstylecategory(event.target.value);
  };

  const handleSubmitHairstyle = (event) => {
    alert("Your selected value is: " + hairstylecategory);
    event.preventDefault();
  };

  const handleChangeTagFadeChkbox = (event) => {
    // alert("Your selected value is: " + hairstylecategory);
    // event.preventDefault();
    setTagfade(event.target.value);
  };

  // Filters selected hairstyle category with selected tag
  const filterDropdown = hairstyles.filter((result) => {
    const tags = result.tags.split(",");
    return result.category === hairstylecategory && tags.includes(tagfade);
  });

  // TAGS
  const hairstyleTags = [
    { id: 1, name: "Fade" },
    { id: 2, name: "None-Fade" },
    { id: 3, name: "Undercut" },
    { id: 5, name: "Skater Haircut" },
    { id: 5, name: "Mohawk Haircut" },
    { id: 6, name: "Short Length Haircut" },
    { id: 7, name: "Medium Length Haircut" },
    { id: 7, name: "Celebrity Haircut" },
  ];

  const handleChangeHairstyleTag = (event) => {
    setTagfade(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmitHairstyle}>
        <br />
        <label>
          Select Category
          <select
            className="form-control"
            value={hairstylecategory}
            onChange={handleChangeHairstyle}
          >
            {uniqueHairstyle.map((hairstyle) => (
              <option key={hairstyle.id} value={hairstyle.category}>
                {hairstyle.category}
              </option>
            ))}
          </select>
        </label>
        <br />
        Filter By
        <select
          className="form-control"
          value={tagfade}
          onChange={handleChangeHairstyleTag}
        >
          {hairstyleTags.map((hairstyle) => (
            <option key={hairstyle.id} value={hairstyle.name}>
              {hairstyle.name}
            </option>
          ))}
        </select>
        {/* <input type="submit" value="Submit" /> */}
        <div>
          {filterDropdown.map((hairstyle) => (
            <div key={hairstyle.id} style={{ margin: "10px" }}>
              {hairstyle.title}
              <br />
              <img
                src={hairstyle.image}
                alt={hairstyle.title}
                width="300"
                height="300"
              />
              <br />
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

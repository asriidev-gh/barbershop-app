import React, { useState, useEffect } from "react";
import "../assets/css/Cards.css";
import "../assets/css/Button.css";
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
      <h3>Appointment Form</h3>
      <div className="row">
        {/* <form onSubmit={handleSubmitHairstyle}> */}
        <div className="col-md-6">
          <label>Select Category</label>
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
        </div>

        <div className="col-md-6">
          <label>Filter By</label>
          <select
            className="form-control"
            value={tagfade}
            onChange={handleChangeHairstyleTag}
          >
            {hairstyleTags.map((hairstyle) => (
              <option key={hairstyle.name} value={hairstyle.name}>
                {hairstyle.name}
              </option>
            ))}
          </select>
        </div>

        <div className="row row-horizon">
          {filterDropdown.map((hairstyle) => (
            <div key={hairstyle.id}>
              <div className="card card-block">
                <img
                  src={hairstyle.image}
                  alt={hairstyle.title}
                  width="300"
                  height="300"
                />
                <div className="container">
                  <h4>
                    <b>{hairstyle.title}</b>
                  </h4>
                  <p>{hairstyle.tags}</p>

                  <div className="cardbtn">
                    <input
                      type="button"
                      className="btn btn-sm btn-secondary"
                      value="Details"
                    />
                    <input
                      type="button"
                      className="btn btn-sm btn-success"
                      value="Choose"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <input type="submit" value="Submit" /> */}
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

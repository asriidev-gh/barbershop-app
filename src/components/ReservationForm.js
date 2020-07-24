import React, { useState, useEffect } from "react";
// import { WomenHairStyle } from "./WomenHairStyle";
// import { MenHairStyle } from "./MenHairStyle";

export const ReservationForm = () => {
  const [hairstyles, setHairstyles] = useState([]);
  const [hairstyle, setHairstyle] = useState("Men's Haircut");

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

  const uniqueHairstyle = getUnique(hairstyles, "tag");

  const handleChangeHairstyle = (event) => {
    setHairstyle(event.target.value);
  };

  const handleSubmitHairstyle = (event) => {
    alert("Your selected value is: " + hairstyle);
    event.preventDefault();
  };

  const filterDropdown = hairstyles.filter((result) => {
    return result.tag === hairstyle;
  });

  return (
    <>
      <form onSubmit={handleSubmitHairstyle}>
        <br />
        <label>
          Select Hair Style
          <select
            className="form-control"
            value={hairstyle}
            onChange={handleChangeHairstyle}
          >
            {uniqueHairstyle.map((hairstyle) => (
              <option key={hairstyle.id} value={hairstyle.tag}>
                {hairstyle.tag}
              </option>
            ))}
          </select>
        </label>

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

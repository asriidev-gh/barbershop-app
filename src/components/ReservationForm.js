import React, { useState, useEffect } from "react";
import "../assets/css/Cards.css";
import "../assets/css/Button.css";
export const ReservationForm = () => {
  const [hairstyles, setHairstyles] = useState([]);
  const [hairstylecategory, setHairstylecategory] = useState("Men's Haircut");
  const [hairstyletag, setHairstyleTag] = useState("Fade");
  const [selectedhairstyledetailstitle, setHairstyledetailstitle] = useState(
    "Men's Haircut"
  );
  const [selectedhairstyledetailsdesc, setHairstyledetailsdesc] = useState(
    "Men's Haircut"
  );
  const [selectedhairstyledetailsimage, setHairstyledetailsimage] = useState(
    ""
  );

  const [selectedhairstyledetailstags, setHairstyledetailstags] = useState("");

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

  // const handleSubmitHairstyle = (event) => {
  //   alert("Your selected value is: " + hairstylecategory);
  //   event.preventDefault();
  // };

  const handleClickShowHairStyleDetails = (event) => {
    setHairstyledetailstitle(event.currentTarget.getAttribute("data-title"));
    setHairstyledetailsdesc(event.currentTarget.getAttribute("data-desc"));
    setHairstyledetailsimage(event.currentTarget.getAttribute("data-image"));
    setHairstyledetailstags(event.currentTarget.getAttribute("data-tags"));
  };

  // Filters selected hairstyle category with selected tag
  const filterDropdown = hairstyles.filter((result) => {
    const tags = result.tags.split(",");
    return result.category === hairstylecategory && tags.includes(hairstyletag);
  });

  // TAGS
  const hairstyleTagsForMen = [
    { id: 1, name: "Fade" },
    { id: 2, name: "None-Fade" },
    { id: 3, name: "Undercut" },
    { id: 5, name: "Skater Haircut" },
    { id: 6, name: "Mohawk Haircut" },
    { id: 7, name: "Short Length" },
    { id: 8, name: "Medium Length" },
    { id: 9, name: "Celebrity Haircut" },
  ];

  const hairstyleTagsForBoys = [
    { id: 1, name: "Fade" },
    { id: 2, name: "None-Fade" },
    { id: 3, name: "Undercut" },
    { id: 5, name: "Skater Haircut" },
    { id: 6, name: "Short Length" },
    { id: 7, name: "Medium Length" },
  ];

  const hairstyleTagsForWomen = [
    { id: 1, name: "Short Length" },
    { id: 2, name: "Medium Length" },
    { id: 3, name: "Long Length" },
    { id: 4, name: "Curl" },
    { id: 5, name: "Celebrity Haircut" },
  ];

  const [hairstyletags, setHairstyletags] = useState(hairstyleTagsForMen);

  const handleChangeHairstyleTag = (event) => {
    setHairstyleTag(event.target.value);
  };

  const getTagColor = (tagname) => {
    switch (tagname) {
      case "Fade":
        return "color1";
      case "Skater Haircut":
        return "color2";
      case "None-Fade":
        return "color3";
      case "Undercut":
        return "color4";
      case "Mohawk Haircut":
        return "color5";
      case "Hairstyle With Color":
        return "color2";
      case "Curl":
        return "color3";
      default:
        return "color5";
    }
  };

  const handleChangeHairstyleCategory = (event) => {
    setHairstylecategory(event.target.value);
    if (event.target.value === "Men's Haircut") {
      setHairstyletags(hairstyleTagsForMen);
      setHairstyleTag("Fade");
    } else if (event.target.value === "Women's Haircut") {
      setHairstyletags(hairstyleTagsForWomen);
      setHairstyleTag("Short Length");
    } else if (event.target.value === "Boy's Haircut") {
      setHairstyletags(hairstyleTagsForBoys);
      setHairstyleTag("Fade");
    }
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
            onChange={handleChangeHairstyleCategory}
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
            value={hairstyletag}
            onChange={handleChangeHairstyleTag}
          >
            {hairstyletags.map((hairstyle) => (
              <option key={hairstyle.name} value={hairstyle.name}>
                {hairstyle.name}
              </option>
            ))}
          </select>
        </div>

        <div className="row row-horizon">
          {filterDropdown.map((hairstyle) => (
            <div key={hairstyle.id} className="col-md-4">
              <div className="card card-block">
                <img
                  src={hairstyle.image}
                  alt={hairstyle.title}
                  width="100%"
                  height="350"
                />
                <div className="container">
                  <h5>
                    <b>{hairstyle.title}</b>
                  </h5>
                  <div className="tags">
                    {hairstyle.tags.split(",").map((tag) => (
                      <a href="/" key={tag} className={getTagColor(tag)}>
                        {tag}
                      </a>
                    ))}
                  </div>
                  <hr />
                  <div className="cardbtn">
                    <input
                      type="button"
                      className="btn btn-sm btn-secondary"
                      value="Details"
                      data-title={hairstyle.title}
                      data-desc={hairstyle.desc}
                      data-image={hairstyle.image}
                      data-tags={hairstyle.tags}
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={handleClickShowHairStyleDetails}
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
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {selectedhairstyledetailstitle}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                alt={selectedhairstyledetailstitle}
                src={selectedhairstyledetailsimage}
                className="selectedCardImg"
              />
              <div className="tags">
                {selectedhairstyledetailstags.split(",").map((tag) => (
                  <a href="/" key="tag" className={getTagColor(tag)}>
                    {tag}
                  </a>
                ))}
              </div>
              <p>{selectedhairstyledetailsdesc}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

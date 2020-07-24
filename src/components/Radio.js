import React, { Component } from "react";
class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 0 }; // 0: no show, 1: show yes, 2: show no.
  }

  radioHandler = (status) => {
    this.setState({ status });
  };

  // const [gender, setGender] = useState(1);

  // // const [hairStyle, setHairStyle] = useState({});

  // const handleGenderChanged = (event) => {
  //   // console.log("Gender: " + event.currentTarget.value);
  // };

  render() {
    const { status } = this.state;

    return (
      <>
        <input
          value="1"
          type="radio"
          name="gender"
          checked={gender === 1}
          onClick={(e) => setGender(1)}
          onChange={handleGenderChanged}
        />
        Male
        <input
          value="2"
          type="radio"
          name="gender"
          checked={gender === 2}
          onClick={(e) => setGender(2)}
          onChange={handleGenderChanged}
        />
        Female
        {status}
        {/* {status === 1 && drawYesContent()}
        {status === 2 && drawNoContent()} */}
      </>
    );
  }
}
export default Radio;

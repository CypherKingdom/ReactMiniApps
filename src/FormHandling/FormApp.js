import classes from './FormApp.module.css';
import { React, useState, useRef } from "react";

function FormApp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const fileInputRef = useRef(null); // Create a ref for the file input

  const HandleSubmit = (e) => {
    e.preventDefault();

    const form = e.target.closest("form"); // Get the closest form element

    // Check if the form is valid using HTML form validation
    if (form.reportValidity()) {
      console.log(
        firstName,
        lastName,
        email,
        contact,
        gender,
        selectedOption,
        subjects,
        resume,
        url,
        about
      );

      handleReset();

      // Reset file input using ref
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Manually clear the file input
      }

      // Add your form submission logic here (e.g., sending data to an API)
    } else {
      console.log("Please fill in all required fields.");
    }
  };


  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSelectedOption("");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setAbout("");
  };
  
  return (
    <div className={classes.FormApp}>
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          {/* firstName input  */}
          <label htmlFor="firstname">
            First Name *
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Enter First Name'
            required
          />

          {/* Last name input */}
          <label htmlFor="lastname">
            Last Name *
          </label>
          <input
            type="text"
            name="lastname"
            id='lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Enter Last Name'
            required
          />

          {/* Email input */}
          <label htmlFor="email">
            Enter Email *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            required
          />

          {/* Contact input */}
          <label htmlFor="contact">
            Contact *
          </label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder='Enter Mobile Number'
            required
          />

          {/* Gender input */}
          {/* MALE */}
          <label htmlFor="gender">
            Gender *
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male

          {/* FEMALE */}
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female

          {/* other */}
          <input
            type="radio"
            name='gender'
            id='other'
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Prefer not to say

          {/* LANGUAGE */}
          <label htmlFor="language">
            Your best subject
          </label>

          {/* ENGLISH */}
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English

          {/* MATH */}
          <input
            type="checkbox"
            name='lang'
            id='maths'
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths

          {/* Physics */}
          <input
            type='checkbox'
            name='lang'
            id='physics'
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics

          {/* RESUME */}
          <label htmlFor="file">
            Upload Resume *
          </label>
          <input
            type='file'
            name='file'
            id='file'

            ref={fileInputRef}

            onChange={(e) => setResume(e.target.files[0])}
            placeholder='Enter Upload File'
            required
          />

          {/* URL */}
          <label htmlFor="url">
            Enter URL *
          </label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            required
          />

          {/* CHOICE */}
          <label htmlFor="select">
            Select your choice
          </label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option
              value=""
              disabled>
              Select your Ans
            </option>

            <optgroup label='Beginners'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>

            <optgroup label='Advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">
                MongoDB
              </option>
            </optgroup>
          </select>

          {/* ABOUT */}
          <label htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            id="about"
            value={about}
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell us about yourself"
            required
          ></textarea>

          {/* BUTTONS */}
          <button
            type="reset"
            value='Reset'
            onClick={() => handleReset()}
          >
            Reset
          </button>

          <button
            type="submit"
            value='Submit'
            onClick={(e) => HandleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  )
}

export default FormApp;

import { useState } from 'react';
import './App.css';

function App() {
  // const [firstname, setFirstName] = useState("")
  // const [lastname, setLastName] = useState("")


  // function changeHandlerfiratName(e){
  //   //console.log("First Name")
  //   //console.log(e.target.value)
  //   setFirstName(e.target.value)
  // }
  // function changeHandlerlastName(e){
  //   //console.log("Last Name")
  //   //console.log(e.target.value)
  //   setLastName(e.target.value)
  // }
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar:"" })

  //console.log(formData)
  function changeHandler(e) {
    const { name, value, type, checked } = e.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br/>
        <input type="text"
          placeholder='firstname'
          name="firstName"
          onChange={changeHandler}
          value={formData.value}>
        </input>

        <br></br>

        <input type="text"
          placeholder='lastname'
          name="lastName"
          onChange={changeHandler}
          value={formData.lastName}></input>

        <br></br>

        <input type="email"
          placeholder='enter your email'
          name="email"
          onChange={changeHandler}
          value={formData.email}></input>
        <br></br>
        <br />

        <textarea placeholder='Enter your comments here' onChange={changeHandler} name="comments"
          value={formData.comments}></textarea>
        <br /><br />

        <input
          type="checkbox"

          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
          onChange={changeHandler}
        ></input>

        <label htmlFor='isVisible'>Am i Visible?</label>

        <br />
        <br />


        <fieldset>
          <legend>MODE</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          ></input>
          <label htmlFor='Online-Mode'>Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          ></input>
          <label htmlFor='Offline-Mode'>Offline Mode</label>

          <br /><br />
        </fieldset>

        <br/>
        <label htmlFor='favCar'>Tell Me Your Fav Car</label>
        <select
          onChange = {changeHandler}
          name = "favCar"
          id = "favCar"
          value={formData.favCar}
          >
            <option value = "scorpio">Scorpio</option>
            <option value = "fartuner">Fartuner</option>
            <option value = "defender">Defender</option>


        </select>
        <br/>
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;

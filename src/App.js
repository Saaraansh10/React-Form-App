import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center bg-blue-100">
   <form onSubmit={submitHandler} className="border-solid border-2 border-sky-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] px-5 py-5">

    <label htmlFor="firstName" className="mx-1">First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Love"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

    <br/>
    <label htmlFor="lastName" className="mx-1">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Babbar"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

    <br/>
    <label htmlFor="email" className="mx-1">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="love@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

    <br/>
    <label htmlFor="country" className="mx-1">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress" className="mx-1">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

    <br/>
    <label htmlFor="city" className="mx-1">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="B-25C"
      value={formData.city}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

  <br/>
    <label htmlFor="state" className="mx-1">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Bihar"
      value={formData.state}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

    <br/>
    <label htmlFor="postalCode" className="mx-1">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="outline mt-1 mx-2 mb-2 px-2"
    />

    <br/>
    <br/>
    <fieldset>
      <legend className="mx-2 mb-2 text-bold">By Email</legend>

      <div className="flex">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        className="mx-2"
      />
      <div>
        <label htmlFor="comments" className="text-bold">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
        className="mx-2"
      />
      <div>
        <label htmlFor="candidates" className="text-bold">Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
        className="mx-2"
      />
      <div>
        <label htmlFor="offers" className="text-bold">Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
      


    </fieldset>

    <br/>
    <br/>
    <fieldset>
      <legend className="mx-2 text-bold">Push Notifications</legend>
      <p className="mx-2 mb-2">These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
        className="mx-2"
      />

      <label htmlFor="pushEverything" className="text-bold">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
        className="mx-2"
      />

      <label htmlFor="pushEmail" className="text-bold">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
        className="mx-2"
      />

      <label htmlFor="pushNothing" className="text-bold ">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4 mt-4 mx-2"
   >Save</button>






   </form>

   </div>
  );
}

export default App;

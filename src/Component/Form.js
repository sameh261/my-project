import axios from "axios";
import React, { useState } from "react";

function Form() {
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const senddata = (e) => {
    e.preventDefault();
    axios.post(`https://65882dd190fa4d3dabf98f03.mockapi.io/test`, {
      email,
      password,
    }     );  


    document.getElementById("email").value = "";



    document.getElementById("password").value = "";
  };
              return (
    <>
      <div class="container">
        <form>
          <label class="form-label" for="form1Example1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="form-control"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label class="form-label" for="form1Example2">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="form-control"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <button
            data-mdb-ripple-init
            type="submit"
            class="btn btn-primary btn-block"
            onClick={senddata}
          >
            submit
          </button>
        </form>
        <p id="result1"></p>
        <p id="result2"></p>
      </div>
    </>
  );
}
export default Form;

// import React from "react";

// class Form extends React.Component{
//   handlechange(e){
//     e.preventDefault()
//     var email=document.getElementById('email').value
//     document.getElementById('result1').innerText=email

//     var pass=document.getElementById('password').value
//     document.getElementById('result2').innerText=pass
//   }
//     render(){
//         return(

// <>
// <div class="container">
// <form>
// <label class="form-label" for="form1Example1">Email address</label>
// <input type="email" id="email" class="form-control" />
//           <br/>
// <label class="form-label" for="form1Example2">Password</label>
// <input type="password" id="password" class="form-control" />
// <br/>
// <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block" onClick={this.handlechange}>submit</button>
//         </form>
//         <p id="result1"></p>
//         <p id="result2"></p>
//         </div>
// </>

//         )
//     }
// }
// export default Form;

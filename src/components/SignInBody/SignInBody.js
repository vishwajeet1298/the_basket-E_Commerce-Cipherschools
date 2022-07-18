import React,{useState} from 'react'
import "./SignInBody.css";
import { SIGN_IN_BODY_TEXT } from "../constants/components.js";
import Button from "../global/Button/Button";
import {useNavigate} from "react-router-dom"
import {auth} from "../../firebase.js";

function SignInBody({setIsUserLoggedIn}) {
  const navigate = useNavigate()

    const [showSignInBox, setShowSignInBox] = useState(true);
    
    //setvariable for form validation and auth
    const [name,setName]=useState("");
    const [last_name, setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function setShowSignInBoxAs(param) {
      setShowSignInBox(param);
  }
  function signUp(){

    //console for check purpose
    // console.log("Name",name);
    // console.log("Last Name",last_name);
    // console.log("Email",email);
    // console.log("Password",password);
    // console.log("Running");

    if(  email==="" || password===""){
        alert("Fields can't be Empty");
        return;
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log(data)
        setIsUserLoggedIn(true);
    navigate("/");
    })
    .catch(err=>console.log(err))
    
}
function signIn(){
    auth.signInWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log("Logged In Successfully")
        setIsUserLoggedIn(true);
        navigate("/");
    })
    .catch(err=>console.log(err));
}

  return (
    <>
    {showSignInBox ? (   //SIGN_IN PAGE
        <div className="signinbody_container">
            <div className="signinbody_form">
                <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN_TITLE}</p>
                <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} 
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}  />
                <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />
                
                <Button text={SIGN_IN_BODY_TEXT.LOGIN_TEXT} 
                onClicking={signIn} />
                <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />
                <p className="signinbody_text">
                    {SIGN_IN_BODY_TEXT.NEW_TO_THIS_APP}{" "}
                    <span onClick={() => setShowSignInBoxAs(false)} >
                        {SIGN_IN_BODY_TEXT.SIGN_UP_NOW}
                    </span>
                </p>

            </div>
        </div>
    ) : (
        //SIGN_UP PAGE

        <div className="signinbody_container">
            <div className="signinbody_form">
                <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_UP_TITLE}</p>
                {/* <input placeholder="First Name" type="text" value={name} onChange={e => setName(e.target.value)} /> */}
                {/* <input placeholder="Last Name" type="text" value={last_name} onChange={e => setLastName(e.target.value)}/> */}
                <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} 
                type="email" value={email} 
                onChange={e => setEmail(e.target.value)} />
                <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER}
                 type="password" value={password} 
                 onChange={e=> setPassword(e.target.value)} />
                {/* <input placeholder="Password" type="password" /> */}
                <Button onClicking={signUp} 
                //disabled={name === "" || email==="" || password=== ""}
                text={SIGN_IN_BODY_TEXT.SIGN_UP_TEXT} />
                <Button text={SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER} />

                <p className="signinbody_text">
                 {SIGN_IN_BODY_TEXT.ALREADY_REGISTERED}{" "} 
                <span onClick={() => setShowSignInBoxAs(true)}>
                    {SIGN_IN_BODY_TEXT.LOGIN_TEXT}</span> </p>

            </div>
        </div>
    )}
</>
  )
}

export default SignInBody
import React, {useState, useRef} from "react";
import "../style/SignInForm.css";
import {gsap} from "gsap";

function SignInForm({resetLogin,settersignedin, setAuth, resetAuth}) {
    const modelRef = React.useRef();
    const animateOut = (qwe) =>{
        gsap.to(modelRef.current,{opacity:0, scale:0.5, duration:0.5, ease:"sine.out",onComplete: qwe
        });
    };

    React.useEffect(()=>{
        const helper2 = ()=>{
            resetAuth();
            resetLogin();
        }
        const timeline = gsap.timeline();
        timeline.fromTo(
            modelRef.current,
            { opacity: 0, scale: 0},
            { opacity: 1, scale:1, ease:"power2.out"},
        );
        
        const onClick = (event) =>{
            if (modelRef && !modelRef.current.contains(event.target)){
                animateOut(()=>{
                    helper2();
                });

            }
        };
        document.addEventListener("mousedown", onClick);

        return() =>{
            document.removeEventListener("mousedown", onClick);
        };
    },[]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isignedin = () =>{
        settersignedin();
        resetLogin();
        setAuth();
    };
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                console.log(response.json());
                isignedin();
            } else {
                console.error(response);
                setErrorMessage(await response.text());
            }
        } catch (e) {
            console.error(e);
            setErrorMessage('error occurred with login system')
        }
    };

    return (
        <div className="SignInContainer"> 
            <div className="SignInBox"ref={modelRef}>
                <h2>Sign In</h2>
                <form method="POST" onSubmit={handleSubmit}>
                <div className="SignInInput">
                    <label htmlFor="email">Email</label> {/* Corrected here */}
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="SignInInput">
                    <label htmlFor="password">Password</label> {/* Corrected here */}
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <button type="submit" className="SignInBtn">Sign In</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
    );
}

export default SignInForm;

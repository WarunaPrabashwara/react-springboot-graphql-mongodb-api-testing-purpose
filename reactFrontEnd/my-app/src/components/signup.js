import React, { Component } from 'react'

import { useMutation    } from '@apollo/client';
import {  POST_GEN_5   } from "../gql/Mutation";
import { useNavigate } from 'react-router-dom';

export function  SignUp()  {
  
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const [ newuser, {  data:data3, loading : loading3, error:error3   } ] = useMutation(POST_GEN_5  );
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(usernameRef.current.value, passwordRef.current.value);
    newuser({ variables: { firstName: usernameRef.current.value  , password: passwordRef.current.value }});
    navigate("/sign-in")
  };


    return (
      <form  onSubmit={handleSubmit}>
        <h3>Sign Up</h3>


        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            ref={usernameRef} 
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            ref={passwordRef}  
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>


    )
  }


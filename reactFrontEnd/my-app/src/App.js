import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import {SignUp} from './components/signup'
import Car from './components/navbar'
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import { useMutation, useQuery   } from '@apollo/client';
import { GET_GEN_3  } from "./gql/Query";
import { GET_GEN_4 , POST_GEN_5 , deletee } from "./gql/Mutation";


function App( ) {
 
 
 // const   {  loading, error , data } = useQuery(GET_GEN_3  , {  variables: {},  } );
 // console.log("dfdf"); /* meka deparak run wenwa . cz mn hithanne asyc seen ekak atthe */
 // console.log({data});
 // console.log(data);

  
 // const [ newuser, {  data:data3, loading : loading3, error:error3   } ] = useMutation(POST_GEN_5  );
 // newuser({ variables: { firstName:'waraaa'  , password:'fdfd'}});
 // console.log("wwqew"); 
 // console.log({data3});
 // console.log({loading3});
 // console.log({error3});

  
 // const [deleteBook , { loading:l, error:e }] = useMutation(
 //   deletee
 // );
 // deleteBook({ variables: {  id : "62f79cd71d59871fdc7681c1" }});
  

  return (
    <Router>
      <div className="App">
      ;
        <div className="auth-wrapper">
          <div className="auth-inner">
          {/* <Routes> </Routes> dekak liyala tyenne nikan . ekak athule liyanna th pluwan emeeka . but mata balann oni una dewidihakata liwwoth wada karayi da kiyala   */}
            <Routes>
              <Route exact path="/" element={ <> <Car  signin = "/sign-in"  signup = '/sign-up' /> <Login />  </>} />
              <Route path="/sign-in" element={ <>  <Login /> <Car  signin = "/sign-in"  signup = '/sign-up' />  </>  } />
            </Routes>
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </div>
        </div>
        <Link to="/Page1"><button>
           Go to Page 1 test button  
         </button>
         </Link>
         
      </div>
      <Link to="/Page1"><button>
           Go to Page 1 test button  
         </button>
         </Link>
         
    </Router>
    
  )
}

export default App

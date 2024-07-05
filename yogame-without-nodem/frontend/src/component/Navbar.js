import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from 'react'
import { Link } from 'react-router-dom';
import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (


    <nav className='flex w-screen justify-between items-center sm:px-20 px-3 py-6 '>





      {isAuth() ? (
        userType() === "recruiter" ? (
          <>
            <div className='menu'>
              <Link to="/">
                <button>HOME</button>
              </Link>
            </div>
            <div className='logIn'>
              <Link to="/profile"> {/* Corrected path */}
                <button>PROFILE</button>
              </Link>
            </div>
            <div className='logIn'>
              <Link to="/logout"> {/* Corrected path */}
                <button>lOG-OUT</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className='menu'>
              <Link to="/">
                <button>HOME</button>
              </Link>
            </div>
            <div className='logIn'>
              <Link to="/YogaMe"> {/* Corrected path */}
                <button>YOGA-ME</button>
              </Link>
            </div>
            <div className='logIn'>
              <Link to="/Instructor"> {/* Corrected path */}
                <button>INSTRUCTOR lIST</button>
              </Link>
            </div>
            {/* <div className='logIn'>
              <Link to="/profile"> 
                <button>Profile</button>
              </Link>
            </div> */}
            <div className='logIn'>
              <Link to="/logout"> {/* Corrected path */}
                <button>lOG-OUT</button>
              </Link>
            </div>
          </>
        )
      ) : (
        <>
          <div className='menu'>
            <Link to="/">
              <button>HOME</button>
            </Link>
          </div>
          <div className='logIn'>
            <Link to="/SignUp">
              <button>SIGN-UP</button>
            </Link>
          </div>
          <div className='logIn'>
            <Link to="/LogIn">
              <button>lOG-IN</button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

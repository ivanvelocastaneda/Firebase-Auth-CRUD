import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./NavBar.css";
import cart from "../components/assets/cart.png";
import profilelogo from "../components/assets/profilelogo.png";
import { auth, db } from "../config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const NavBar = () => {
  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const userCollectionRef = collection(db, "users");
    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            //console.log(q);
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const loggeduser = GetCurrentUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };
  return (
    <div>
      <div className="navbar">
        <div className="leftContainer">
          <h1>
            <Link to="/" className="logo">
              Clothing Shop
            </Link>
          </h1>
        </div>
        <div className="rightContainer">
          {!loggeduser && (
            <nav>
              <Link to="/">
                <button>Home</button>
              </Link>

              <Link to="/signup">
                <button>Sign up</button>
              </Link>

              <Link to="/login">
                <button>Login</button>
              </Link>
              <div className="cart-btn">
                <img src={cart} alt="no img" />
                <span className="cart-icon-css">0</span>
              </div>
              <Link to="/profile">
                <img src={profilelogo} className="profile-icon" />
              </Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </nav>
          )}
          {loggeduser && (
            <nav>
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/sellproduct">
                <button>Sell</button>
              </Link>
              <div className="cart-btn">
                <img src={cart} alt="no img" />
                <span className="cart-icon-css">{loggeduser[0].cart}</span>
              </div>
              <Link to="/profile">
                <img src={profilelogo} className="profile-icon" />
              </Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </nav>
          )}
        </div>
      </div>
      <div className="product-types">
        <a href="/product-type/shoes">
          <button>Shoes</button>
        </a>
        <a href="/product-type/clothes">
          <button>Clothes</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;

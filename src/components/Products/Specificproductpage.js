import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getDoc,
  doc
} from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import "./Specificproductpage.css";
import ProductSlider from "./ProductSlider";

const Specificproductpage = () => {
  const { type, id } = useParams();
  const { product, setProduct } = useState("");
  const { successMsg, setSuccessMsg } = useState("");
  const { errorMsg, setErrorMsg } = useState("");

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

  function GetCurrentProduct() {
    //const productCollectionRef = collection(db, `products-${type.toUpperCase()}`))
    useEffect(() => {
      const getProduct = async () => {
        const docRef = doc(db, `products-${type.toUpperCase()}`, id);
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
      };
      getProduct();
    }, []);

    return product;
  }
  GetCurrentProduct();

  return (
    <div>
      <NavBar />
      {product ? (
        <div className="myprod-container">
          <div className="prod-img-cont">
            <img src={product.productImage} />
          </div>
          <div className="prod-data">
            <p className="prod-head">{product.producttitle}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Specificproductpage;

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../services/apiServices";
import { Link, useNavigate } from "react-router-dom";

function Input({ show, onHide }) {
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [allResults, setAllResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(API_URL + `/jewelry?s=${searchTerm}`);
      const data = await response.json();

      setAllResults(data);

      const filteredData = data.filter((obj) =>
        obj.name.startsWith(searchTerm.charAt(0))
      );

      setFilteredResults(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchIconClick = () => {
    if (searchTerm) {
      const exactMatch = allResults.find(
        (obj) => obj.name.toLowerCase() === searchTerm.toLowerCase()
      );
  
      if (exactMatch) {
        setFilteredResults([]);
        nav(`/productInfo/${exactMatch._id}`); 
        onHide();
      } else {
        const startsWithResults = allResults.filter((obj) =>
          obj.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setFilteredResults(startsWithResults);
      }
    }
  };

  const toClose = () => {
    onHide();
  };

  useEffect(() => {
    if (show && searchTerm) {
      handleSearch();
    } else {
      setSearchTerm("");
      setFilteredResults([]);
    }
  }, [show]);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm]);

  return (
    <Modal show={show} onHide={onHide} size="md">
      <Modal.Header className="border border-0" closeButton />
      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      <div className="input-group p-4">
        <button
          className="btn btnTwo"
          type="button"
          id="button-addon1"
          onClick={handleSearchIconClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
        <input
          dir="rtl"
          type="search"
          className="form-control"
          placeholder="לחפש..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearchIconClick();
            }}}/>
      </div>
      <div>
        {filteredResults.map((obj) => (
        <div dir="rtl" key={obj._id} className="container">
        <div className=" px-4 my-3   bbggColor">
          <Link to={`/productInfo/${obj._id}`} className="link">
            <div onClick={toClose} className="d-flex justify-content-between align-items-center">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={obj.img_url}
                  alt={obj.name}
                  width={60}
                  height={45}
                  style={{ verticalAlign: "middle" }}
                />
                <p className="pe-3" style={{ margin: "0", marginLeft: "10px" }}>{obj.name}</p>
              </div>
              <p style={{ margin: "0" }}>{obj.price.toFixed(2)} ₪</p>
            </div>
          </Link>
        </div>
      </div>
      ))}
      </div>
      </div>
    </Modal>
  );
}
export default Input;

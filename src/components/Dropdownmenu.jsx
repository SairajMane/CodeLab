import React,{useState} from 'react';
import { useEffect } from 'react';
import { Dropdown } from 'rsuite';
import "../css/dropdown.css"


function Dropdownmenu() {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["C++", "Java", "Python"];

    return(
        <Dropdown title ={selectedOption == "" ? "Select Language" : selectedOption}>
        {options.map((option, index) => (
          <Dropdown.Item
              key={index}
              onClick={()=>setSelectedOption(option)}
            >
              {option}
          </Dropdown.Item>
        ))}
        </Dropdown>
    )
}
export default Dropdownmenu;
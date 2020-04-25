import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Item from "./components/item";
import useList from './hook/useList'
import Input from './components/Input'
import Useref from './components/Useref'

const inputStyle = {
  width:"400px",
  height:'40px',
  fontSize:'30px',
  marginBottom :'10px'
}

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

function App() {
  const [name, setName] = useState("ssss");
  const [incom, setIncom] = useState("low");
  const items = useList(initList);
  const [editable, setEditable] = useState(false);
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();
 const firstnameRef = useRef(null);
 const lastnameRef = useRef(null);

    // useEffect(() => {
    // nameRef.current.focus();
    // }, [])

  function removeItemHandle(e) {
    const {name} = e.target;
    items.removeItem(name)
  }

  const handleDoubleClick = () => {
    setEditable(true)
  }

  const handleOnKeyPress = (e, index) => {
    const {value} = e.target;
    if(e.key==='Enter') {
      setEditable(false)
      items.setItem(index, value);
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleIncome = (e) => {
    setIncom(e.target.value)
  }

  const handleSubmitForm = () => {
    console.log('state = ', name, incom)
  }

  const keyPressHandle = (e) => {
    if(e.keyCode===13) {
      if(e.target.id === 'nameInput') {
        ageRef.current.focus()
      } else if(e.target.id==='ageInput') {
        marriedRef.current.focus();
      } else if(e.target.id==='marriedInput') {
        submitRef.current.focus()
      }
      // console.log('keyPressHandle')
    }
  }

  const handleClickSubmit = () => {
    alert('handleClickSubmit')
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Grocery List</h2>
        {items.list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calorie}`}
              item={v}
              onClick={removeItemHandle}
              editable={editable}
              handleDoubleClick={handleDoubleClick}
              handleOnKeyPress={handleOnKeyPress}
              index={k}
            />
          );
        })} */}
        {/* onChange event ||
                           \/   */}
        {/* <form onSubmit={handleSubmitForm}>
          <div>
            <span>Name : </span>
            <input value={name} onChange={handleName} type="text" />
          </div>
          <div>
            <span>Income : </span>
            <select value={incom} onChange={handleIncome}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form> */}

        {/* <h3>UseRefs Hook</h3>
        <Useref
          nameRef={nameRef}
          keyPressHandle={keyPressHandle}
          ageRef={ageRef}
          submitRef={submitRef}
          marriedRef={marriedRef}
          handleClickSubmit={handleClickSubmit}
          /> */}

        <Input ref={firstnameRef} type="text" placeholder="Type first name" style={inputStyle} />
        <Input ref={lastnameRef} type="password" placeholder="Type last name" style={inputStyle} />
      </header>
    </div>
  );
}

export default App;

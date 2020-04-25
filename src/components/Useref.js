import React from 'react'

const Useref = (props) => {
    const {nameRef, ageRef,marriedRef,submitRef, handleClickSubmit, keyPressHandle} = props
    return (
        <div>
            <div className="form-field">
            <span>Name : </span>
            <input ref={nameRef} id="nameInput" onKeyDown={keyPressHandle} type="text" />
            </div>
            <div className="form-field">
            <span>Age : </span>
            <input ref={ageRef} id="ageInput" onKeyDown={keyPressHandle} type="text" />
            </div>
            <div className="form-field">
            <span>Married ?  : </span>
            <input ref={marriedRef} id="marriedInput" onKeyDown={keyPressHandle} type="checkbox" />
            </div>
            <div>
            <input type="submit"  onKeyDown={keyPressHandle} ref={submitRef} onClick={handleClickSubmit} value="Submit" />
            </div>
        </div>
    )
}

export default Useref
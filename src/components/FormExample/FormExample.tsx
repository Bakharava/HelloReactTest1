import React, {ChangeEvent, MouseEvent, TouchEvent,  useRef, useState} from 'react';
import { address } from '../../__mocks__/address';
import {FormExampleProps} from "../../types/formTypes";

const FormExample = ({name,
                       comment,
                       selectedAddress,
                       setName, setComment,
                       setSelectedAddress}: FormExampleProps) => {
  const [fullName, setFullName] = useState('');
  const secondNameRef = useRef<HTMLInputElement>(null);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleChooseAddress = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAddress(e.target.value);
  };

  const handleSubmit = (e: TouchEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFullName(name + ' ' + secondNameRef?.current?.value);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" onChange={handleChangeName} value={name} />
        </label>
        <br />
        <label>
          Second Name:
          <input type="text" name="secondName" ref={secondNameRef} />
        </label>
        <label htmlFor="comment">Your comments:</label>
        <textarea id="comment" onChange={handleChangeComment} value={comment} />
        <br />

        <label htmlFor="address">Choose your address</label>
        <select name="address" value={selectedAddress} onChange={handleChooseAddress}>
          {address.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;

import React, { ChangeEvent, MouseEvent, TouchEvent, useRef, useState } from 'react';
import { address } from '../../__mocks__/address';
import { FormExampleProps } from '../../types/formTypes';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/user';

const FormExample = ({ name, comment, selectedAddress, setName, setComment, setSelectedAddress }: FormExampleProps) => {
  const dispatch = useDispatch();
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
    dispatch(addUser({ name, secondName: secondNameRef?.current?.value }));
  };

  return (
    <div>
      <div>{fullName}</div>
      <form>
        <label>
          Name:
          <input onChange={handleChangeName} type="text" value={name} />
        </label>
        <br />
        <label>
          Second Name:
          <input name="secondName" ref={secondNameRef} type="text" />
        </label>
        <label htmlFor="comment">Your comments:</label>
        <textarea id="comment" onChange={handleChangeComment} value={comment} />
        <br />

        <label htmlFor="address">Choose your address</label>
        <select name="address" onChange={handleChooseAddress} value={selectedAddress}>
          {address.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;

import { useRef, useState } from 'react';
import { address } from '../../__mocks__/address';

const FormExample = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('Hello');
  const [selectedAddress, setSelectedAddress] = useState(address[2]);
  const [fullName, setFullName] = useState('');
  const secondNameRef = useRef(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handleChooseAddress = (e) => {
    setSelectedAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(name + ' ' + secondNameRef.current.value);
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

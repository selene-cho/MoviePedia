import { useState } from 'react';
import './ReviewForm.css';
import FileInput from './FileInput';

export default function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
    imgFile: null,
  });

  function sanitize(value, type) {
    switch (
      type // input이 숫자형일 때만 따로 처리
    ) {
      case 'number':
        return Number(value) || 0;

      default:
        return value;
    }
  }
  const handleChange = (name, value, type) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: sanitize(value, type),
    }));
  };
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, value, type);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        type="file"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

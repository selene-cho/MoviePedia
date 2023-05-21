import { useState } from 'react';
import './ReviewForm.css';

export default function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
      // [표현식]: 값 -> 표현식의 값을 프로퍼티 명으로 사용가능
      // [e.target.name]: e.target: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange} />
      <input
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

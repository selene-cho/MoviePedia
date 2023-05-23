import Rating from './Rating';
import './ReviewListItem.css';

// createdAt 숫자형 데이터 YYYY.MM.DD로 보여주기 위한 함수
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// Review '하나씩' 보여주는 컴포넌트
export default function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭 제</button>
      </div>
    </div>
  );
}

import ReviewListItem from './ReviewListItem';

// Review '전체' 보여주는 컴포넌트
export default function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

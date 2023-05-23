import './Rating.css';

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating, onSelect, onHover }) {
  const className = `Rating-star ${selected ? 'selected' : ''}`;

  const handleClick = onSelect ? () => onSelect(rating) : undefined;
  // 별점 보여주기만 하는 컴포넌트에서는 별모양 클릭했을 때 아무 동작 일어나지 않음

  const handleMouseOver = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      ★
    </span>
  );
}

export default function Rating({
  className,
  value = 0,
  onSelect,
  onHover,
  onMouseOut,
}) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

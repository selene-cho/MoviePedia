/**
 * request 함수(API 요청) 모아 놓은 파일
 */

const BASE_URL = 'https://learn.codeit.kr/0529';

// Review 가져오는 함수
export async function getReviews({
  order = 'createdAt',
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`);
  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

// Review 생성하는 함수
export async function createReview(formData) {
  // throw new Error('버그가 아니라 기능입니다'); // 에러메세지 출력 잘 되는지 TEST
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('리뷰를 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

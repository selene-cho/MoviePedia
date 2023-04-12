/**
 * request 함수(API 요청) 모아 놓은 파일
 */

// Review 가져오는 함수
export async function getReviews() {
  const response = await fetch('https://learn.codeit.kr/0529/film-reviews');
  const body = await response.json();
  return body;
}

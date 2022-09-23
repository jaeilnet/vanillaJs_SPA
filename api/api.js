export const API_END_POINT =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    return await res.json();
  }

  throw new Error("API 요청 실패");
};

export const fetchedLanguages = async (keyowrd) =>
  request(`${API_END_POINT}/languages?keyword=${keyowrd}`);

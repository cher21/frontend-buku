export const REGEX = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PASSWORD: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
  NO_TELP: /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/,
  // eslint-disable-next-line max-len
  URL: /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
  NUMBER: /^\d+$/,
};

export const COOKIES = {
  TOKEN: "user_session_token",
  FIRST_LOGIN: "is_first_login",
  SEARCH_SUMMARY: "search_summary_list",
  USER_SESSION: "user_session",
};

export const ROLE = {
  ADMIN: "admin",
  USER: "pegawai",
};

const BASE_URL=process.env.REACT_APP_BASE_URL?.replace(/\/+$/, "");
export const categories={
  CATEGORIES_API:BASE_URL + "/course/showAllCategories", 
}

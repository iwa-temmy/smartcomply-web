export const truncateText = (str, noOfChar) => {
  if (!str) return "";
  return str.slice(0, noOfChar) + "...";
};

export const capitalizeText = str => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getJSON = str => {
  let json;
  try {
    json = JSON.parse(str);
  } catch (err) {
    return json;
  }
  return json;
};

export const getDateFromDateTimeString = dateTimeStr => {
  const date = dateTimeStr.split(" ")[0];
  const dateObj = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return dateObj.toLocaleDateString("en-US", options);
};

export const getImageURL = url => {
  return url.includes(
    "https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId="
  )
    ? null
    : url;
};

export const replaceAllInstance = (existing, newStr, word) => {
  const re = new RegExp(existing, "g");
  return word.replace(re, newStr);
};

export const getAllCategories = posts => {
  let categories = [];
  for (let i = 0; i < posts.items.length; i++) {
    categories = [...categories, ...posts.items[i].categories];
  }

  return [...new Set(categories)];
};

export const filterMatch = (filter, post) => {
  const { categories: filterCategories, name: filterName } = filter;
  const { categories: postCategories, title: postTitle } = post;

  const categoriesFilter = filterCategories.length
    ? postCategories.some(postCategory =>
        filterCategories.includes(postCategory)
      )
    : true;
  const nameRegEx = new RegExp(filterName, "i");
  const nameFilter = filterName ? postTitle.match(nameRegEx) : true;

  return categoriesFilter && nameFilter;
};

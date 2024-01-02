import { stateData, strData } from "./data.js";

export const handleButtonClick = (inputValue) => {
  const matchedItem = stateData.find((item) => item.text === inputValue);
  
  if (matchedItem) {
    // 여기에서 원하는 로직을 구현할 수 있습니다.
    window.location.hash = matchedItem.hash;
    return {
      status: "success",
      matchedItem: matchedItem,
    };
  } else {
    return {
      status: "error",
      message: "일치하는 이름을 찾을 수 없습니다.",
    };
  }
};
function convertCurrency(amount) {
    return amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  
  function abbreviateWords(words) {
    let wordsArr = words.split(" ");
    let abbreviation = wordsArr
      .map((word) => word.slice(0, 1))
      .join("")
      .toUpperCase();
    return abbreviation;
  }
  
  function addProductLocalStorage(addedPro, proId) {
    const currentData = localStorage.getItem("cart");
    let cartList = currentData ? JSON.parse(currentData) : [];
  
    let isNewProduct = cartList.every((product) => {
      if (product.id === proId) {
        product.quantity += addedPro.quantity;
        return false;
      }
      return true;
    });
  
    if (isNewProduct) {
      cartList.push(addedPro);
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
  }
  
  export { convertCurrency, abbreviateWords, addProductLocalStorage };
  
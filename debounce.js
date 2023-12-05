let count = 0;
let delayCount = 0;
const btn = document.querySelector(".click-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const immediateBtn = document.querySelector(".immediate-btn");
const clickCount = document.querySelector(".click-count");
const debounceCount = document.querySelector(".debounce-count");

const clickHandler = () => {
  count += 1;
  clickCount.innerText = `${count}`
}

const delayFunction = () => {
  delayCount += 1;
  debounceCount.innerText = `${delayCount}`;
}

const debounce = (func, wait = 500, immediate = false) => {
  let timeoutId;
  let promise;
  let resolvePromise; 

  const setPromise = () => {
    if(resolvePromise) {
      resolvePromise();
      resolvePromise = null;
    }
  }

  const debounced = () => {
    const later = () => {
      timeoutId = null;
      if (!immediate) {
        func();
        setPromise();
      }
    }
    clearTimeout(timeoutId);
  
    if (!promise) {
      promise = new Promise(resolve => {
        resolvePromise = resolve;
      });
    }
    if (immediate) {
      func();
      setPromise();
    }
    timeoutId = setTimeout(later, wait);
    return promise;
  };
  
  debounced.cancel = () => {
    clearTimeout(timeoutId);
    timeoutId = null;
    setPromise();
  };

  return debounced;
}

let delayDebounced = debounce(delayFunction, 500);
let immediateDebounced = debounce(delayFunction, 500, true);

btn.addEventListener("click", () => {
  clickHandler();
  delayDebounced().then(() => console.log('클릭')); 
});
cancelBtn.addEventListener("click", delayDebounced.cancel);
immediateBtn.addEventListener("click", () => {
  delayDebounced.cancel();
  immediateDebounced().then(() => console.log('즉시 디바운스')); 
});

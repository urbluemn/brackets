module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};

  for(let el of bracketsConfig){
    brackets[el[0]] = el[1];
  }
  for(let el of str) {
    if(el === stack[stack.length-1] && el === brackets[el]) {
      stack.pop()
    } else if (el in brackets) {
      stack.push(el);
    } else if (brackets[stack.pop()] !== el) {
      return false;
    }
  }

 return stack.length === 0;
};

console.log(
  module.exports("([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))", [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']])
);

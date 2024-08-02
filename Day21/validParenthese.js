function isValidParentheses(s){
    let stack = [];
        let n = s.length;
        if (n === 1) return false;

        for (let i = 0; i < n; i++) {
            let ch = s.charAt(i);
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            } else if (ch === ')') {
                if (stack.length === 0 || stack[stack.length - 1] !== '(') return false;
                stack.pop();
            } else if (ch === '}') {
                if (stack.length === 0 || stack[stack.length - 1] !== '{') return false;
                stack.pop();
            } else if (ch === ']') {
                if (stack.length === 0 || stack[stack.length - 1] !== '[') return false;
                stack.pop();
            }
        }
        return stack.length === 0;
}

console.log(isValidParentheses("()"));     
console.log(isValidParentheses("()[]{}"));  
console.log(isValidParentheses("(]"));      
console.log(isValidParentheses("([)]"));    
console.log(isValidParentheses("{[]}")); 
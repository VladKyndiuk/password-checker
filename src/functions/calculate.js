 const calculatePasswordStrength = (password) => {
    const letters = /[\p{L}]+/u;
    const digits = /\d+/;
    const symbols = /[!-\/:-@[-`{-~]/;

    if(password.length<=0){
      return -1;
    }else if(password.length<8){
      return 0;
    }

    let lettersTest = letters.test(password);
    let digitsTest = digits.test(password);
    let symbolsTest = symbols.test(password);

    if(lettersTest&&digitsTest&&symbolsTest){
        return 3;
    }else if(lettersTest&&digitsTest||lettersTest&&symbolsTest||digitsTest&&symbolsTest){
        return 2;
    }else if(lettersTest||digitsTest||symbolsTest){
        return 1;
    }
    
}

export default calculatePasswordStrength;
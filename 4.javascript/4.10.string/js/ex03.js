//Kiểm tra độ mạnh / yếu mật khẩu
// - Độ dài >= 8 ký tự
// - Có ít nhất 1 chữ hoa
// - Có ít nhất 1 chữ thường
// - Có ít nhất 1 chữ số
// - Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

const isStrengthPassword = (password) => {
    const LENGTH = 8;
    const SYMBOL = '!@#$%^&*()';
    const NUMBER = '0123456789';
    let isUpper = false;
    let isLower = false;
    let isNumber = false;
    let isSymbol = false;
    if (password.length < LENGTH) {

        return {
            isValid: false,
            isUpper,
            isLower,
            isNumber,
            isSymbol,
            isLength: false
        };
    }

    for (let i = 0; i < password.length; i++) {
        const char = password.charAt(i);

        if (char >= 'A' && char <= 'Z') {
            isUpper = true;
        }

        if (char >= 'a' && char <= 'z') {
            isLower = true;
        }

        if (NUMBER.includes(char)) {
            isNumber = true;
        }

        if (SYMBOL.includes(char)) {
            isSymbol = true;
        }
    }

    return {
        isValid: isUpper && isLower && isNumber && isSymbol,
        isUpper,
        isLower,
        isNumber,
        isSymbol,
        isLength: true
    };

}

console.log(isStrengthPassword('hoangan@111'));


//return true / false
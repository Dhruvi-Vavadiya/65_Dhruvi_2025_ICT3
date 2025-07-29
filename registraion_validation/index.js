
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidMobile(mobile) {
    return /^[6-9]\d{9}$/.test(mobile);
}

function isNonEmptyString(str) {
    return typeof str === 'string' && str.trim().length > 0;
}

function isStrongPassword(pwd, minLen = 6) {
    return typeof pwd === 'string' && pwd.length >= minLen;
}

module.exports = {
    isValidEmail,
    isValidMobile,
    isNonEmptyString,
    isStrongPassword
};

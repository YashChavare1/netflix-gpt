export const validateSignUp = (name, email, password) => {
    const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName = /^[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+$/.test(name);

    if(!isValidName) return "Name is not valid";
    if(!isValidEmail) return "Email ID is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
}

export const validateSignIn = (email, password) => {
    const isValidEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return "Email ID is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
}
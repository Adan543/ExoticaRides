export function LoginToSignUp() {
    const LoginForm = document.querySelector("#LoginForm");
    const SignUpForm = document.querySelector("#SignupForm");

    LoginForm.classList.add('form--hidden');
    SignUpForm.classList.remove('form--hidden');
}

 export function SignUpToLogin() {
    const LoginForm = document.querySelector("#LoginForm");
    const SignUpForm = document.querySelector("#SignupForm");

    LoginForm.classList.remove("form--hidden");
    SignUpForm.classList.add("form--hidden");
}


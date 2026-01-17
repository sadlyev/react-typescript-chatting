import { useEffect, useState } from "react"

export const LoginApp = () => {

     const [emailText, setemailText] = useState("")
  const [passwordText, setpasswordTest] = useState(undefined)

  function handleEmailInput(ev: any) {
    return setemailText(ev.target.value)
  }

  function handlePasswordInput(ev1: any) {
    return setpasswordTest(ev1.target.avlue)
  }

    return (
    <div className="register_panel">
      <div className="register_wrapper">
        <svg className="register_panel-icon" width="30" height="30">
          <use href="./public/img/file.svg#market-icon"></use>
        </svg>
        <h1 className="register_panel-title">Welcome Back</h1>
        <p className="register_panel-description">
          Sign in to your account to continue shopping
        </p>
      </div>
      <form className="register_form">
        <div className="register_form-wrapper">
          <div className="register_form-inner">
            <span className="register_form-title">Email</span>
            <label className="register_form-label">
              <svg className="register_form-icon" width="20" height="20">
                <use href="./public/img/file.svg#email-icon"></use>
              </svg>
              <input
                className="register_form-input"
                placeholder="your@example.com"
                value={emailText}
                onChange={handleEmailInput}
              ></input>
            </label>
          </div>
          <div className="register_form-inner">
            <span className="register_form-title">Password</span>
            <label className="register_form-label">
              <svg className="register_form-icon" width="20" height="20">
                <use xlinkHref="./public/img/file.svg#lock-icon"></use>
              </svg>

              <svg className="register_form-icon-eye" width="20" height="20">
                <use xlinkHref="./public/img/file.svg#eye-icon"></use>
              </svg>
              <input
                className="register_form-input"
                placeholder="&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;&#8901;"
                value={passwordText}
                onChange={handlePasswordInput}
              ></input>
            </label>
          </div>
        </div>

        <div className="register_form-inner">
          <a className="register_form-recover">Forgot password?</a>
          <button className="register_form-submit">Sign In</button>
        </div>

        <div className="register_form-inner-wrapper">
          <span className="register_form-login-title">
            Don't have an account?
          </span>
          <span className="register_form-login">Sign Up</span>
        </div>
      </form>
    </div>
  );
}
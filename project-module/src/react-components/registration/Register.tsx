import { useState } from "react"
import type { pageList } from "../Navigation"

type changePage ={
  page: (v: pageList) => void
}


export const RegisterApp = ({page} : changePage) => {

     const [emailText, setemailText] = useState("")
  const [passwordText, setpasswordTest] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")

  function handleEmailInput(ev: any) {
    return setemailText(ev.target.value)
  }

  function handlePasswordInput(ev1: any) {
    return setpasswordTest(ev1.target.value)
  }

  function handleConfirmPasswordInput(ev2: any) {
    return setConfirmPassword(ev2.target.value)
  }

  function handleFullName(ev4: any) {
    return setFullName(ev4.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault()

      const data = new FormData(e.currentTarget)
    console.log(Object.values(data))
    e.currentTarget.reset()
  }

  // this is where i stopped

    return (
    <div className="register_panel">
      <div className="register_wrapper">
        <svg className="register_panel-icon" width="30" height="30">
          <use href="./public/img/file.svg#market-icon"></use>
        </svg>
        <h1 className="register_panel-title">Create Account</h1>
        <p className="register_panel-description">
          Sign up to start your shopping journey
        </p>
      </div>
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="register_form-wrapper">
           <div className="register_form-inner">
            <span className="register_form-title">Full Name</span>
            <label className="register_form-label">
              <svg className="register_form-icon" width="20" height="20">
                <use href="./public/img/file.svg#email-icon"></use>
              </svg>
              <input
                className="register_form-input"
                placeholder="John Doe"
                value={fullName}
                onChange={handleFullName}
                required
                name="fullName"
              ></input>
            </label>
          </div>
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
                required
                 name="fullEmail"
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
                required
                 name="fullPassword"
              ></input>
            </label>
          </div>
          <div className="register_form-inner">
            <span className="register_form-title">Confirm Password</span>
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
                value={confirmPassword}
                onChange={handleConfirmPasswordInput}
                required
                 name="confirmPassword"
              ></input>
            </label>
          </div>
        </div>

        <div className="register_form-inner">
          <button className="register_form-submit" type={"submit"}>Create Account</button>
        </div>

        <div className="register_form-inner-wrapper">
          <span className="register_form-login-title">
            Already have an account?
          </span>
          <span className="register_form-login" onClick={() => page("login")}>Sign In</span>
        </div>
      </form>
    </div>
  );
}
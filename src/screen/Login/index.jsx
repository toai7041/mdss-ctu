import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      msg: "",
      status: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    var users = [
      { email: "toai@gmail.com", password: "123456" },
      { email: "duy@gmail.com", password: "123456" },
      { email: "ngoc@gmail.com", password: "123456" },
      { email: "tinh@gmail.com", password: "123456" },
    ];
    event.preventDefault();

    const found = users.find(
      (user) =>
        user.email === this.state.email && user.password === this.state.password
    );

    if (found)
      this.setState({ msg: "Đăng nhập thành công rồi ạ !!!", status: "true" });
    else
      this.setState({
        msg: "Đăng nhập không thành công do sai Email hoặc Mật khẩu !!!",
        status: "false",
      });
  }

  render() {
    return (
      <>
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <div className="inputGroup inputGroup0">Đăng nhập tài khoản</div>
            <div className="inputGroup inputGroup1">
              <label htmlFor="loginEmail" id="EmailLabel">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="loginEmail"
                placeholder="Nhập Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="inputGroup inputGroup2">
              <label htmlFor="loginPassword" id="PasswordLabel">
                Mật khẩu
              </label>
              <input
                name="password"
                type="password"
                id="loginPassword"
                placeholder="Nhập mật khẩu"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="inputGroup inputGroup3">
              <button
                type="submit"
                id="login"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Đăng nhập
              </button>
            </div>
          </form>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Thông báo cực mạnh luôn
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i aria-hidden="true" className="closebtn">
                      &times;
                    </i>
                  </button>
                </div>
                <div className="modal-body">{this.state.msg}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.reload();
                    }}
                  >
                    Đóng
                  </button>
                  {this.state.status === "true" ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                      }}
                    >
                      Trang chủ
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      name:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update=this.update.bind(this);
  }

  update(e,field) {
    e.preventDefault();
    this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {
        const signupReq = () => {
          if (this.props.formType.includes("Log")) {
            return (
              <div>
              <form onSubmit={this.handleSubmit}>
                <label>Email:
                  <input
                    placeholder="Email"
                    type="text"
                    value={this.state.email}
                    onChange={(e)=>this.update(e,"email")}
                    ></input>
                </label>
                <label>Password:
                  <input
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(e)=>this.update(e,"password")}
                    ></input>
                </label>
                <input type="submit" value="Log In"></input>
              </form>
              </div>
            )
          } else {
            return (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>Enter Name:
                    <input type="text" value = {this.state.name} onChange={(e)=>this.update(e,"name")} />
                  </label>
                  <label>
                    Enter Email:
                    <input type="text" value = {this.state.email} onChange={(e)=>this.update(e,"email")}/>
                  </label>
                  <label>
                    Enter Password:
                    <input type="text"  value = {this.state.password} onChange={(e)=>this.update(e,"password")} />
                  </label>
                  <label>
                    Repeat Password:
                    <input type="text" value = {this.state.password2} onChange={(e)=>this.update(e,"password2")} />
                  </label>
                  <input type="submit" value="Create User" />
                </form>
              </div>
          )
        }
      }

      return (
        <div>
          <h2>Welcome to BartVenture</h2>
          <div>
            {signupReq()}
          </div>
        </div>
      )
  }
}

export default withRouter(SessionForm);

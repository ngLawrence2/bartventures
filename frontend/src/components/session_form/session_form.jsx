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
    if(this.props.formType === 'login') {
      this.state = {
        email: '',
        password:''
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update=this.update.bind(this);
    this.displaySignUpForms = this.displaySignUpForms.bind(this);
    this.displayErrors=this.displayErrors.bind(this);
  }

  update(e,field) {
    e.preventDefault();
    this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  displaySignUpForms() {
    if(this.props.formType === 'signup') {
      return (
        <div>
          <label>Enter Name:
              <input type="text" value = {this.state.name} onChange={(e)=>this.update(e,"name")} />
          </label>
          <label>
              Repeat Password:
              <input type="text" value = {this.state.password2} onChange={(e)=>this.update(e,"password2")} />
          </label>
        </div>
      );
    }
  }

  displayErrors() {
    return (
      <div>
        {this.props.errors.map( (err,idx) => {
           return (<ul key={idx}>{err}</ul>)
        })}
      </div>
    );
  }



  render() {
<<<<<<< HEAD
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
=======
    const display = this.displaySignUpForms();
    const error = this.displayErrors();
    return (
      <div>
        <h2>Welcome to BartVenture</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
            Enter Email:
            <input type="text" value = {this.state.email} onChange={(e)=>this.update(e,"email")}/>
        </label>
        <label>
            Enter Password:
            <input type="password"  value = {this.state.password} onChange={(e)=>this.update(e,"password")} />
        </label>
          {display}
        <input type="submit" value={this.props.buttonText} />
        </form>
        {this.props.navLink}
        {error}


      </div>
>>>>>>> 4cc1f9044f973242f69aa59221b2b806c8e7edf8

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

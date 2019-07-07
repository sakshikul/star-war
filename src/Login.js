import React from 'react';
import './login.css';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            error : null,
            characters : [],
            username : '',
            password : '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            isloggedin: false
        }
        this.handleFunction = this.handleFunction.bind(this)
        this.formDataChange = this.formDataChange.bind(this)
    }

    handleFunction(e){
  e.preventDefault();;
        fetch("https://swapi.co/api/people/")
        .then(res => res.json())
        .then((result) => {
          this.setState({
              characters: result.results,
          })
          const username=this.state.username
          const password=this.state.password
          let loggedin = false

          this.state.characters.forEach(
                  function iterator( item, ) {
                    if(item.name===username & item.birth_year===password)
                    { console.log("logging");
                      loggedin = true;
                    }
                    else {
                      console.log("")
                    }
                },
            );
            if(loggedin===false)
            {
              alert('username/password is incorrect')
            }
            else{
              this.props.history.push(`/search`);
            }
            
    })}

    formDataChange(e){
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value});
      console.log(this.state.password,this.state.username)
    }
    render(){
       
        return(
            <div className = "login">
                <div className = "login__form">
                    <form >
                        <input type="text" onChange = {this.formDataChange} value={this.state.username} id="username" name="username" placeholder="user@example.com" type="username"  required/><br/>
                        <input type="text" onChange = {this.formDataChange} value={this.state.password} id="password" name="password" placeholder="password" type="password"  required/><br/>
                        <button type="submit" onClick =  {this.handleFunction} className = "login__form--submit">Login</button>
                    </form>
                </div>

            </div>
        )
    }
}


export default Login;
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
            pwd : ''
        }
        this.handleFunction = this.handleFunction.bind(this)
        this.formDataChange = this.formDataChange.bind(this)
    }

    handleFunction(e){
        fetch("https://swapi.co/api/people/")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                characters: result.results,
            })
            console.log("this.characters",typeof(this.characters))
            this.state.characters.forEach(
                function iterator( item ) {
                    console.log( "forEach:", item, e.target.username, e.target.pwd );
                },
                
            );
//eslint-disable-next-line
        // console.log("-->",typeof(this.characters))
    })}

    formDataChange(e){
        console.log(e.target.username)
       this.setState({
           username : e.target.username,
           

       })
    }
  

    render(){
        console.log (typeof(this.state.characters),this.state.characters)
        const { characters } = this.state
        return(
            <div className = "login">
               <h1 >hello</h1>
                <div className = "login__form">
                    <form >
                        <input onChange = {(event) =>this.formDataChange(event)} value={this.state.username} id="username" name="username" placeholder="user@example.com" type="email"  required/><br/>
                        <input onChange = {(event) =>this.formDataChange(event)} value={this.state.pwd} id="pass" placeholder="pass" type="password" required /><br/>
                        <button type="submit" onClick =  {this.handleFunction} className = "login__form--submit">Login</button>
                    </form>
                </div>
               
            </div>
        )
    }
}


export default Login;
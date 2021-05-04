import React, { useState } from 'react';
//import decode from 'jwt-decode';


import ChatPage from './ChatPage.js';
import './style.css';



const App = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    //const [userInfoLS, setUserInfoLS] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


   

    //const setToken = (id) => {
    //    localStorage.setItem('idToken', id);
    //}


    //const getToken = () => {
    //    return localStorage.getItem('idToken');
    //}






    //const isExpired = (token) => {
    //    const decoded = decode(token);
    //    if (decoded.exp < Date.now() / 1000) {
    //        return true
    //    }
    //    else return false;
    //}




    //const setUsernamePasswordToLocalStorage = () => {
    //    let userInfo = ls.get('userInfo') || [];
    //    if (userInfo.length !== -1) {
    //        userInfo.push(ls.set('userInfo', JSON.stringify({ userName, password })))
    //    }
    //    else {
    //        ls.set('userInfo', JSON.stringify({ userName, password }))
    //    }
    //}



    //function useStickyState(defaultValue, key) {
    //    const [value, setValue] = React.useState(() => {
    //        const stickyValue = window.localStorage.getItem(key);
    //        return stickyValue !== null
    //            ? JSON.parse(stickyValue)
    //            : defaultValue;
    //    });
    //    React.useEffect(() => {
    //        window.localStorage.setItem(key, JSON.stringify(value));
    //    }, [key, value]);
    //    return [value, setValue];
    //}



    //const getUsernamePasswordToLocalStorage = () => {
    //    const userInfo = ls.get('userInfo') || [];
    //    return userInfo;

    //}



    const signIn =   () => {
        while (userName === '' || userName.length < 5 || userName.length > 15 || password === '' || password.length < 5 || password.length > 10) {
            alert('A valid username and password are required ( between 5 and 10 characters )');
            return;
        }

        console.log(userName + password)

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        }


        fetch('/api/users', options)
            .then(res => console.log(res));


        //setUsernamePasswordToLocalStorage();
        //getUsernamePasswordToLocalStorage();

        //if (getUsernamePasswordToLocalStorage().indexOf({ userName, password }) !== -1) {
        //    console.log('already exists');
        //}
        //else console.log('not there');


    }



    const logIn =  (e) => {
        e.preventDefault();


        while (userName === '' || userName.length < 5 || userName.length > 15 || password === '' || password.length < 5 || password.length > 10) {
            alert('A valid username and password are required ( between 5 and 10 characters )');
            return;
        }


        //if (getUserNameLocalStorage().indexOf(userName) !== -1) {
        //    console.log(user)
        //}


      
        //await axios.post('/logIn', options)
        //    .then(res => setToken(res.token);




        //setLogInInfo((prev) => ({
        //    ...prev,
        //    userName: userName,
        //    password: password

        //}))
        //console.log(logInInfo);
        //setIsLoggedIn(true);
        //console.log(isLoggedIn);
    }





    //const loggedIn = () => {
    //    const idToken = getToken();

    //    if (idToken && !isExpired(idToken)) {
    //        setIsLoggedIn(true);
    //    }

    //}








    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1 className="display-4 bg-light">Chat App</h1>
            </div>
            <div className="container-3 d-flex">
                <div className="form-1">
                    <input onChange={({ target }) => setUserName(target.value)} className="message form-control form-control-sm m-3" type="text" placeholder="username" />
                    <input onChange={({ target }) => setPassword(target.value)} className="message form-control form-control-sm m-3" type="text" placeholder="password" />
                    <div className="input-group-append">
                        <button onClick={logIn} className="message-button btn btn-outline-secondary m-3" type="submit">Log In</button>
                    </div>
                </div>

                <div className="form-2">
                    <input onChange={({ target }) => setUserName(target.value)} className="message form-control form-control-sm m-3" type="text" placeholder="username" />
                    <input onChange={({ target }) => setPassword(target.value)} className="message form-control form-control-sm m-3" type="text" placeholder="password" />
                    <div className="input-group-append">
                        <button onClick={signIn} className="message-button btn btn-outline-secondary m-3" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>




    )




}


export default App;

//<div className="d-flex justify-content-between">
//    <div className="d-flex justify-content-center input-group mb-3">
//<div className="forms m-5">

//    <form className="form-control">
//        <input type="text" placeholder="Username" />
//        <input type="numbers" placeholder="Password" />
//        <button className="btn btn-small bg-primary">Sign Up</button>
//    </form>
//export default withRouter(App);


//<div className="forms m-5">
//    <form onSubmit={submitForm} className="form-control">
//        <input onChange={({ target }) => setUserName(target.value)} type="text" placeholder="Username" />
//        <input onChange={({ target }) => setPassword(target.value)} type="numbers" placeholder="Password" />
//        <button className="btn btn-small bg-success">Log In</button>
//    </form>
//</div>



## Motivation


This porject is made for Microsoft code challenge as Front-end job position. 





## Pages and Functions


There are two pages(routes) to implement Sign Up and Confirmation Processes before Registeration.



  ###  1. Router (in App.js)


There are two routes to access SignUp and Success functions by using HashRouter. 
To avoid double rendering by home url, exact attribute is added. 
     
     
     
     (......)
          <HashRouter>
            <Routes>
              <Route path="/" exact={true} element={<SignUp />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </HashRouter>
        );
      };
      export default App;




### 2. SignUp (in SignUp.js)


There are a form with fields { First Name, Email, Password }.




#### < Form input validation > 


To avoid invalidation input, test part is added in handelSubmit() function.
If values is not validated form, label tag's text is changed to notice the error reason.


    const data = new FormData(e.currentTarget);
    let validate = true;

    data.forEach((value, key) => {
      const element = document.getElementById(key);
      console.log(element, key);
      if (key === "firstName") {
        if (!value) {
          validate = false;
          element.innerHTML = "First Name : empty";
        } else if (!value.match(/^[a-zA-Z]+$/)) {
          validate = false;
          element.innerHTML = "First Name : only letters possible";
        } else {
          element.innerHTML = "First Name";
        }
      } else if (key === "email") {
        if (!value) {
          validate = false;
          element.innerHTML = "Email Address : empty";
        } else if (
          !value.indexOf("@") ||
          !value.indexOf(".") ||
          value.split("@").length > 2 ||
          value.split(".").length > 2
        ) {
          validate = false;
          element.innerHTML = "Email Address : not email form";
        } else {
          element.innerHTML = "Email Address";
        }
      } else {
        if (!value) {
          validate = false;
          element.innerHTML = "Password : empty";
        } else {
          element.innerHTML = "Password";
        }
      }
    });





### 3. Confirmation (in Success.js)

### Move to '/success' 


When there are not any errors, move to '/success' url.
state is transfered by useNavigate(). 
if state is null, page is redirected to home('/'), again.
     
     
     (......)
     const location = useLocation();
     const navigate = useNavigate();

     if (!location) navigate("/");
     return (
     (......)
     
     
     
## Installation and Setup Instructions

Intallation:

     npm install

To start:

     npm start




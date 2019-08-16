import axios from 'axios';

const urlUsers = 'http://localhost:3600/users/';

class HttpUserService {

  getUsers = (e) => {
    e.preventDefault();
    //const user = e.target.elements.username.value;

    var config={
      headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDRhMGQzMGJhNTBlNTI3ZGJlZTVlYjAiLCJlbWFpbCI6Im1hdGhldXNnbWNAaG90bWFpbC5jb20iLCJwZXJtaXNzaW9uTGV2ZWwiOjEsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoiTWF0aGV1cyBDYXJ2YWxobyIsInJlZnJlc2hLZXkiOiI1RFFzQ09samVlYnBTekZjbDdXTXdnPT0iLCJpYXQiOjE1NjUxMzQ1OTV9.DRwDUhkYF8sm6EAvl9LtudXc9Yw0WEagXFp2JxboEXc'}
    };

    axios.get(urlUsers, config)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    })

  };

  getUserById = (e) => {
    e.preventDefault();
  };

  registerUser = (e) => {
    e.preventDefault();

    console.log("entrou!!");
    let obj = { firstName : e.target.elements.firstname.value,
                lastName  : e.target.elements.lastname.value,
                email     : e.target.elements.email.value,
                password  : e.target.elements.password.value
              };

    const jsonString = JSON.stringify(obj);
    console.log(jsonString);

  };

  updateUser = (e) => {
    e.preventDefault();
  };

  deleteUser = (e) => {
    e.preventDefault();
  };

};

export default HttpUserService;

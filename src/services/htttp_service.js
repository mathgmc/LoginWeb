import 'whatwg-fetch';
import axios from 'axios';

class HttpUserService {
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;

    var config={
      headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDRhMGQzMGJhNTBlNTI3ZGJlZTVlYjAiLCJlbWFpbCI6Im1hdGhldXNnbWNAaG90bWFpbC5jb20iLCJwZXJtaXNzaW9uTGV2ZWwiOjEsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoiTWF0aGV1cyBDYXJ2YWxobyIsInJlZnJlc2hLZXkiOiI1RFFzQ09samVlYnBTekZjbDdXTXdnPT0iLCJpYXQiOjE1NjUxMzQ1OTV9.DRwDUhkYF8sm6EAvl9LtudXc9Yw0WEagXFp2JxboEXc'}
    }

    axios.get('http://localhost:3600/users/', config)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    })

  }

};

export default HttpUserService;

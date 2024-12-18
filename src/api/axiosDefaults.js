import axios from "axios";

axios.defaults.baseURL = "django-rest-framework-lessons-531e198ca80d.herokuapp.com"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true
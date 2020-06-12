import axios from "axios";

export default axios.create({
  baseURL: 'https://ekc0nx6fhb.execute-api.us-east-1.amazonaws.com/api/v1'
});
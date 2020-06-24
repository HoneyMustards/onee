import { HTTP } from '../http'

export default {
  getProperty: id => HTTP.get(`properties/${id}`),
}

import { HTTP } from '../http'

export default {
  setBooking: params => HTTP.get(`booking`, params.data),
}

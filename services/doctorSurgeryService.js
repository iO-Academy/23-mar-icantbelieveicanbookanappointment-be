const doctorSurgeryRepository = require('../repositories/doctorSurgeryRepository')
const bcrypt = require('bcrypt')

const getDoctors = async () => {
  console.log('Service: getDoctors')
  return await doctorSurgeryRepository.getDoctors()
}

const getPatientId = async (email) => {
  console.log('Service: getPatientId')
  try {
    const patientId = await doctorSurgeryRepository.getPatientId(email)
    return patientId
  } catch (error) {
    throw new Error('Failed to get patientId.')
  }
}

const getPatientName = async (patientId) => {
  console.log('Service: getPatientName')
  try {
    return await doctorSurgeryRepository.getPatientName(patientId)
  } catch (error) {
    throw new Error('Failed to get patient.')
  }
};

const getAppointments = async (date, doctorId) => {
  console.log('Service: getAppointments')
  return await doctorSurgeryRepository.getAppointments(date, doctorId)
}

const addAppointment = async (appointment) => {
  console.log('Service: addAppointment')
  try {
    return await doctorSurgeryRepository.addAppointment(appointment)
  } catch (error) {
    throw new Error('Failed to add appointment.')
  }
}

const postLogin = async (user_email_address, user_password) => {
  console.log('Service: postLogin')
  if(!user_email_address || !user_password) {
    let response = []
    response['status'] = 400
    response['message'] = "Username/ password is missing"
    return response
  } else {
      try {
        const result = await doctorSurgeryRepository.postLogin(user_email_address)
        result[0]['login'] = await bcrypt.compare(user_password, result[0].password)
        if (result[0]['login']) {
          result[0]['status'] = 200
          result[0]['message'] = 'You successfully logged in'
        } else {
          result[0]['status'] = 401
          result[0]['message'] = 'Your username or password was incorrect'
        }
        return result[0]
      } catch {
        let response = []
        response['status'] = 500
        response['message'] = "There was a problem connecting to the server"
        return response
      }
  }
}

const postPatientRecord = async (record) => {
  console.log('Service: postPatientRecord')
  return doctorSurgeryRepository.postPatientRecord(record).then(result => result.insertId)
}

const getPatientRecord = async (patientId) => {
  console.log('Service: getPatientRecord')
  return doctorSurgeryRepository.getPatientRecord(patientId).then((result) => {
    result.forEach((record) => {
      let date = new Date(Date.parse(record.date))
      let day = date.getDate()
      let month = date.getMonth()
      let year = date.getFullYear()

      record.date = year + '-' + month + '-' + day
    })
    return result
  })
}

module.exports.getDoctors = getDoctors
module.exports.getPatientId = getPatientId
module.exports.getPatientName = getPatientName
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
module.exports.getPatientRecord = getPatientRecord
module.exports.postPatientRecord = postPatientRecord

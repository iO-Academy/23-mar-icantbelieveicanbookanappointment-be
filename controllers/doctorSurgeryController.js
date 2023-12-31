const doctorSurgeryService = require('../services/doctorSurgeryService')

const getDoctors = (req, res) => {
    console.log('Controller: getDoctors')
    doctorSurgeryService.getDoctors().then((allDoctors) => {
        let result = {
            "message": "Successfully found doctors.",
            'data': allDoctors
        }
        res.json(result)
    })
}

const getPatientId = (req, res) => {
    console.log('Controller: getPatientId')
    let email = req.body.email
    doctorSurgeryService.getPatientId(email).then((patientId) => {
        if (patientId[0]) {
            let result = {
                "message": "Succesfully found patient ID",
                'data': patientId[0].id
            }
            return res.json(result)
        } else {
            let result = {
                "message": "This patient does not exist",
                'data': 0
            }
            return res.json(result)
        }
    })
}

const getPatientName = (req, res) => {
    console.log('Controller: getPatientName')
    const patientId = req.params.patientId
    doctorSurgeryService.getPatientName(patientId)
        .then((patient) => {
            if (patient) {
                const result = {
                    message: 'Successfully found patient.',
                    data: patient
                }
                res.json(result)
            } else {
                const result = {
                    message: 'Patient not found.',
                    data: null
                };
                res.json(result)
            }
        })
        .catch((error) => {
            const result = {
                message: 'Failed to fetch patient.',
                error: error.message
            }
            res.status(500).json(result)
        })
}

const getAppointments = (req, res) => {
    console.log('Controller: getAppointments')
    let doctorId = req.params.doctorId
    let date = req.params.date
    console.log(doctorId, date)
    doctorSurgeryService.getAppointments(date, doctorId).then((allAppointments) => {
        let result = {
            "message": "Successfully found appointments.",
            'data': allAppointments
        }
        res.json(result)
    })
}

const addAppointment = (req, res) => {
    console.log('Controller: addAppointment')
    const appointment = req.body
    doctorSurgeryService.addAppointment(appointment)
        .then((newAppointment) => {
            const result = {
                message: 'Successfully added appointment.',
                data: newAppointment
            };
            res.json(result)
        })
        .catch((error) => {
            const result = {
                message: 'Failed to add appointment.',
                error: error.message
            }
            res.status(500).json(result)
        })
}

const postLogin = (req, res) => {
    console.log('Controller: postLogin')
    let user_email_address = req.body.email
    let user_password = req.body.password
    try {
        doctorSurgeryService.postLogin(user_email_address, user_password)
            .then((result) => {
                if (result.login) {
                    req.session.user_id = result.id
                }
                return res.status(result.status).json({
                    "success": result.login,
                    "doctorId": result.id
                })
            })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const postLogOut = (req, res, next) => {
    req.session.destroy()
}

const getPatientRecord = (req, res) => {
    console.log('Controller: getPatientsRecord')
    let patientId = req.params.patientId
    doctorSurgeryService.getPatientRecord(patientId).then((records) => {
        let result = {
            "message": "Successfully found patient records.",
            'data': records
        }
        return res.json(result)
    })
}

const postPatientRecord = (req, res) => {
    console.log('Controller: postPatientRecord')
    let record = req.body
    doctorSurgeryService.postPatientRecord(record).then((insertId) => {
        let result = {
            "success": true,
            "recordId": insertId
        }
        return res.json(result)
    })
}

module.exports.getDoctors = getDoctors
module.exports.getPatientId = getPatientId
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
module.exports.postLogOut = postLogOut
module.exports.getPatientName = getPatientName
module.exports.getPatientRecord = getPatientRecord
module.exports.postPatientRecord = postPatientRecord

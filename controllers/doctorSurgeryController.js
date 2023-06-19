const doctorSurgeryService = require('../services/doctorSurgeryService')
const session = require('express-session')

const getDoctors = (req, res) => {
    console.log('Controller: getDoctors');
    doctorSurgeryService.getDoctors().then((allDoctors) => {
        let result = {
            "message": "Successfully found doctors.",
            'data': allDoctors
        }
        res.json(result)
    })
}

const getAppointments = (req, res) => {
    console.log('Controller: getAppointments');
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
    console.log('Controller: addAppointment');
    const appointment = req.body; // Assuming the appointment data is sent in the request body

    // You can perform validation or additional processing on the appointment data if needed

    doctorSurgeryService.addAppointment(appointment)
        .then((newAppointment) => {
            const result = {
                message: 'Successfully added appointment.',
                data: newAppointment
            };
            res.json(result);
        })
        .catch((error) => {
            const result = {
                message: 'Failed to add appointment.',
                error: error.message
            };
            res.status(500).json(result);
        });
};

const postLogin = (req, res) => {
    console.log('Controller: postLogin')
    let user_email_address = req.body.email;
    let user_password = req.body.password;
    try {
      doctorSurgeryService.postLogin(user_email_address, user_password)
          .then((result) => {
            if (result.login) {
              req.session.user_id = result.id
              console.log(req.session)
            }
            console.log(req.session)
            return res.status(result.status).json({
              "success": result.login
            })
          })
    } catch (error) {
      res.status(400).send(error.message)
    }
};

const postLogOut = (req, res, next) => {
    req.session.destroy();
}

// ! ADD ERROR HANDLING

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
module.exports.postLogOut = postLogOut

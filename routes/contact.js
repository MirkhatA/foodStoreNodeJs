const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Contacts',
        isContacts: true
    })
})


module.exports = router
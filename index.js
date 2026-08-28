const app = require('./app')
const {DesiQSocial} = process.env
app.listen(DesiQSocial, () => {
    console.log('Server is running at DesiQSocial: ${DesiQSocial}');
})
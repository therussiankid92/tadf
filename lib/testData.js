const faker = require('faker')

class testData {

    get invalidUser() {
     let invalidUser = {
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        return invalidUser;
    }

}

module.exports = new testData()

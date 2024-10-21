const db = require('../database'); // Import your PostgreSQL database connection

// Create a User class with a constructor to define properties of the user object
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // Method to save the user to the database
    async save() {
        try {
            const result = await db.none(
                'INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4)',
                [this.firstName, this.lastName, this.email, this.password]
            );
            console.log('User saved successfully:', result);
        } catch (error) {
            console.error('Error saving user:', error.message);
            throw error;
        }
    }

    // Method to find a user by email
    static async findByEmail(email) {
        try {
            const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [email]);
            return user;
        } catch (error) {
            console.error('Error finding user by email:', error.message);
            throw error;
        }
    }
}

// Export the User class
module.exports = User;

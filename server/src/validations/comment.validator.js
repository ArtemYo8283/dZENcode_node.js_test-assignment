// Import necessary modules and packages
import validator from "validator";
import mime  from "mime";

// Function to validate 'id' property in an object
export async function idValidator(item) {
    // Checking if exist field "id"
    if (!item.id) {
        //Return if it is not exist
        return {status: 400, message: 'Id is required.'};
    } else if(typeof item.id !== 'number') {
        // Checking if field is a number
        return {status: 400, message: 'Id must be a number.'};
    }
    // Return null if success
    return null;
}

// Function to validate when creating an object
export async function createValidator(item) {
    // Checking if exist field "user_name"
    if (!item.user_name) {
        //Return if it is not exist
        return {status: 400, message: 'Username is required.'};
    } else if (typeof item.user_name !== 'string') {
        // Checking if field is a string
        return {status: 400, message: 'Username must be a string.'};
    } else if (item.user_name.length < 3 || item.user_name.length > 50) {
        // Checking valid length
        return {status: 400, message: 'Username must be more than 2 and less than 50'};
    }
    // Checking if exist field "email"
    if (!item.email) {
        //Return if it is not exist
        return {status: 400, message: 'Email is required.'};
    } else if (typeof item.email !== 'string') {
        // Checking if field is a string
        return {status: 400, message: 'Email must be a string.'};
    } else if (item.email.length < 3 || item.email.length > 200) {
        // Checking valid length
        return {status: 400, message: 'Email must be more than 2 and less than 200'};
    } else if (!validator.isEmail(item.email)) {
        // Checking if it is a Email
        return {status: 400, message: 'This is not a valid email address.'};
    }
    // Checking if exist field "home_page"
    if (item.home_page) {
        // Checking if field is a string
        if (typeof item.home_page !== 'string') {
            return {status: 400, message: 'Home page must be a string.'};
        } else if (item.home_page.length < 3 || item.home_page.length > 500) {
            // Checking valid length
            return {status: 400, message: 'Home page must be more than 2 and less than 500'};
        } else if (!validator.isURL(item.home_page)) {
            // Checking if it is a URL
            return {status: 400, message: 'This is not a valid url address.'};
        }
    }
    // Checking if exist field "text"
    if (!item.text) {
        //Return if it is not exist
        return {status: 400, message: 'Id is required.'};
    } else if (typeof item.text !== 'string') {
        // Checking if field is a string
        return {status: 400, message: 'Text must be a string.'};
    } else if (item.text.length < 3 || item.text.length > 5000) {
        // Checking valid length
        return {status: 400, message: 'Home page must be more than 2 and less than 5000'};
    }
    // Checking if exist field "head_id"
    if (item.head_id) {
        if(typeof item.head_id !== 'number') {
            // Checking if field is a number
            return {status: 400, message: 'Head Id must be a number.'};
        }
    }
    // Checking if exist field "fileData"
    if (item.fileData) {
        // Get file data
        const { filename, data } = item.fileData;
        // Checking valid filename length
        if(filename.length < 5 || filename.length > 500) {
            return {status: 400, message: `Filename must be more than 4 and less than 500`};
        }
        // Get file type by filename
        const fileType = mime.getType(filename);
        // Checking suporting file formats
        if (fileType !== 'text/plain' && fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/gif') {
            return {status: 400, message: `File format not supported (only txt, jpg, png and gif).`};
        }
        // Check the file size if it is a text file
        if (fileType == 'txt') {
            if (data.length > 102400) {
                return {status: 400, message: `File must be less 100Kb.`};
            }
        }
    }
    // Return null if success
    return null;
}

// Function to validate when updating an object
export async function updateValidator(item) {
    // Checking if exist field "id"
    if (!item.id) {
        //Return if it is not exist
        return {status: 400, message: 'Id is required.'};
    } else if(typeof item.id !== 'number') {
        // Checking if field is a number
        return {status: 400, message: 'Id must be a number.'};
    }
    // Checking if exist field "user_name"
    if (item.user_name) {
        // Checking if field is a string
        if (typeof item.user_name !== 'string') {
            return {status: 400, message: 'Username must be a string.'};
        } else if (item.user_name.length < 3 && item.user_name.length > 50) {
            // Checking valid length
            return {status: 400, message: 'Username must be more than 2 and less than 50'};
        }
    }
    // Checking if exist field "email"
    if (item.email) {
        // Checking if field is a string
        if (typeof item.email !== 'string') {
            return {status: 400, message: 'Email must be a string.'};
        } else if (item.email.length < 3 && item.email.length > 200) {
            // Checking valid length
            return {status: 400, message: 'Email must be more than 2 and less than 200'};
        } else if (!validator.isEmail(item.email)) {
            // Checking if it is a Email
            return {status: 400, message: 'This is not a valid email address.'};
        }
    }
    // Checking if exist field "home_page"
    if (item.home_page) {
        // Checking if field is a string
        if (typeof item.home_page !== 'string') {
            return {status: 400, message: 'Home page must be a string.'};
        } else if (item.home_page.length < 3 && item.home_page.length > 500) {
            // Checking valid length
            return {status: 400, message: 'Home page must be more than 2 and less than 500'};
        } else if (!validator.isURL(item.home_page)) {
            // Checking if it is a URL
            return {status: 400, message: 'This is not a valid url address.'};
        }
    }
    // Checking if exist field "text"
    if (item.text) {
        // Checking if field is a string
        if (typeof item.text !== 'string') {
            return {status: 400, message: 'Text must be a string.'};
        } else if (item.text.length < 3 && item.text.length > 5000) {
            // Checking valid length
            return {status: 400, message: 'Home page must be more than 2 and less than 5000'};
        }
    }
    // Checking if exist field "head_id"
    if (item.head_id) {
        // Checking if field is a number
        if(typeof item.head_id !== 'number') {
            return {status: 400, message: 'Head Id must be a number.'};
        }
    }
    // Return null if success
    return null;
}
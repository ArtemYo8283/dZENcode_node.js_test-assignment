import validator from "validator";
import mime  from "mime";

export async function idValidator(item) {
    if (!item.id) {
        return {status: 400, message: 'Id is required.'};
    } else if(typeof item.id !== 'number') {
        return {status: 400, message: 'Id must be a number.'};
    }
    return null;
}

export async function createValidator(item) {
    if (!item.user_name) {
        return {status: 400, message: 'Username is required.'};
    } else if (typeof item.user_name !== 'string') {
        return {status: 400, message: 'Username must be a string.'};
    } else if (item.user_name.length < 3 || item.user_name.length > 50) {
        return {status: 400, message: 'Username must be more than 2 and less than 50'};
    }

    if (!item.email) {
        return {status: 400, message: 'Email is required.'};
    } else if (typeof item.email !== 'string') {
        return {status: 400, message: 'Email must be a string.'};
    } else if (item.email.length < 3 || item.email.length > 200) {
        return {status: 400, message: 'Email must be more than 2 and less than 200'};
    } else if (!validator.isEmail(item.email)) {
        return {status: 400, message: 'This is not a valid email address.'};
    }


    if (item.home_page) {
        if (typeof item.home_page !== 'string') {
            return {status: 400, message: 'Home page must be a string.'};
        } else if (item.home_page.length < 3 || item.home_page.length > 500) {
            return {status: 400, message: 'Home page must be more than 2 and less than 500'};
        } else if (!validator.isURL(item.home_page)) {
            return {status: 400, message: 'This is not a valid url address.'};
        }
    }

    if (!item.text) {
        return {status: 400, message: 'Id is required.'};
    } else if (typeof item.text !== 'string') {
        return {status: 400, message: 'Text must be a string.'};
    } else if (item.text.length < 3 || item.text.length > 5000) {
        return {status: 400, message: 'Home page must be more than 2 and less than 5000'};
    }

    if (item.head_id) {
        if(typeof item.head_id !== 'number') {
            return {status: 400, message: 'Head Id must be a number.'};
        }
    }

    if (item.fileData) {
        const { filename, data } = item.fileData;
        if(filename.length < 5 || filename.length > 500) {
            return {status: 400, message: `Filename must be more than 4 and less than 500`};
        }
        const fileType = mime.getType(filename);
        if (fileType !== 'text/plain' && fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/gif') {
            return {status: 400, message: `File format not supported (only txt, jpg, png and gif).`};
        }
        if (fileType == 'txt') {
            if (data.length > 102400) {
                return {status: 400, message: `File must be less 100Kb.`};
            }
        }
    }
    return null;
}

export async function updateValidator(item) {
    if (!item.id) {
        return {status: 400, message: 'Id is required.'};
    } else if(typeof item.id !== 'number') {
        return {status: 400, message: 'Id must be a number.'};
    }

    if (item.user_name) {
        if (typeof item.user_name !== 'string') {
            return {status: 400, message: 'Username must be a string.'};
        } else if (item.user_name.length < 3 && item.user_name.length > 50) {
            return {status: 400, message: 'Username must be more than 2 and less than 50'};
        }
    }

    if (item.email) {
        if (typeof item.email !== 'string') {
            return {status: 400, message: 'Email must be a string.'};
        } else if (item.email.length < 3 && item.email.length > 200) {
            return {status: 400, message: 'Email must be more than 2 and less than 200'};
        } else if (!validator.isEmail(item.email)) {
            return {status: 400, message: 'This is not a valid email address.'};
        }
    }


    if (item.home_page) {
        if (typeof item.home_page !== 'string') {
            return {status: 400, message: 'Home page must be a string.'};
        } else if (item.home_page.length < 3 && item.home_page.length > 500) {
            return {status: 400, message: 'Home page must be more than 2 and less than 500'};
        } else if (!validator.isURL(item.home_page)) {
            return {status: 400, message: 'This is not a valid url address.'};
        }
    }

    if (item.text) {
        if (typeof item.text !== 'string') {
            return {status: 400, message: 'Text must be a string.'};
        } else if (item.text.length < 3 && item.text.length > 5000) {
            return {status: 400, message: 'Home page must be more than 2 and less than 5000'};
        }
    }

    if (item.head_id) {
        if(typeof item.head_id !== 'number') {
            return {status: 400, message: 'Head Id must be a number.'};
        }
    }
    return null;
}
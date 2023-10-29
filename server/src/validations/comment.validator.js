import validator from "validator";

export async function idValidator(data) {
    if (!data.id) {
        return {status: 400, message: 'Id is required.'};
    } else if(typeof data.id !== 'number') {
        return {status: 400, message: 'Id must be a number.'};
    }
    return null;
}

export async function createValidator(data) {
    if (!data.user_name) {
        return {status: 400, message: 'Username is required.'};
    } else if (typeof data.user_name !== 'string') {
        return {status: 400, message: 'Username must be a string.'};
    } else if (data.user_name.length < 3 && data.user_name.length > 50) {
        return {status: 400, message: 'Username must be more than 2 and less than 50'};
    }

    if (!data.email) {
        return {status: 400, message: 'Email is required.'};
    } else if (typeof data.email !== 'string') {
        return {status: 400, message: 'Email must be a string.'};
    } else if (data.email.length < 3 && data.email.length > 200) {
        return {status: 400, message: 'Email must be more than 2 and less than 200'};
    } else if (!validator.isEmail(data.email)) {
        return {status: 400, message: 'This is not a valid email address.'};
    }


    if (data.home_page) {
        if (typeof data.home_page !== 'string') {
            return {status: 400, message: 'Home page must be a string.'};
        } else if (data.home_page.length < 3 && data.home_page.length > 500) {
            return {status: 400, message: 'Home page must be more than 2 and less than 500'};
        } else if (!validator.isURL(data.home_page)) {
            return {status: 400, message: 'This is not a valid url address.'};
        }
    }

    if (!data.text) {
        return {status: 400, message: 'Id is required.'};
    } else if (typeof data.text !== 'string') {
        return {status: 400, message: 'Text must be a string.'};
    } else if (data.text.length < 3 && data.text.length > 5000) {
        return {status: 400, message: 'Home page must be more than 2 and less than 5000'};
    }

    if (data.head_id) {
        if(typeof data.head_id !== 'number') {
            return {status: 400, message: 'Head Id must be a number.'};
        }
    }
}

export async function updateValidator(data) {
    if (!data.id) {
        return {status: 400, message: 'Id is required.'};
    } else if(typeof data.id !== 'number') {
        return {status: 400, message: 'Id must be a number.'};
    }

    if (data.user_name) {
        if (typeof data.user_name !== 'string') {
            return {status: 400, message: 'Username must be a string.'};
        } else if (data.user_name.length < 3 && data.user_name.length > 50) {
            return {status: 400, message: 'Username must be more than 2 and less than 50'};
        }
    }

    if (data.email) {
        if (typeof data.email !== 'string') {
            return {status: 400, message: 'Email must be a string.'};
        } else if (data.email.length < 3 && data.email.length > 200) {
            return {status: 400, message: 'Email must be more than 2 and less than 200'};
        } else if (!validator.isEmail(data.email)) {
            return {status: 400, message: 'This is not a valid email address.'};
        }
    }


    if (data.home_page) {
        if (typeof data.home_page !== 'string') {
            return {status: 400, message: 'Home page must be a string.'};
        } else if (data.home_page.length < 3 && data.home_page.length > 500) {
            return {status: 400, message: 'Home page must be more than 2 and less than 500'};
        } else if (!validator.isURL(data.home_page)) {
            return {status: 400, message: 'This is not a valid url address.'};
        }
    }

    if (data.text) {
        if (typeof data.text !== 'string') {
            return {status: 400, message: 'Text must be a string.'};
        } else if (data.text.length < 3 && data.text.length > 5000) {
            return {status: 400, message: 'Home page must be more than 2 and less than 5000'};
        }
    }

    if (data.head_id) {
        if(typeof data.head_id !== 'number') {
            return {status: 400, message: 'Head Id must be a number.'};
        }
    }
}
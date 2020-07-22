export default class Utility {
    
    static isValidField = (term) => {
        let length = term.trim().length
        return length > 0 ? true : false
    }

    static isEmailValid = (term) => {
        const expression = ''
        let isValid = expression.test(String(term).toLowerCase)
        
    }

}
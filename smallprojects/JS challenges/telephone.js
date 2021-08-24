//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Telephone Number Validator

//      https://regex101.com/ is a very useful page to check in realtime for patterns in strings.

// The function gets a string as input and has to determine whether it´s a valid US telephone number or not.
function telephoneCheck(str) {
    let regex=/^(1\s?)?(\d{3}|\(\d{3}\))(\s|\-)?\d{3}(\s|\-)?(\d{4})$/;
    return regex.test(str);
}



// Regex explanation
// The requirements for a valid telephone are set by FreeCodeCamp so the regex will check for:
//  - The country code 1 as first character, not required. 
//  - Then it will match the 3 digits for the area code, it can be in parenthesis. It will be separated with other 3 digits with a space or a "-". Same happens with the last four digits.   
// Some valid numbers:
//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555




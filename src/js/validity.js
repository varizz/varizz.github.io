
function InvalidMsg(textbox) {
    if (textbox.value === '') {
        textbox.setCustomValidity
              ('Please Fill Your Name First.');
    } else {
        textbox.setCustomValidity('');}
    return true;}
function getBase64Encoded(rawStr) {
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    var result = CryptoJS.enc.Base64.stringify(wordArray);
    return result;
    }

    function getBase64Decoded(encStr) {
    var wordArray = CryptoJS.enc.Base64.parse(encStr);
    var result = wordArray.toString(CryptoJS.enc.Utf8);
    return result;
    }

    function doEncode() {
    var txtEncode = document.getElementById("txtEncode");
    var resultEncode = document.getElementById("resultEncode");
    resultEncode.innerText = getBase64Encoded(txtEncode.value);
    }

    function doDecode() {
    var txtDecode = document.getElementById("txtDecode");
    var resultDecode = document.getElementById("resultDecode");
    resultDecode.innerText = getBase64Decoded(txtDecode.value);
    }

    function createJWT() {
    var txtHeader = document.getElementById("txtHeader");
    var txtPayload = document.getElementById("txtPayload");
    var txtSecret = document.getElementById("txtSecret");
    var resultJWT = document.getElementById("resultJWT");

    var base64Header = getBase64Encoded(txtHeader.value);
    var base64Payload = getBase64Encoded(txtPayload.value);

    var signature = CryptoJS.HmacSHA256(base64Header + "." + base64Payload, txtSecret.value);
    var base64sign = CryptoJS.enc.Base64.stringify(signature);

    var jwt = base64Header + "." + base64Payload + "." + base64sign;
    resultJWT.innerText = jwt;
    }
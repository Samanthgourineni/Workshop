function isTermsAvailable() {

    var TermsAndCondition = document.getElementById("terms");

    if (TermsAndCondition) {
        return true;
    }

    return false;

}

function ChangeParaValue(id,value){
    document.getElementById(id).innerHTML=value;
}
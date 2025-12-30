let operator="";
let firstnum="";
let secondnum="";
function append(num){
    if(operator==""){
        firstnum+=num;
        document.getElementById('result').value=firstnum;
    }
    else{
        secondnum+=num;
        document.getElementById('result').value=secondnum;
    }
}
function operation(op){
    operator=op;
}
function calculate(cal){
    let result;
    switch(operator)
    {
        case '+':
            result=parseInt(firstnum)+parseInt(secondnum);
            break;
        case '-':
            result=parseInt(firstnum)-parseInt(secondnum);
            break;
        case '*':
            result=parseInt(firstnum)*parseInt(secondnum);
            break;
        case '/':
            result=parseInt(firstnum)/parseInt(secondnum);
            break;
    }
    document.getElementById('result').value=result;
}
function clearresult(){
    operator="";
    firstnum="";
    secondnum="";
    document.getElementById('result').value='';
}
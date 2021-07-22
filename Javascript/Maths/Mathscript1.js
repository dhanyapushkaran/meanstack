function amstrong() {

    var arr = []
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (k = 0; k < 10; k++) {
                let sum = k ** 3 + j ** 3 + i ** 3
                let num = i * 100 + j * 10 + k;
                if (sum == num) {
                    arr.push(sum)

                }

            }

        }
    }
    let html_data = `3 Digit Amstrong numbers are ${arr} `
    alert(html_data)
}

function findAvg() {

    english = Number(eng.value);
    science = Number(sci.value);
    social = Number(soc.value);
    maths = Number(math.value);
    it1 = Number(it.value);
    console.log(typeof (english));
    let Avgmark = (english + science + social + maths + it1) / 5;

    let grade1 = (Avgmark > 90) ? "A1" : (Avgmark > 80 & Avgmark < 91) ? "A" : (Avgmark > 70 & Avgmark < 81) ? "B+" : (Avgmark > 60 & Avgmark < 71) ? "B" : (Avgmark > 50 & Avgmark < 61) ? "C+" : (Avgmark > 40 & Avgmark < 51) ? "C" : (Avgmark > 30 & Avgmark < 41) ? "D" : "E";
    html_data_avg = `Average mark is ${Avgmark}`
    html_data_grade = `Grade of the Student is ${grade1}`
    avg.innerHTML = html_data_avg
    grade.innerHTML = html_data_grade


}

function Rsrting() {

    let input = str.value
    var arr = ""
    for (let i = input.length - 1; i >= 0; i--) {
        arr += input[i];
    }
    res.innerHTML = arr
}


function factorial() {
    let num = Number(fact.value)
    let fact1 = 1
    for (let i = 1; i <= num; i++) {
        fact1 = fact1 * i
    }
    html_data = `Factorial of ${num} is ${fact1}`
    factor.innerHTML = html_data
}



    let displayNumber = (num) => inpt.value += num;
    let evaluateExpression = () => inpt.value = eval(inpt.value)
    let clearBox = () => inpt.value = "";
    let DeleteNumber = () => inpt.value = inpt.value.slice(0, -1)
    function evaluateEqual() {
        let temp = inpt.value
        let res = eval(temp)
        inpt.value = ` ${temp} = ${res}`
    }
       



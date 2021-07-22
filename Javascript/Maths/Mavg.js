function findAvg() {

    english = eng.value;
    science = sci.value;
    social = soc.value;
    maths = math.value;
    it1 = itvalue;

    let Avgmark = (english + science + social + maths + it1) / 5;

    let grade = (Avgmark > 90) ? "A1" : (Avgmark > 80 & Avgmark < 91) ? "A" : (Avgmark > 70 & Avgmark < 81) ? "B+" : (Avgmark > 60 & Avgmark < 71) ? "B" : (Avgmark > 50 & Avgmark < 61) ? "C+" : (Avgmark > 40 & Avgmark < 51) ? "C" : (Avgmark > 30 & Avgmark < 41) ? "D" : "E";
    html_data_avg=`Average mark is ${Avgmark}`
    html_data_grade=`Grade of the Student is ${grade}`
    avg.innerHTML=html_data_avg
    grade.innerHTML=html_data_grade


}
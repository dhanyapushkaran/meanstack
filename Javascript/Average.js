class studentMark {
    constructor(english, science, social, maths, it) {
        this.english = english;
        this.science = science;
        this.social = social;
        this.maths = maths;
        this.it = it;
    }

    markaverage() {
        let avg = (this.english + this.science + this.social + this.maths + this.it) / 5;
        console.log(`average Mark of Student is ${avg}`);
        return avg

    }

    assignGrade() {
        let Avgmark = this.markaverage()
        let grade = (Avgmark > 90) ? "A1" : (Avgmark > 80 & Avgmark < 91) ? "A" : (Avgmark > 70 & Avgmark < 81) ? "B+" : (Avgmark > 60 & Avgmark < 71) ? "B" : (Avgmark > 50 & Avgmark < 61) ? "C+" : (Avgmark > 40 & Avgmark < 51) ? "C" : (Avgmark > 30 & Avgmark < 41) ? "D" : "E"
        console.log(`Grade of the Student is ${grade}`);
    }
}

var Student1 = new studentMark(90, 85, 80, 70, 60);
Student1.assignGrade()
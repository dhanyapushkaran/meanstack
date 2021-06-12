var age = 65, health_issues = "true";
if (age > 65) {
    console.log("Eligible for vaccination");
}
else if (age >= 18 & age <= 65) {
    if (health_issues == "true") {
        console.log("Not eligible for vaccination");
    }
    else {
        console.log("Eligible for vaccination");
    }

}
else{
    console.log("Not eligible for vaccination");
}
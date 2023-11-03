const submit = document.getElementById("calc");
document.getElementById("41").focus();
function getGradePoint(marks) {
  if (marks >= 90) {
    return 10;
  } else if (marks >= 80) {
    return 9;
  } else if (marks >= 70) {
    return 8;
  } else if (marks >= 60) {
    return 7;
  } else if (marks >= 50) {
    return 6;
  } else if (marks >= 40) {
    return 5;
  } else if (marks >= 35) {
    return 4;
  } else {
    return 0;
  }
}
function calculateSGPA(e) {
  e.preventDefault();
  let sum = 0;
  sum += getGradePoint(document.getElementById("41").value) * 3;
  sum += getGradePoint(document.getElementById("481").value) * 1;
  sum += getGradePoint(document.getElementById("42").value) * 4;
  sum += getGradePoint(document.getElementById("43").value) * 4;
  sum += getGradePoint(document.getElementById("44").value) * 3;
  sum += getGradePoint(document.getElementById("45").value) * 2;
  sum += getGradePoint(document.getElementById("46").value) * 1;
  sum += getGradePoint(document.getElementById("47").value) * 1;
  sum += getGradePoint(document.getElementById("U49").value) * 1;
  sum += getGradePoint(document.getElementById("I49").value) * 2;
  return sum / 22;
}
submit.addEventListener("click", (e) => {
  document.getElementById("41").focus();
  document.getElementById("res").innerHTML =
    "SGPA:" + calculateSGPA(e).toFixed(2);
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("res").innerHTML = "";
  document.getElementById("41").focus();
});

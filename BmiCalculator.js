function BmiCalculator(weight,height){
  var bmi=weight/(height*height);
  return bmi;
}
var bmi=BmiCalculator(70,1.9);
console.log(bmi)

var clockAngle = (time)=> {
  let [hr,min] = time.split(":").map(Number);
  let minInDegree = min * 6;  // min move 6 degree per min
  let hrInDegree = (hr * 30) + (0.5*min) // hr move 30 degree per hr but you must also plus different degree between min needle move too.
  let differentDegree = Math.abs(minInDegree-hrInDegree);
  differentDegree = ( differentDegree <= 180 ) ? differentDegree : 360-differentDegree;
  return Math.abs(differentDegree);
}

module.exports = clockAngle;

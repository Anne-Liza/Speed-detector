//calculate demerit points
function calculatedemeritpoints(speed){
    
    const demeritPointsPerRange = 1;
    const speedLimit = 70;

    let excessSpeed = (speed - speedLimit);
    if (excessSpeed <=0){
        return "Your speed is Ok.";
    }

    let demeritPoints = Math.floor(excessSpeed / 5);
    if (demeritPoints <= 12) {
        return `Your speed is ${speed}. You have received ${demeritPoints} demerits.`;
    }

    else {
        return `Your speed is ${speed}.Your license has been suspended.`;
    }
}
    console.log (calculatedemeritpoints(80));
    console.log (calculatedemeritpoints(104));
    console.log (calculatedemeritpoints(40));
    console.log (calculatedemeritpoints(64));
    console.log (calculatedemeritpoints(98));
    console.log (calculatedemeritpoints(298));

document.getElementById("speedForm").addEventListener("submit",function(e){
    e.preventDefault();

    let speed = document.getElementById("speed").value;
    let notification = calculateDemeritPoints(speed);
this.document.getElementById("result").innerText
 }
)









        

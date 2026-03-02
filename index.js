

document.getElementById("userForm").addEventListener("submit",function(e) {
    // close refresh page of website\
    e.preventDefault();
    var fullname= document.getElementById("Fullname").value;
    var gender= document.querySelector('input[name="gender"]:checked').value;
    var salary= document.getElementById("salary").value;
    var dob= document.getElementById("dob").value;
    var position= document.getElementById("position").value;
    var description= document.getElementById("description").value;
    var currency= Number(salary).toLocaleString("en-US" ,
        {
            style:"currency",
            currency:"USD",
        }
    )
    document.getElementById("result").innerHTML=`
      
    <div class="alert alert-success"> 
     <button type="button" class="btn-close position-absolute 
      top-0 end-0 m-3" data-bs-dismiss="alert"></button>
     <h5 class="text-primary">Submit result information</h5>
     <p><strong>Fullname   :</strong>${fullname}</P>
     <p><strong>Gender     :</strong>${gender}</P>
     <p><strong>Salary     :</strong>${currency}</P>
     <p><strong>DateOfBirth:</strong>${dob}</P>
     <p><strong>Position   :</strong>${position}</P>
     <p><strong>description:</strong>${description}</P>

    </div>
    `;
});
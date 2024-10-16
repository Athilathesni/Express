const url=window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get('id')
console.log(id);

async function getDonors() {
    const res = await fetch(`http://localhost:4000/api/getdonor/${id}`);
    const donor = await res.json();
    console.log("hai");
    
    console.log(donor);

            
    document.getElementById('name').value = donor.name;
    document.getElementById('age').value = donor.age;
    document.getElementById('blood').value = donor.blood;
    document.getElementById('phone').value = donor.phone;
    document.getElementById('gender').value = donor.gender;
}
getDonors()


async function update() {
    name= document.getElementById('name').value,
    age= document.getElementById('age').value,
    blood=document.getElementById('blood').value,
    phone= document.getElementById('phone').value,
    gender=document.getElementById('gender').value

    const res=await fetch(`http://localhost:4000/api/update/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json",
        },
        body:JSON.stringify({name,age,phone,blood,gender})
    })
    console.log(res);
    const data=await res.json()
    res.status==201?alert(data.msg):alert(data.error)
    window.location.href=`../index.html`
   
}


async function del() {
    const res=await fetch(`http://localhost:4000/api/delete/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"
        },
        body:JSON.stringify({name,age,phone,blood,gender})
    })
}
































// document.addEventListener('DOMContentLoaded', async function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const donorId = urlParams.get('id');

//     // Fetch the donor's details and populate the form
//     if (donorId) {
//         try {
//             const response = await fetch(`/api/getdonor/${donorId}`);
//             const donor = await response.json();
//             console.log(donor);
            

//             document.getElementById('name').value = donor.name;
//             document.getElementById('age').value = donor.age;
//             document.getElementById('blood').value = donor.blood;
//             document.getElementById('phone').value = donor.phone;
//             document.getElementById('gender').value = donor.gender;
//         } catch (error) {
//             console.error('Error fetching donor details:', error);
//         }
//     }

//     // Handle form submission to update the donor
//     document.getElementById('editDonorForm').addEventListener('submit', async function(e) {
//         e.preventDefault();

//         const updatedDonor = {
//             name: document.getElementById('name').value,
//             age: document.getElementById('age').value,
//             blood: document.getElementById('blood').value,
//             phone: document.getElementById('phone').value,
//             gender: document.getElementById('gender').value
//         };

//         try {
//             const response = await fetch(`/api/updatedonor/${donorId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(updatedDonor)
//             });

//             if (response.ok) {
//                 alert('Donor updated successfully');
//                 window.location.href = '../index.html'; 
//             } else {
//                 alert('Error updating donor');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     });
// });
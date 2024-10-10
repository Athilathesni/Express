document.getElementById('donorForm').addEventListener('submit', async function(e) {
    e.preventDefault();
console.log("form");

      name= document.getElementById('name').value,
        age= document.getElementById('age').value,
        blood=document.getElementById('blood').value,
        phone= document.getElementById('phone').value,
        gender=document.getElementById('gender').value
        const res=await fetch('http://localhost:4000/api/add',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,age,phone,blood,gender})
        })
        const data=await res.json()
        if(res.status==201){
            alert(data.msg)
        }
        else{
            alert(data.error)
        }
    })































// document.getElementById('donorForm').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const donorData = {
//         name: document.getElementById('name').value,
//         age: document.getElementById('age').value,
//         blood: document.getElementById('blood').value,
//         phone: document.getElementById('phone').value,
//         gender: document.getElementById('gender').value
//     };

//     try {
//         const response = await fetch('/api/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(donorData)
//         });

//         if (response.ok) {
//             alert('Donor added successfully');
//             window.location.href = '../index.html';
//         } else {
//             alert('Error adding donor');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });



//     try {
//         const response = await fetch('/api/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(donorData)
//         });

//         if (response.ok) {
//             alert('Donor added successfully');
//             window.location.href = '../pages/index.html';
//         } else {
//             alert('Error adding donor');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });

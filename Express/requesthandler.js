import donorSchema from './model/donor.model.js'

export async function addDonor(req,res) {
    console.log(req.body);

    const {...donors}=req.body
    await donorSchema.create({...donors}).then(()=>{
        res.status(201).send({msg: "Success"})
    })
    .catch((error)=>{
        res.status(500).send({error: error})
    })
}

export async function getDonors(req,res){
    console.log("get donors")

    const data = await donorSchema.find()
    console.log(data);
    
    res.status(200).send(data)
}

export async function getDonor(req, res) {
        console.log(req.params);
       const {id}=req.params
       const data=await donorSchema.findOne({_id:id})
       console.log(data);
    res.status(200).send(data)    
}


export async function update(req,res) {
    console.log(req.params);
    console.log(req.body);
    const {...donor}=req.body
    await donorSchema.updateOne({_id:req.params.id},{$set:{...donor}})
    .then(()=>{
         res.status(201).send({msg:"update"})
    }) 
.catch((error)=>{
res.status(500).send({error:error})
})
}

export async function deldonor(req,res) {
    console.log(req.params);
    const {id}=req.params

    
}














// import donorSchema from './model/donor.model.js'

// export async function addDonor(req,res) {
//     console.log(req.body);

//     const {...donors}=req.body
//     await donorSchema.create({...donors}).then(()=>{
//         res.status(201).send({msg: "Success"})
//     })
//     .catch((error)=>{
//         res.status(500).send({error: error})
//     })
// }

// export async function getDonors(req,res){
//     console.log("get donors")

//     const data = await donorSchema.find()
//     console.log(data);
    
//     res.status(200).send(data)
// }

// // Get a single donor by ID
// export async function getDonorById(req, res) {
//     try {
//         const donor = await donorSchema.findById(req.params.id);
//         if (donor) {
//             res.status(200).send(donor);
//         } else {
//             res.status(404).send({ error: 'Donor not found' });
//         }
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// }

// // Update a donor's details
// export async function updateDonor(req, res) {
//     try {
//         const updatedDonor = await donorSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (updatedDonor) {
//             res.status(200).send(updatedDonor);
//         } else {
//             res.status(404).send({ error: 'Donor not found' });
//         }
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// }






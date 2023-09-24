import React from 'react'
import './registration_style.css'
import { useState } from 'react'
import { privateAxios } from '../../service/helper';

function RegistrationForm() {
    
    const[data,setData]=useState({
        recyclerName:"",
        businessType:"",
        businessRegistrationNumber:"",
        tin:"",
        contactName:"",
        email:"",
        phoneNumber:"",
        physicalAddress:"",
        mailingAddress:"",
        website:"",
        linkedin:"",
        facebook:"",
        yearsInOperation:"",
        annualCapacity:"",
        techRefurbishing:"",
        techDismantling:"",
        techShredding:"",
        certR2:"",
        certEStewards:"",
        recyclingProcess:"",
        complianceCheckbox:"",
        termsCheckbox:"",
        businessCertificate:"",
        environmentalPermitsFile:"",
        wasteLicensesFile:"",
        otherDocuments:"",
        location:"",

    })

    const [compliance,setCompliance]=useState(null);
    const [term,setTerms]=useState(null);

    function handleSubmit(e){
        e.preventDefault();
        privateAxios.post("/recycler-data",data).then((res)=>{
            console.log(data)
            console.log(res.data)
        }).catch((err)=>{
            console.log("error")
        })

    }

    function handleChange(e){
        const {name,value}=e.target;
        setData({...data,[name]:value})
        console.log(data)
    }
  return (
    <div style={{}}>
      <section class="form-container">
    <div class="form-heading">
    <h1 align="center">Recycler Registration Form</h1>
    </div>
    <div>
    <form >
        <table>
            {/* <!-- Recycler Information --> */}
            <tr>
                <th colspan="2" class="head">Recycler Information</th>
            </tr>
            <tr>
                <td><label for="recyclerName">Recycler Name:</label></td>
                <td><input type="text" id="recyclerName" name="recyclerName" required onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><label for="entityType">Business Entity Type:</label></td>
                <td>
                    <select id="entityType" name="businessType" onChange={handleChange}>
                        <option value="corporation">Corporation</option>
                        <option value="partnership">Partnership</option>
                        <option value="soleProprietorship">Sole Proprietorship</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label for="registrationNumber">Business Registration Number:</label></td>
                <td><input type="text" id="registrationNumber" name="businessRegistrationNumber" required  onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><label for="tin">Tax Identification Number (TIN):</label></td>
                <td><input type="text" id="tin" name="tin" required  onChange={handleChange}/></td>
            </tr>

            {/* <!-- Contact Information --> */}
            <tr>
                <th colspan="2" class="head">Contact Information</th>
            </tr>
            <tr>
                <td><label for="contactName">Contact Person Name:</label></td>
                <td><input type="text" id="contactName" name="contactName" required onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><label for="email">Email Address:</label></td>
                <td><input type="email" id="email" name="email" required onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><label for="phoneNumber">Phone Number:</label></td>
                <td><input type="text" id="phoneNumber" name="phoneNumber" required onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><label for="physicalAddress">Physical Address:</label></td>
                <td><input type="text" id="physicalAddress" name="physicalAddress" required  onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><label for="mailingAddress">Mailing Address (if different):</label></td>
                <td><input type="text" id="mailingAddress" name="mailingAddress" onChange={handleChange}/></td>
            </tr>

            {/* <!-- Website and Social Media --> */}
            <tr>
                <th colspan="2" class="head">Website and Social Media</th>
            </tr>
            <tr>
                <td><label for="website">Website URL:</label></td>
                <td><input type="url" id="website" name="website" onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><label for="linkedin">LinkedIn Profile:</label></td>
                <td><input type="url" id="linkedin" name="linkedin" onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><label for="facebook">Facebook Page:</label></td>
                <td><input type="url" id="facebook" name="facebook" onChange={handleChange}/></td>
            </tr>

            {/* <!-- Operational Details --> */}
            <tr>
                <th colspan="2" class="head">Operational Details</th>
            </tr>
            <tr>
                <td><label for="yearsInOperation">Years in Operation:</label></td>
                <td><input type="text" id="yearsInOperation" name="yearsInOperation" required  onChange={handleChange}/></td>
            </tr>
           
            <tr>
                <td><label for="annualCapacity">Annual E-Waste Recycling Capacity:</label></td>
                <td><input type="text" id="annualCapacity" name="annualCapacity" required onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><label>Recycling Technologies Used:</label></td>
                <td>
                    <input type="checkbox" id="techRefurbishing" name="techRefurbishing" value="Refurbishing" onChange={handleChange}/> Refurbishing<br />
                    <input type="checkbox" id="techDismantling" name="techDismantling" value="Dismantling" onChange={handleChange}/> Dismantling<br />
                    <input type="checkbox" id="techShredding" name="techShredding" value="Shredding" onChange={handleChange} /> Shredding<br />
                    {/* <!-- Add more checkboxes for other technologies --> */}
                </td>
            </tr>
            <tr>
                <td><label>Certifications:</label></td>
                <td>
                    <input type="checkbox" id="certR2" name="certR2" value="R2" onChange={handleChange}/> R2<br />
                    <input type="checkbox" id="certEStewards" name="certEStewards" value="E-Stewards" onChange={handleChange} /> E-Stewards<br />
                    {/* <!-- Add more checkboxes for other certifications --> */}
                </td>
            </tr>
            <tr>
                <td><label for="recyclingProcess">Description of Recycling Process:</label></td>
                <td><textarea id="recyclingProcess" name="recyclingProcess" rows="4" required onChange={handleChange}></textarea></td>
            </tr>

           
           
            {/* <!-- Terms and Conditions --> */}
            <tr>
                <th colspan="2" class="head">Terms and Conditions</th>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="checkbox" id="complianceCheckbox" name="complianceCheckbox" required onChange={(e)=>{setCompliance(e.target.value)}} />
                    <label for="complianceCheckbox">Agree to Compliance with Environmental Regulations</label><br />
                    <input type="checkbox" id="termsCheckbox" name="termsCheckbox" required onChange={(e)=>{setTerms(e.target.value)}} />
                    <label for="termsCheckbox">Acceptance of Terms and Conditions</label>
                </td>
            </tr>

            {/* <!-- Upload Documents --> */}
            <tr>
                <th colspan="2" class="head">Upload Documents</th>
            </tr>
            <tr>
                <td><label for="businessCertificate">Business Registration Certificate (PDF):</label></td>
                <td><input type="file" id="businessCertificate" name="businessCertificate" accept=".pdf" required /></td>
            </tr>
            <tr>
                <td><label for="environmentalPermitsFile">Environmental Permits (PDF):</label></td>
                <td><input type="file" id="environmentalPermitsFile" name="environmentalPermitsFile" accept=".pdf" required /></td>
            </tr>
            <tr>
                <td><label for="wasteLicensesFile">Waste Handling Licenses (PDF):</label></td>
                <td><input type="file" id="wasteLicensesFile" name="wasteLicensesFile" accept=".pdf" required /></td>
            </tr>
            <tr>
                <td><label for="otherDocuments">Other Relevant Documents (PDF):</label></td>
                <td><input type="file" id="otherDocuments" name="otherDocuments" accept=".pdf" /></td>
            </tr>

            {/* <!-- Location --> */}
            <tr>
                <th colspan="2" class="head">Location</th>
            </tr>
            <tr>
                <td><label for="location">Location:</label></td>
                <td><input type="text" id="location" name="location" required onChange={handleChange}/>  </td>
            </tr>

           

            {/* <!-- Submit Button --> */}
            <tr>
                <td colspan="2" align="center" class="button-container">
                    
                    <input type="submit" value="Register" class="button" onClick={handleSubmit}/>
                   
                    {/* <input type="submit" value="Register" class="button" disabled/> */}
                   
                </td>
            </tr>
        </table>
    </form>
</div>
</section>
  
    </div>
  )
}

export default RegistrationForm
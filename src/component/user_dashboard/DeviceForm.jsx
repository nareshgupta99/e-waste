import React, { useState } from 'react'
import './style5.css'
import { privateAxios } from '../../service/helper';

function DeviceForm() {

  const [data,setData]=useState({
    company:"",
    deviceType:"",
    deviceModel:"",
    serialNumber:"",
    ownerName:"",
    phone:""
   

  });
  function handleChange(e){
    const {name,value}=e.target;
    setData({...data,[name]:value})
    console.log(data);
  }

  function handleSubmit(e){
    e.preventDefault();
    privateAxios.post("/registerd/ewaste",data).then((res)=>{
      console.log("Ewaste Registerd")
    }).catch((err)=>{
      console.log(err)
    })
  }



  return (
    <div>
        <section class="form-container">
      <div class="form-heading">
    <h1 align="center">Device Registration Form</h1>
  </div>
    <form action="submit_recycling.php" method="POST">
      <table border="2" align="center">
        <tr>
          <td><label for="deviceType">Select Device Type:</label></td>
          <td>
            <select id="deviceType" name="deviceType" onChange={handleChange} required>
              <option value="type1">Laptop</option>
              <option value="type2">Desktop</option>
              <option value="type3">Mobile-smart</option>
              <option value="type4">Mobile-keypad</option>
              <option value="type5">Other-devices</option>
              {/* <!-- Add more device type options as needed --> */}
            </select>
          </td>
        </tr>
        <tr>
          <td><label for="company">Select Company:</label></td>
          <td>
            <select id="company" name="company" required onChange={handleChange}>
              <option value="company1" class="type1">Dell</option>
              <option value="company2" class="type1">Asus</option>
              <option value="company3" class="type1">Lenovo</option>
              <option value="company4" class="type1">Apple</option>
              <option value="company5" class="type1">Acer</option>
              <option value="company6" class="type2">Hp</option>
              <option value="company7" class="type2">Sony</option>
              <option value="company8" class="type2">Samsung</option>
              <option value="company9" class="type2">Lenovo</option>
              <option value="company10" class="type2">Dell</option>
              <option value="company11" class="type2">Apple</option>
              <option value="company12" class="type3">Samsung</option>
              <option value="company13" class="type3">Realme</option>
              <option value="company14" class="type3">Oppo</option>
              <option value="company15" class="type3">Redmi</option>
              <option value="company16" class="type3">Nokia</option>
              <option value="company17" class="type3">Apple</option>
              <option value="company18" class="type4">Nokia</option>
              <option value="company19" class="type4">Samsung</option>
              <option value="company20" class="type4">Gionee</option>
              <option value="company21" class="type4">Lava</option>
              <option value="company22" class="type5">Charging-cables</option>
              {/* <!-- Add more company options for each type --> */}
            </select>
          </td>
        </tr>
        <tr>
          <td><label for="deviceModel">Device Model Number:</label></td>
          <td>
            <input type="text" id="deviceModel" name="deviceModel" required value={data.deviceModel} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td><label for="serialNumber">Serial Number:</label></td>
          <td>
            <input type="text" id="serialNumber" name="serialNumber" required value={data.serialNumber}  onChange={handleChange}/>
          </td>
        </tr>
        <tr>
          <td><label for="ownerName">Owner Name:</label></td>
          <td>
            <input type="text" id="ownerName" name="ownerName" required value={data.ownerName} onChange={handleChange}/>
          </td>
        </tr>
        <tr>
          <td><label for="ownerEmail"> Phone:</label></td>
          <td>
          <input type="text" id="ownerName" name="phone" required value={data.phone} onChange={handleChange}/>
          </td>
        </tr>
        
        {/* <tr>
          <td><label for="pickupRequired">Pickup Required:</label></td>
          <td>
            <input type="radio" id="pickupRequired" name="pickupRequired" onChange={handleChange} value={true} /><span>Yes</span>
            <input type="radio" id="pickupRequired" name="pickupRequired" onChange={handleChange} value={false  }/><span>No</span>
          </td>
        </tr> */}

        <tr>
          <td colspan="2" align="center" class="button-container">
            <input type="submit" value="Register Device" class="button"  onClick={handleSubmit}/>
          </td>
        </tr>
      </table>
    </form>
  </section>
    </div>
  )
}

export default DeviceForm
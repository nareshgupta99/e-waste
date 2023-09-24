import React from 'react'
import './style5.css'

function DeviceForm() {
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
            <select id="deviceType" name="deviceType" required>
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
            <select id="company" name="company" required>
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
            <input type="text" id="deviceModel" name="deviceModel" required />
          </td>
        </tr>
        <tr>
          <td><label for="serialNumber">Serial Number:</label></td>
          <td>
            <input type="text" id="serialNumber" name="serialNumber" required />
          </td>
        </tr>
        <tr>
          <td><label for="ownerName">Owner Name:</label></td>
          <td>
            <input type="text" id="ownerName" name="ownerName" required />
          </td>
        </tr>
        <tr>
          <td><label for="ownerEmail">Owner Email:</label></td>
          <td>
          <label for="ownerEmail" >phone</label>
          </td>
        </tr>
        <tr>
          <td><label for="deviceCondition">Device Condition:</label></td>
          <td>
          <input type="text" id="ownerName" name="ownerName" required />
          </td>
        </tr>
        <tr>
          <td><label for="pickupRequired">Pickup Required:</label></td>
          <td>
            <input type="checkbox" id="pickupRequired" name="pickupRequired"/><span>Yes</span>
            <input type="checkbox" id="pickupRequired" name="pickupRequired"/><span>No</span>
          </td>
        </tr>

        <tr>
          <td colspan="2" align="center" class="button-container">
            <input type="submit" value="Register Device" class="button"/>
          </td>
        </tr>
      </table>
    </form>
  </section>
    </div>
  )
}

export default DeviceForm
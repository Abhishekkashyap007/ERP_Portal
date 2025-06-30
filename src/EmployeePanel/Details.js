import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../modules/apis/Myapis';

function Details() {
  const user = JSON.parse(localStorage.getItem('user'));
  const id = user?.id;

  const [date, setdate] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${url}/singlereocrd/${id}`);
      setdate(res.data);
      setNewPassword(res.data.pass);
    } catch (err) {
      console.error('Error fetching user data', err);
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      const res = await axios.put(`${url}/updatepassword/${id}`, {
        pass: newPassword,
      });
      alert('Password updated successfully');
      setEditMode(false);
      fetchUserData(); // Refresh data
    } catch (err) {
      console.error('Error updating password', err);
      alert('Error updating password');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container mt-5" style={{ height: '430px', width: '10000px' }}>
      <h4 className="text-center mb-4">User Profile</h4>
      {date && (
        <table className="table table-bordered w-50 mx-auto">
          <tbody>
            <tr>
              <th>Id Number</th>
              <td>1</td>
              <td rowSpan="5" className="text-center align-middle">
                <img src={date.purl} alt="profile" width={100} height={100} />
              </td>
            </tr>
            <tr>
              <th>Employee name</th>
              <td>{date.fullname}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{date.gender}</td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>{date.dob}</td>
            </tr>
            <tr>
  <th>Password</th>
  <td>
    {editMode ? (
      <>
        <input
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control d-inline w-75"
        />
        <div className="mt-2">
          <button onClick={handlePasswordUpdate} className="btn btn-success btn-sm me-2">
            Save
          </button>
          <button onClick={() => setEditMode(false)} className="btn btn-secondary btn-sm">
            Cancel
          </button>
        </div>
      </>
    ) : (
      <div className="d-flex justify-content-between align-items-center">
        <span>{date.pass}</span>
        <button onClick={() => setEditMode(true)} className="btn btn-primary btn-sm ms-3">
          Edit
        </button>
      </div>
    )}
  </td>
</tr>

          </tbody>
        </table>
      )}
    </div>
  );
}

export default Details;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './thunk';

function UserProfile({ userId }) {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserData(1));
  }, [dispatch, userId]);

  if (loading === 'pending') return <div>Loading user data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentUser) return <div>No user data</div>;

  return (
    <div>
      <h2>{currentUser.name}</h2>
      <p>Email: {currentUser.email}</p>
      <p>Phone: {currentUser.phone}</p>
      <p>Address: {currentUser.address.street}, {currentUser.address.city}</p>
      <p>Company: {currentUser.company.name}</p>
    </div>
  );
}

export default UserProfile;
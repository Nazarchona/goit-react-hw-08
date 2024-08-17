// Example: src/pages/ContactsPage/ContactsPage.jsx

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors'; // Update to your actual path

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://connections-api.goit.global/contacts', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, [token]);

  return (
    <div>
      {/* Render your contacts */}
    </div>
  );
};

export default ContactsPage;






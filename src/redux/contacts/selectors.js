// Example selectors for contacts slice
export const selectContactsStatus = state => state.contacts.status;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.value.toLowerCase();
  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter) ||
    contact.number.includes(filter)
  );
};



   
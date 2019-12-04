export let contact = [
    {
        firstName: 'Borislav',
        lastName: 'Anchev',
        email: 'bobianchev@outlook.com',
        phoneNumber: '0876080100',
    },
    {
        firstName: 'Anton',
        lastName: 'Anchev',
        email: 'antonanchev@outlook.com',
        phoneNumber: '0876080101',
    },
];

export let indexIterator = 0;

export const prevContact = () => {
  if (contact.length === 0) {
    alert('There are no contacts!');  
  } else if(indexIterator > 0) {
    indexIterator -= 1;
    document.getElementById("inputFirstName").value = contact[indexIterator].firstName;
    document.getElementById("inputLastName").value = contact[indexIterator].lastName;
    document.getElementById("inputEmail").value = contact[indexIterator].email;
    document.getElementById("inputPhoneNumber").value = contact[indexIterator].phoneNumber;
  } else {
    alert('You are at the first contact!');
  }
}

export const nextContact = () => {
  if (contact.length === 0) {
    alert('There are no contacts!');
  } else if (indexIterator < contact.length-1) {
    indexIterator += 1;
    document.getElementById("inputFirstName").value = contact[indexIterator].firstName;
    document.getElementById("inputLastName").value = contact[indexIterator].lastName;
    document.getElementById("inputEmail").value = contact[indexIterator].email;
    document.getElementById("inputPhoneNumber").value = contact[indexIterator].phoneNumber;    
  } else {
    alert('You are at the last contact!');
  }
}

export const addContact = () => {
    let formNotEmpty = document.getElementById("inputFirstName").value != ''
    && document.getElementById("inputLastName").value != ''
    && document.getElementById("inputEmail").value != ''
    && document.getElementById("inputPhoneNumber").value != '';

    let contactIsDifferent = document.getElementById("inputFirstName").value != contact[indexIterator].firstName
    || document.getElementById("inputLastName").value != contact[indexIterator].lastName
    || document.getElementById("inputEmail").value != contact[indexIterator].email
    || document.getElementById("inputPhoneNumber").value != contact[indexIterator].phoneNumber;

    if(!formNotEmpty) {
      alert('Please fill some of the fields!');
    } else if(!contactIsDifferent) {
      alert('This contact already exists!');
    } else {
      let newContact = {
        firstName: document.getElementById("inputFirstName").value,
        lastName: document.getElementById("inputLastName").value,
        email: document.getElementById("inputEmail").value,
        phoneNumber: document.getElementById("inputPhoneNumber").value,
      }
    contact.push(newContact);
    indexIterator = contact.length-1;
    alert('Contact added successfully!');
    }
  }

export const deleteContact = () => {
  if(contact.length > 0) {
    if(confirm('Are you sure you want to delete this contact?')) {
      contact.splice(indexIterator, 1);
      if (contact.length === 0) {
        document.getElementById("inputFirstName").value = '';
        document.getElementById("inputFirstName").placeholder = 'Enter first name';
        document.getElementById("inputLastName").value = '';
        document.getElementById("inputLastName").placeholder = 'Enter last name';
        document.getElementById("inputEmail").value = '';
        document.getElementById("inputEmail").placeholder = 'Enter email';
        document.getElementById("inputPhoneNumber").value = '';
        document.getElementById("inputPhoneNumber").placeholder = 'Enter phone number';
      } else {
          if (indexIterator === contact.length && indexIterator !== 0) {
            indexIterator -= 1;
          }
          document.getElementById("inputFirstName").value = contact[indexIterator].firstName;
          document.getElementById("inputLastName").value = contact[indexIterator].lastName;
          document.getElementById("inputEmail").value = contact[indexIterator].email;
          document.getElementById("inputPhoneNumber").value = contact[indexIterator].phoneNumber;
      }
      alert('Account deleted successfully!');
    }
  } else {
    alert('There are no contacts to delete!');
  }
  
}

export const updateContact = () => {
    contact[indexIterator].firstName = document.getElementById("inputFirstName").value;
    contact[indexIterator].lastName = document.getElementById("inputLastName").value;
    contact[indexIterator].email = document.getElementById("inputEmail").value;
    contact[indexIterator].phoneNumber = document.getElementById("inputPhoneNumber").value;
}
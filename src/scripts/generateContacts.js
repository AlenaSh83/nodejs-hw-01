import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {

  const existingContacts = await readContacts();

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updatedContacts = [...existingContacts, ...newContacts];

  await writeContacts(updatedContacts);

  console.log(`Successfully generated ${number} contacts!`);
};

generateContacts(5);

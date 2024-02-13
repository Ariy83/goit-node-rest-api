import Contact from "../models/Contact.js";

export async function listContacts() {
  return Contact.find();
}

export function getContactById(contactId) {
  return Contact.findOne({ _id: contactId });
  // const contacts = await listContacts();
  // const result = contacts.find((item) => item.id === contactId);
  // return result || null;
}

export function removeContact(contactId) {
  return Contact.findByIdAndDelete({ _id: contactId });
  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === contactId);
  // if (index === -1) {
  //   return null;
  // }
  // const [result] = contacts.splice(index, 1);
  // await updateContacts(contacts);
  // return result;
}

export function addContact(data) {
  return Contact.create(data);
  // const contacts = await listContacts();
  // const newContact = {
  //   id: nanoid(),
  //   name,
  //   email,
  //   phone,
  // };
  // contacts.push(newContact);
  // await updateContacts(contacts);
  // return newContact;
}

async function updateContact(id, data) {
  const result = await Contact.findByIdAndUpdate({ _id: id }, data);
  return result;
  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === id);
  // if (index === -1) {
  //   return null;
  // }
  // contacts[index] = { ...contacts[index], ...data };
  // await updateContacts(contacts);
  // return contacts[index];
}

export async function updateStatusContact(contactId, body) {
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, body);
  return result;
}

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };

export default { updateContact, updateStatusContact };

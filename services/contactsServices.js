import Contact from "../models/Contact.js";

export async function listContacts() {
  return Contact.find({}, "-__v");
}

export async function getContactById(id) {
  return Contact.findById(id, "-__v");
}

export async function removeContact(id) {
  return Contact.findByIdAndDelete(id);
}

export async function addContact(data) {
  return Contact.create(data);
}

export async function editContact(id, data) {
  return Contact.findByIdAndUpdate(id, data);
}

export async function updateContactStatus(id, body) {
  return Contact.findByIdAndUpdate(id, body);
}

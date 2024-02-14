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

async function updateContact(id, data) {
  return Contact.findByIdAndUpdate(id, data);
}

async function updateStatusContact(id, body) {
  return Contact.findByIdAndUpdate(id, body);
}

export default { updateContact, updateStatusContact };

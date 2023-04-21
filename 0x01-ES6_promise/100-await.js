import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resultObj = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    resultObj.photo = photo;
    resultObj.user = user;
  } catch (error) {
    resultObj.photo = null;
    resultObj.user = null;
  }
  return resultObj;
}

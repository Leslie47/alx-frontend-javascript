import { uploadPhoto, createUser } from './utils';

const asyncUploadPhoto = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadPhoto;

export default function uploadPhoto(filename) {
  return new Promise((response, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
}

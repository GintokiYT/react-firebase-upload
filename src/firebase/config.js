import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCiw4D23qRK5qb4cIpW6w7Pcap0zqUjMX0',
  authDomain: 'react-firebase-tutorial-1917e.firebaseapp.com',
  projectId: 'react-firebase-tutorial-1917e',
  storageBucket: 'react-firebase-tutorial-1917e.appspot.com',
  messagingSenderId: '1049543888926',
  appId: '1:1049543888926:web:4ce863f1dc72029354de0f'
}

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)

/**
 * Sube un archivo en Firebase Storage
 * @param {file} file el archivo para cargar
 * @returns {Promise<string>}URL del archivo cargado
 */

const uploadFile = async (file) => {
  const storageRef = ref(storage, 'some-child')
  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}

export {
  storage,
  uploadFile
}
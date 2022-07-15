

// Image file conversion to base64

export const imageConvert = async (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      resolve(fileReader.result)
    }

    fileReader.onerror = (err) => {
      reject(err)
    }
  })
}
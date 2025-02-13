type zipImageTarget = {
  zipName: string
  rootPath: string
}

export const ZIP_IMAGE_OUTPUT_ROOT_PATH = '/static/downloads/'

export const ZIP_IMAGE_README_PATH = '/scripts/downloads/readme.txt'

export const ZIP_IMAGE_TARGETS: zipImageTarget[] = [
  {
    zipName: 'smarthr-co',
    rootPath: '/content/articles/basics/illustration/images/smarthr-co',
  },
  {
    zipName: 'user-co',
    rootPath: '/content/articles/basics/illustration/images/user-co',
  },
  {
    zipName: 'item',
    rootPath: '/content/articles/basics/illustration/images/item',
  },
]

export interface IPictureImage {
  height: number;
  weight: number;
}

export interface IPictureFileDetails {
  size: number;
  image: IPictureImage;
}

export interface IPictureFile {
  contentType: string;
  fileName: string;
  url: string;
  details: IPictureFileDetails;
}

export interface IPicture {
  title: string;
  description: string;
  file: IPictureFile;
}

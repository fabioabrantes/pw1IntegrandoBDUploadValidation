export interface BookModel {
  id: string;
  author: string;
  title: string;
  descriptionType: string;
  ImagesBook: { pictureName: string }[]; //alterei para esse formato
  userId: string;
}

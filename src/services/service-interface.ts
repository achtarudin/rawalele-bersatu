import { Query, DocumentData, DocumentReference } from "firebase/firestore";

export default interface ServiceInterface {
  getAllPerPage(paginate: number | null, filters: object): Query<DocumentData>;

  findById(id: string): DocumentReference;

  created(attributes: object): Promise<string>;

  updated(id: string, attributes: object): Promise<string>;
}

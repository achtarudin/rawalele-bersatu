import { db } from "@/plugins/firebase";
import ServiceInterface from "./service-interface";
import {
  Firestore,
  Query,
  DocumentData,
  DocumentReference,
  Timestamp
} from "firebase/firestore";
import {
  collection,
  query,
  orderBy,
  limit,
  where,
  addDoc,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";

type FilterType = Record<string, string>;

class MemberService implements ServiceInterface {
  private db: Firestore;
  private collectionName: string;

  constructor() {
    this.db = db;
    this.collectionName = "members";
  }

  findById(id: string): DocumentReference {
    return doc(collection(this.db, this.collectionName), id);
  }

  async updated(id: string, attributes: FilterType): Promise<string> {
    const docRef = this.findById(id);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      await updateDoc(snap.ref, {
        ...attributes,
        ...{ updated_at: Timestamp.now() }
      });
      return snap.id;
    }

    throw new Error("Data Not Found");
  }

  async created(attributes: FilterType): Promise<string> {
    const result = await addDoc(collection(this.db, this.collectionName), {
      ...attributes,
      ...{ created_at: Timestamp.now() }
    });
    return result.id;
  }

  getAllPerPage(paginate: 10, filters: FilterType): Query<DocumentData> {
    const collectionRef = collection(this.db, this.collectionName);

    let queryCollection = query(collectionRef);

    for (const key in filters) {
      const valueFilter: string = filters[key] ?? "";
      if (valueFilter && valueFilter.toString().trim().length) {
        queryCollection = query(queryCollection, where(key, "==", valueFilter));
      }
    }

    return query(
      queryCollection,
      orderBy("full_name", "desc"),
      limit(paginate)
    );
  }
}

const memberService = new MemberService();

export default memberService;

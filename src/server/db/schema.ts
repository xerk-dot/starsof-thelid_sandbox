//This document has Firestore and Drizzle ORM

//------------------------------------------------------------------------------
// FIRESTORE
//------------------------------------------------------------------------------
const {Firestore, FieldValue} = require('@google-cloud/firestore');

// Create a new client //this is where the project id is
const firestore = new Firestore('celtic-list-433404-u3');

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc('posts/intro-to-firestore');

  // Enter new data into the document.
  await document.set({
    title: 'Welcome to Firestore',
    body: 'Hello World',
  });
  console.log('Entered new data into the document');

  // Update an existing document.
  await document.update({
    body: 'My first Firestore app',
  });
  console.log('Updated an existing document');

  // Read the document.
  const doc = await document.get();
  console.log('Read the document');

  // Delete the document.
  //await document.delete();
  //console.log('Deleted the document');


  // collection
  /**const cityDocuments = await collectionReference
    .orderBy('name')
    .limitToLast(2)
    .get();
  const cityDocumentData = cityDocuments.docs.map(d => d.data());
  cityDocumentData.forEach(doc => {
    console.log(doc.name);
  }); */
}
//quickstart();



async function main() {
  // [START firestore_solution_sharded_counter_increment]
  function incrementCounter(docRef, numShards) {
    const shardId = Math.floor(Math.random() * numShards);
    const shardRef = docRef.collection('shards').doc(shardId.toString());
    return shardRef.set({count: FieldValue.increment(1)}, {merge: true});
  }
  // [END firestore_solution_sharded_counter_increment]

  // [START firestore_solution_sharded_counter_get]
  async function getCount(docRef) {
    const querySnapshot = await docRef.collection('shards').get();
    const documents = querySnapshot.docs;

    let count = 0;
    for (const doc of documents) {
      count += doc.get('count');
    }
    return count;
  }
  // [END firestore_solution_sharded_counter_get]

  // [START firestore_data_delete_doc]
  async function deleteDocs(docRef) {
    const shardsCollectionRef = docRef.collection('shards');
    const shardDocs = await shardsCollectionRef.select('id').get();
    const promises : string[] = [];
    shardDocs.forEach(async doc => {
      promises.push(shardsCollectionRef.doc(doc.id).delete());
    });
    return Promise.all(promises);
  }
  // [END firestore_data_delete_doc]

  // Create a new client
  //const firestore = new Firestore();
  const docRef = firestore.doc(
    'distributed_counter_samples/distributed_counter'
  );
  // Clean up documents from potential prior test runs
  //await deleteDocs(docRef);
  const numberOfShards = 10;
  // Increase the document count
  return incrementCounter(docRef, numberOfShards).then(async () => {
    console.log('counter increased');
    // Get document count
    const count = await getCount(docRef);
    console.log(`new count is : ${count}`);
    // Delete the document
    //await deleteDocs(docRef);
    //console.log('Deleted the document');
  });
}

main();







//------------------------------------------------------------------------------
// DRIZZLE ORM
//------------------------------------------------------------------------------

// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * How to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */


/**
 * How to update the schema: 
 * 1. run `pnpm db:push`
 * 2. add null columns so that the schema is updated
 * 3. in a later change, make there be non-null columns
 */ 
export const createTable = pgTableCreator((name) => `starsof-thelid_sandbox_${name}`);


/**
 * 
 * to clear the table:
 * TRUNCATE TABLE "starsof-thelid_sandbox_image" RESTART IDENTITY;
 * 
 */

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),

    userId: varchar("userId", { length: 256 }).notNull(),
    
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

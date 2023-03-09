import { DBSchema, openDB } from 'idb';

const DATABASE_NAME = 'THINGS';
const DATABASE_VERSION = 1;

type Attribute = {
  label: string;
  value: string;
  hidden: boolean;
}

interface everythingDB extends DBSchema {
  things: {
    key: string;
    value: {
      name: string;
      template: string;
      attributes: Attribute[];
      media: string[];
    };
  }
}

export const dbPromise = openDB<everythingDB>(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db, oldVersion, newVersion, transaction, event) {
    switch (oldVersion) {
      case 0:
        db.createObjectStore('things', {
          autoIncrement: true
        });
    }
  },
  blocked(currentVersion, blockedVersion, event) {
    console.log(`Please close this app opened in other browser tabs.`);
  },
  blocking(currentVersion, blockedVersion, event) {
    console.log(`App is outdated, please close this tab`);
  },
  terminated() {
    // …
  },
});


import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const records=sqliteTable('records',{id:text('id').primaryKey(),kind:text('kind').notNull(),classId:text('class_id').notNull(),owner:text('owner').notNull(),data:text('data').notNull()});

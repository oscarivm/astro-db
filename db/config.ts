import { hasPrimaryKey } from '@astrojs/db/runtime';
import {column, defineDb, defineTable} from 'astro:db';

const User = defineTable({
columns:{
  id: column.text({primaryKey:true}),
  email: column.text(),
  username: column.text()
},
});

const Todo = defineTable({
  columns:{
    id: column.text({primaryKey:true}),
    title: column.text(),
    description: column.text(),
    user_id: column.text({references:()=> User.columns.id}),
    category_id: column.text({references:()=> Category.columns.id})
  }
});

const Category = defineTable({
  columns:{
    id: column.text({primaryKey:true}),
    label: column.text(),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Todo,
    Category,
  }
});

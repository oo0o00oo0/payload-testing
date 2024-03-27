 
 import { CollectionConfig } from 'payload/types'

 const Editors: CollectionConfig = {
   slug: 'Editors',
   auth: true,
   admin: {
     useAsTitle: 'email',
   },
   fields: [
     // Email added by default
     // Add more fields as needed
   ],
 }
 
 
 
 export default Editors
 
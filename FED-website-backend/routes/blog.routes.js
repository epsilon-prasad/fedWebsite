import { Router } from 'express';

import { getBlog } from '../controllers/blog/blog.controller';
import { getHelplink } from '../controllers/blog/helplink.controller';
var blogRoutes = Router();

//Open API's  
blogRoutes.get('/get-blog/:_id', getBlog);
blogRoutes.get('/get-helplink/:_limit', getHelplink);

export default blogRoutes;
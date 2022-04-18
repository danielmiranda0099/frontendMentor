import { data } from "../data/data.js";
import { boxComment } from "./components/boxComment.js";
import { cardComments } from "./components/cardComments.js";


cardComments();

boxComment( data[0].currentUser.username, data[0].currentUser.image.png);
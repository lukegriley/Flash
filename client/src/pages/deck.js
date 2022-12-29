import {useState, useEffect} from "react";
import Axios from "axios";
import { render } from "express/lib/response";

function Deck() {
    let cards = [{front:"",back:"",starred:false,score:0}]*10;
    for (var i=0;i<10;i++){
        cards.append({front:"",back:"",starred:false,score:0});
    }
    
    const [cardList,setCardList] = useState(cards);
}

export default Deck;
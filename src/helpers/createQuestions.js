import app from "./firebase";
import { getDatabase, ref, set, push } from "firebase/database";
const questions = require('../assets/questions.json')

const resetQuestions = () => {
  try {
    const db = getDatabase(app);
    
    let icons = [];
    const getIcon = (title) => {
      const names = title.split(/[\s/-]/g)
      let icon_name = names.join("_").toLowerCase();

      for (let i = 0; i < names.length; i++) {
        if(!icons.includes(names[i])) {
          icon_name = names[i].toLowerCase();
          icons.push(icon_name);
          break;
        }else{
          console.log("incldes")
        }
      }
      return icon_name;
    }
    const updates = {}
    questions.forEach(question => {
      const questionRef = push(ref(db, 'questions'));
      const uid = questionRef.key

      const currentDate = new Date();
      const timestamp = currentDate.getTime();

      const details = {
        id: uid,
        icon: getIcon(question.title),
        title: question.title,
        tag: question.tag,
        desc: question.desc,
        ratings: [],
        avg_rating: 0,
        created: timestamp,
        updated: timestamp,
      }

      updates[uid] = details
    })

    set(ref(db, 'questions'), updates)

  } catch(error) {
    console.log(error)
  }
}

const resetAnalytics = () => {
  try {
    const db = getDatabase(app);
    const analyticsRef = ref(db, 'analytics');

    set(analyticsRef, {ips: [], total:0})

  } catch (error) {
    console.log(error)
  }
}

const resetPolls = () => {
  try {
    const db = getDatabase(app);
    const pollsRef = ref(db, 'polls');

    set(pollsRef, [])
    
  } catch (error) {
    console.log(error)
  }
}

export const resetDatabase = () => {
  try{
    resetAnalytics();
    resetPolls();
    resetQuestions();
  }catch(error){
    console.log("Database reset failed!")
    console.log(error)
  }
}

//import { resetDatabase } from './helpers/createQuestions';
//resetDatabase();

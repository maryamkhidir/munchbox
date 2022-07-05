import app from "./firebase";
import { getDatabase, ref, get, push, set, update } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";


export const fetchLocation = async () => {
  try{
    const fetchLocation = await fetch('http://ip-api.com/json');
    const location = await fetchLocation.json();
    return `${location.city}, ${location.countryCode}`
  }catch(error) {
    console.log(error)
    return
  }
}

const getRandomColor = () => {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const formatAnalytics = async (data) => {
  const dataset = {}
  const datacolors = []

  for(let ip of data.ips){
    const resp = await fetch(`/api/json/${ip}`);
    const json = await resp.json();
    const location = `${json.city}, ${json.countryCode}`
    dataset[location] = (dataset[location] || 0) + 1
    datacolors.push(getRandomColor())
  }
  return {...data, dataset, datacolors}
}



export const submitPoll = async (data) => {
  const updatePoll = async () => {
    const db = getDatabase(app);
    const pollsRef = ref(db, 'polls');
    const polls = (await get(pollsRef)).val();
    if(polls) {
      const question = Object.values(polls).find(question => question.title === data.title)
      if(question) {
        const updates = {...question}
        updates["count"] = question.count + 1
        update(ref(db, 'polls/'+question.id), updates)
      }else {
        const newQuestion = push(pollsRef);
        const uuid = newQuestion.key
        const updates = {...data, id:uuid, count: 1}
        set(newQuestion, updates );
      }
    }else {
      const updates = {}
      const newQuestion = push(pollsRef);
      const uuid = newQuestion.key
      updates[uuid] = {...data, id:uuid, count: 1}

      set(pollsRef, updates );
    }
  }
  try{
    authenticate(updatePoll)

    const db = getDatabase(app);
    const totalRef = ref(db, 'total')
    const total = (await get(totalRef)).val()
    set(totalRef, total + 1 );
    
  } catch(error) {
    console.log(error)
  }
  
}

export const updateMailingList = async (subscriber) => {
  const mailUpdate = async () => {
    //Update Mailing List
    const db = getDatabase(app);
    const subscribersRef = ref(db, 'mailing_list');
    const subscribers = (await get(subscribersRef)).val();
    const newSubscriber = push(subscribersRef);
    const key = newSubscriber.key

    const location = await fetchLocation()

    const updates = (subscribers) ? {...subscribers} : {}

    updates[key] = {id:key, location, ...subscriber}

    set(subscribersRef, updates);
  }
  try {
    return authenticate(mailUpdate)
  } catch (error) {
    console.log(error)
  }
}

const authenticate  = (func) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      func()
    }else{
      signInAnonymously(auth)
      .then(() => {
        func()
      })
    }
  }catch(error) {
    console.log(error)
  }
}


import './App.css';

import { Profile } from './Components/Profile/Profile.jsx';
import { Statistics } from "./Components/Statistics/Statistics.jsx";
import { FriendList } from './Components/FriendsList/FriendList.jsx';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory.jsx';

import user from './jsons/user.json';
import data from './jsons/data.json';
import friends from './jsons/friends.json';
import transactions from './jsons/transactions.json'

function App() {
  return (
    <>
      <Profile user={user}/>
      <Statistics stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory item={transactions}/>
    </>
  );
}

export default App;

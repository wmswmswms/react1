/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';


function Modal(props){  
  //괄호 안쓸려면 return 라인 옆에서 시작 해야됨
  /*return     <div>
    <h2>제목</h2>
    <p>날자</p>
    <p>상세내용</p>
  </div>*/

  return (

  <div style={{backgroundColor:'yellow'}}>
    <h2>제목{props.strName1}</h2>
    <p>날자</p>
    <p>상세내용aa</p>
  </div>    
  )
}
  
  


function App() {

  //let posts = "타이틀 이름1";
  var style1 = {fontSize:'20px'};
  let [state1,setState1] = useState(['제목3','제목2','제목1']);
  let [count,setCount] = useState([0,1,2]);

  // App()안에 넣어야됨 변수 공유 때문에 그러느듯
  function chageCount(num){    
    var newCount = [...count];  
    newCount[num] = Number(count[num])+1
    setCount(newCount);
  
  }

  function setOrder(){
    console.log('aa');
    var newState1 = [...state1]; 

    

    newState1.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    setState1(newState1);
     

  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={style1}>개발 Blog</div>
      </div>
      {/*<img src={logo} style={{width:'100px', height:'100px'}} ></img>*/}
    

      <div>
        <h3> {state1[0]} <span style={{cursor:'pointer'}} onClick={()=>{ chageCount(0) }}>😼</span>{ count[0] }</h3>
        <p>1월</p>
        <hr />
      </div>

      <div>
        <h3> {state1[1]} { count[1] }</h3>
        <p>1월</p>
        <hr />
      </div>

      <div>
        <h3> {state1[2]} { count[2] }</h3>
        <p>1월</p>
        <hr />
      </div>

      <div><span onClick={()=>{ setOrder() }}>역정렬</span></div>

      <Modal strName1={count}></Modal>


    </div>
  );
}


export default App;

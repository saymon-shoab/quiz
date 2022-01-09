import { Button, Chip, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { idText } from 'typescript';
import {
fillInTheBlank,
getQusetionByLang,
multipleChoice,
multiSelect,
trueFalse } from '../Json/Question';
import { userInfo } from './Home';
import Question from './Question';


interface AnsInfo {
    id: number,
    options: string[]
}


const Exam:React.FC = () => {
    const history = useHistory();
    const {state} = useLocation();
    const userInfo = state as userInfo;
    console.log(userInfo)
    const [questionNo, setQuestionNo] = useState<number>(0);
    const [ansList, setAnsList] = useState<AnsInfo[]>([])

    const filteredQuestion = getQusetionByLang(userInfo.lang);
    const currentQ = filteredQuestion[questionNo];
    const questionChange = (qNo: number) => {
        setQuestionNo(qNo)
    }


    const handleAns = (option:string, checked?:boolean) => {
          const find = ansList.find(ans => ans.id === currentQ.id)
          if(find){
              if([multipleChoice, trueFalse, fillInTheBlank].includes(currentQ.type)){
                  const _ansList =ansList.map((ans)=> {
                      if(ans.id === currentQ.id){
                          ans= {id: currentQ.id, options: [option]}
                      }
                      return ans
                  })
                  setAnsList(_ansList)
                  return
              }

              if(currentQ.type === multiSelect){
                  const _ansList = ansList.map((ans)=>{
                      if(ans.id === currentQ.id){
                         if(checked){
                             ans= {id: currentQ.id, options: [...ans.options, option]}
                         }else{
                             let _options = ans.options.filter(op => op !== option);
                             ans = {id: currentQ.id, options:_options}
                         }
                      }
                      return ans;
                  })
                  setAnsList(_ansList)
                  return
              }
          }else{
              const _ans = {id: currentQ.id, options: [option]}
              setAnsList([...ansList, _ans])
          }
    }

      
    const isAns = (option: string) =>{
        const ans = ansList.find(ans => ans.id === currentQ.id)
        if(!ans) return false
        return !!ans.options.find(op => op === option)
    }

    
    const isQuestionAns = (questionId: number)=>{
          const ans = ansList.find(ans=> ans.id === questionId);
          if(!ans)return false
          return ans.options.length > 0;
    }


    const handleResult = ()=>{
      let count:number = 0;

      ansList.forEach(ans => {
          for(let q of filteredQuestion){
              if(ans.id === q.id){
                  if(JSON.stringify(ans.options) === JSON.stringify(q.ans)){
                      count++;
                  }
                  break
              }
          }
      })
      history.push("/result", {ansCount: count, count: filteredQuestion.length});
    }

console.log("ansList",ansList);


    return (
        <div>
            <Container>
              <Typography variant='h4' sx={{margin:"20px 0"}}>
                 {userInfo.lang} Exam
              </Typography>
                {
                  filteredQuestion.map((q,i)=>(
                     <Chip
                       color={isQuestionAns(q.id) ? "error" : "default"}  
                       onClick={()=> questionChange(i)}
                       sx={{marginRight: "10px", cursor: "pointer"}}
                       key={q.id}
                       label={i+1}
                     />
                  ))
                }
                <Question isAns={isAns} handleAns={handleAns} question={currentQ} />
               <Button
                 onClick={handleResult}
                 variant='contained'
               >
                   submit
               </Button>

            </Container>
        </div>
    );
};

export default Exam;
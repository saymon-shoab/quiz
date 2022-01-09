import { Container, Typography } from '@mui/material';
import React from 'react';
import FollowingMatch from '../Components/FollowingMatch';
import MultipleChoice from '../Components/MultipleChoice';
import MultiSelect from '../Components/MultiSelect';
import {
    fillInTheBlank,
    followingMatch,
    multipleChoice,
    multiSelect,
    QuestionInfo,
    trueFalse } from '../Json/Question';
interface iProps{
    handleAns(option: string, checked?:boolean):void
    isAns(option: string):boolean
    question: QuestionInfo
}
const Question:React.FC<iProps> = ({question, isAns, handleAns}) => {
    return (
   
        question ? ( 
            <Container>
           <Typography variant="h4" sx={{margin: "20px 0"}}>Question</Typography>
            <Typography variant='h5'>{question?.title}</Typography>
             {
                [multipleChoice, trueFalse, fillInTheBlank].includes(question?.type)&&
                <MultipleChoice handleAns={handleAns} isAns={isAns} question={question} />
             }
             {
                 question.type === multiSelect &&
                 <MultiSelect handleAns={handleAns} isAns={isAns} question={question} />
             }
             {
                 question.type === followingMatch &&
                 <FollowingMatch handleAns={handleAns} isAns={isAns} question={question} />
             }
        </Container> 
        ): <p>question not found</p>
        
   
    );
};

export default Question;
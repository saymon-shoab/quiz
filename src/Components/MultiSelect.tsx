import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { QuestionInfo } from '../Json/Question';
interface IProps{
    handleAns(option: string, checked?:boolean):void
    isAns(option: string):boolean
    question: QuestionInfo
}
const MultiSelect:React.FC<IProps> = ({question, isAns, handleAns}) => {
    return (
     
       <FormGroup>
           {
               question.options.map(op=> (
                   <FormControlLabel
                     key={op}
                     control={<Checkbox 
                        checked={isAns(op)}
                        onChange={(e)=> handleAns(op, e.target.checked)}
                     />}
                     label={op}
                   />
               ))
           }
       </FormGroup>
        
    );
};

export default MultiSelect;
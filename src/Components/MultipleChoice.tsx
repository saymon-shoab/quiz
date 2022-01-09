import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { QuestionInfo } from '../Json/Question';
interface IProps{
    handleAns(option: string):void
    isAns(option: string):boolean
    question: QuestionInfo
}
const MultipleChoice:React.FC<IProps> = ({question,isAns, handleAns}) => {
    return (
        <RadioGroup
           name='redio-button-group'
           onChange={(e)=> handleAns(e.target.value)}
        >
          {
              question.options.map((op=> (
                  <FormControlLabel 
                    key={op}
                    value={op}
                    control={<Radio
                        checked={isAns(op)}
                        />}
                    label={op}
                  />
              )))
          }
        </RadioGroup>
    );
};

export default MultipleChoice;
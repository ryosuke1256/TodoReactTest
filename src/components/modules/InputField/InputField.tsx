import React, { FC } from 'react';
import { CircleButton } from '~/components/atoms';
import style from './style.module.css';
import '~/styles/utils.css';

type InputField = {
  submitText: string;
  changeSubmitText: (submitText: string) => void;
  addTodo: () => void;
};

export const InputField: FC<InputField> = ({ submitText, changeSubmitText, addTodo }) => {
  return (
    <div className={style.inputField}>
      <input type='text' value={submitText} onChange={(e) => changeSubmitText(e.target.value)} className={style.input} data-testid='inputTask' />
      <CircleButton onClick={() => addTodo()} className={style.buttonToAdd} data-testid='addTaskButton' />
    </div>
  );
};

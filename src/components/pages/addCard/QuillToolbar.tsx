/* eslint-disable react-refresh/only-export-components */
import { Quill } from 'react-quill';

export const modules = {
  toolbar: {
    container: '#toolbar',
  },
};

const Font = Quill.import('formats/font');
Font.whitelist = ['Noto-sans', 'Pretendard', 'Helvetica', 'Nanum-Myeongjo', 'Nanum-Pen-Script'];
Quill.register(Font, true);

const Size = Quill.import('formats/size');
Size.whitelist = ['small', 'medium', 'large'];
Quill.register(Size, true);

const QuillToolbar = () => (
  <div id='toolbar'>
    <span className='ql-formats'>
      <button className='ql-bold' />
      <button className='ql-italic' />
      <button className='ql-underline' />
      <button className='ql-strike' />
    </span>
    <span className='ql-formats'>
      <select className='ql-align' />
      <select className='ql-color' />
      <select className='ql-background' />
    </span>
    <span className='ql-formats'>
      <select className='ql-size' defaultValue='small'>
        <option value='small'>small</option>
        <option value='medium'>medium</option>
        <option value='large'>large</option>
      </select>
      <select className='ql-header' defaultValue='3'>
        <option value='1'>Heading 1</option>
        <option value='2'>Heading 2</option>
        <option value='3'>normal</option>
      </select>
    </span>
  </div>
);

export default QuillToolbar;

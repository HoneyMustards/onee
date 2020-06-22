import React, { useState } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import CheckboxImage from '../../../src/components/elements/checkbox-image';
import style from './style.module.scss';


const SortableItem = SortableElement(({value}) => <CheckboxImage variant={style.checkImage}>{value}</CheckboxImage>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className={style.photos}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

const ImageList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',  'Item 6'])

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return (
    <SortableList axis="x" items={items} onSortEnd={onSortEnd}  distance={1}/>
  )

}

export default ImageList;
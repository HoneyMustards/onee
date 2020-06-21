import React, { useState } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import CheckboxImage from '../../../src/components/elements/checkbox-image';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginRight: '40px'
}

const SortableItem = SortableElement(({value}) => <CheckboxImage>{value}</CheckboxImage>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div style={style}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

const ImageList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return (
    <SortableList axis="x" items={items} onSortEnd={onSortEnd} />
  )

}

export default ImageList;
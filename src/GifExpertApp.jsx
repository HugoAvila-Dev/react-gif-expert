import { useState } from 'react';
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //setCategories( cat => [...cat, 'Valorant']);
    setCategories([newCategory,...categories]);
    //setCategories(['Valorant', ...categories ]);
    //setCategories(categories.concat('Valorant'));

  }

  return (
    <>

      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category} />
      ))}


      {/* Gif Item */}

    </>
  )
}

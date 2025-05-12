import React from 'react';

const ItemLista = ({ item }) => {
    return (
    <li className="item">
        {Object.entries(item).map(([chave, text]) => {
            if (chave === 'id') return null;
            
            return (
                <p key={chave}>
                    {text}
                </p>
            );
        })}
    </li>
    );
};

const ListaDinamica = ({ itens }) => {
  return (
    <>
      <ul className="lista">
        {itens.map((item, index) => (
          <ItemLista 
            key={item.id || index} 
            item={item} 
          />
        ))}
      </ul>
    </>
  );
};


export default ListaDinamica;
import "./styles.css"

const ListaDados = ({ item }) => { //id_card
  // Pega o item com id = 1
  //const item = dados.find((item) => item.id === id_card);

  if (!item) {
    return <p>Nenhum item encontrado com ID: {item.id}.</p>;
  }

  // Pega apenas os valores (ignorando 'id')
  const valores = Object.values(item).filter(
    (valor, index) => Object.keys(item)[index] !== 'id'
  );

  return (
    <div>
      <h2>Dados do Item ID 1:</h2>
      <ul>
        {valores.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDados;
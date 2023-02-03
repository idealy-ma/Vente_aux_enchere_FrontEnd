interface ContainerProps {

  }
  
  const Tableau: React.FC<ContainerProps> = () => {
    return (
        <div>
        <table>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
        </tr>
        <tr>
          <td>Collier</td>
          <td>100000Ar</td>
        </tr>
        <tr>
          <td>Sac</td>
          <td>37000Ar</td>
        </tr>
      </table>
      </div>
    );
};
  export default Tableau;
import internal from "stream";

export {}
interface Publication {
    publi: string;
}
interface VuePub {
    nombreVue: Int32Array;
}
const publication = {
    publi:'Publication lorem ipsum',
    nombre: '34'
};
const TextPub: React.FC<Publication> = ({ publi }) => {
    return (
        <table border={1} cellPadding={0} cellSpacing={0} width={500} >
        <tr>
            <td>{publi}</td>
        </tr>
    </table>
    );
  };
  export default TextPub;

  const Vue: React.FC<VuePub> = ({ nombreVue }) => {
    return <h5>Vue par {nombreVue} personnes</h5>
  }

  function Reaction(){
    return(
        <select name="reaction">
            <option>Choix réaction</option>
            <option>J'aime</option>
            <option>J'adore</option>
            <option>Haha</option>
        </select>
    );
  }


  


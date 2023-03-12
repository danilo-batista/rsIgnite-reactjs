/* Na versão REACT 18, precisamos importar o 'createRoot' do pacote
'react-dom/client. */
import { createRoot } from 'react-dom/client';
import { App } from './App';

/* Crie um container com o elemento que vai receber o que será exibido. */
const container = document.getElementById('root');
/* Depois passe este container para oa função `createRoot`, colocando em uma variável. */
const root = createRoot(container);
/* Por último, utiliza o método 'render' da variável 'root'criada para inserir o elemento que quer exibir.*/
root.render(<App />);
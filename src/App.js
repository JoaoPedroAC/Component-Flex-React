import './App.css';
import './index.css';
import React,{useState} from 'react';
import Main from './Components/Main.jsx';
import First from './Components/Component1';
import Second from './Components/Component2';
import Third from './Components/Component3';


export default function() {
    const [state, setState] = useState('');

	return (
		<div className='main'>
      		<h2>Área dos componentes</h2>
			<Main>
				<First title='Componente 1' name='component1' inputValue={state} inputSet={setState}/>
        		{/* classe - component1 */}
		
				<Second title='Componente 2' name='component2'>
					<Third title='Componente 3' name='component3' value={state}/>
        			{/* classe - component3 */}

				</Second>
        		{/* classe - component2 */}
			</Main>

      </div>

	);
}

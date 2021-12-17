import './App.css';
import './index.css';
import React from 'react';
import Main from './Components/Main.jsx';
import First from './Components/Component1';
import Second from './Components/Component2';

export default function() {
	return (
		<div className='main'>
      		<h2>Área dos componentes</h2>
			<Main>
				<First title='Componente 1' name='component1'/>
        		{/* classe - component1 */}
		
				<Second title='Componente 2' name='component2'/>
        		{/* classe - component2 */}
			</Main>

      </div>

	);
}

import './App.css';
import './index.css';
import React from 'react';
import Main from './Components/Main.jsx';
import First from './Components/Component1';

export default function () {
	return (
		<div className='main'>
      <h2>Área dos componentes</h2>

			<Main>
				<First title='Componente 1' name='component1'/>
        {/* component1 */}

				<div className='component2'>
					<p>eeeeeeeeeeee</p>
				</div>
        {/* component2 */}
			</Main>

      </div>

	);
}

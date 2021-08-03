import React, { useState } from 'react';
import './css/App.css';

const App = () => {
	const [values, setValues] = useState({ email: '', password: '' });
	return (
		<div className='main'>
			<div className='form-container'>
				<label>Email</label>
				<input
					type='email'
					name='email'
					value={values.email}
					onChange={e => setValues({ ...values, email: e.target.value })}
				/>
				<label>Password</label>
				<input
					type='password'
					name='password'
					value={values.password}
					onChange={e => setValues({ ...values, password: e.target.value })}
				/>
			</div>
		</div>
	);
};

export default App;

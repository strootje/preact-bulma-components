// import { expect, use } from 'chai';
// import { h } from 'preact';
// import Field from '../../src/Form/Field';
// import Label from '../../src/Form/Label';
// import TextInput from '../../src/Form/TextInput';

// describe('The <Form> Namespace', () => {
// 	use(require('preact-jsx-chai').default);

// 	it('should render a simple login form', () => {
// 		expect(
// 			<form>
// 				<Field>
// 					<Label>Username</Label>
// 					<TextInput placeholder='Enter your username' icons={{ left: 'fa-user', right: 'fa-test' }} />
// 				</Field>
// 			</form>
// 		).to.eql(
// 			<form>
// 				<div class='field'>
// 					<label class='label'>Usernane</label>

// 					<div class='control has-icons-left'>
// 						<span class='icon is-left is-small'><i class='fas fa-user'></i></span>
// 						<input class='input' type='text' placeholder='Enter your username' />
// 					</div>
// 				</div>

// 				<div class='field'>
// 					<label class='label'>Password</label>

// 					<div class='control has-icons-left'>
// 						<span class='icon is-left is-small'><i class='fas fa-lock'></i></span>
// 						<input class='input' type='password' placeholder='Enter your password' />
// 					</div>
// 				</div>

// 				<div class='field is-grouped is-grouped-right'>
// 					<div class='control is-expanded'>
// 						<label class='checkbox'>
// 							<input type='checkbox' />
// 							Remember Me
// 						</label>
// 					</div>

// 					<div class='control'>
// 						<a class='button is-primary'>Login</a>
// 					</div>

// 					<div class='control'>
// 						<a class='button is-light'>Reset</a>
// 					</div>
// 				</div>
// 			</form>
// 		);
// 	});

// 	it('should render a simple horizontal registration form', () => {
// 		expect(
// 			<form>
// 			</form>
// 		).to.eql(
// 			<form>
// 				<div class='field is-horizontal'>
// 					<div class='field-label'>
// 						<label class='label'>Name</label>
// 					</div>

// 					<div class='field-body'>
// 						<div class='field is-grouped'>
// 							<div class='control'>
// 								<div class='select'>
// 									<select>
// 										<option>Dhr.</option>
// 										<option>Mrs.</option>
// 									</select>
// 								</div>
// 							</div>

// 							<div class='control is-expanded'>
// 								<input class='input' type='text' placeholder='Enter a lastname' />
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div class='field is-horizontal'>
// 					<div class='field-label'>
// 						<label class='label'>Email</label>
// 					</div>

// 					<div class='field-body'>
// 						<div class='field'>
// 							<div class='control has-icons-left'>
// 								<span class='icon is-left'><i class='fas fa-at'></i></span>
// 								<input class='input' type='email' placeholder='Enter a email' />
// 							</div>

// 							<div class='help is-danger'>
// 								An email is required
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div class='field is-horizontal'>
// 					<div class='field-label'>
// 						<label class='label'>Choice</label>
// 					</div>

// 					<div class='field-body'>
// 						<div class='field is-grouped'>
// 							<div class='control is-narrow'>
// 								<label class='radio'>
// 									<input type='radio' name='choices' />
// 									Choice 1
// 								</label>
// 							</div>

// 							<div class='control is-narrow'>
// 								<label class='radio'>
// 									<input type='radio' name='choices' />
// 									Choice 2
// 								</label>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div class='field is-horizontal'>
// 					<div class='field-label'>
// 						<label class='label'>Biography</label>
// 					</div>

// 					<div class='field-body'>
// 						<div class='field'>
// 							<div class='control'>
// 								<textarea class='textarea' placeholder='I am a mighty lvl. 3 battlemage'></textarea>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div class='field is-horizontal'>
// 					<div class='field-label'></div>
// 					<div class='field-body'>
// 						<div class='field is-grouped is-grouped-right'>
// 							<div class='control'>
// 								<a class='button is-primary'>Register</a>
// 							</div>

// 							<div class='control'>
// 								<a class='button is-light'>Reset</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</form>
// 		);
// 	});

// });

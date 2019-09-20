import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { login, setting } from '../redux/actions/auth';

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			property: 'no'
		}
	}
	
	componentWillReceiveProps(newProps) {
		console.log('newProps', newProps)
	}

	hitAction1 = () => {
		this.props.login({param: 'login'})
	}

	hitAction2 = () => {
		this.props.setting({param: 'login'})
	}

	render() {
		return (
		<View style={styles.container}>
			<Text>Learn</Text>
			<Button
				onPress={this.hitAction1}
				title="action 1"
				color="#841584"
				accessibilityLabel="Learn more about this purple button" />
			
			<Button
				onPress={this.hitAction2}
				title="action 2"
				color="#841584"
				accessibilityLabel="Learn more about this purple button" />

			<Text>{this.state.property}</Text>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const mapStateToProps = (store) => ({
	response: store.auth.auth,
	error: store.auth.error,
	loading: store.auth.loading,
	sResponse: store.setting.auth,
	sError: store.setting.error,
	sLoading: store.setting.loading
})

const mapDispatchToProps = {
	login: (params) => login(params),
	setting: (params) => setting(params)
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
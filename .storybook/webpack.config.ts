import { Configuration } from 'webpack';

export default ({ config }: { config: Configuration }) => {
	if (config == null) { throw new Error('config is null'); }
	if (config.resolve == null) { throw new Error('config.resolve is null'); }
	if (config.resolve.extensions == null) { throw new Error('config.resolve.extensions is null'); }
	if (config.module == null) { throw new Error('config.module is null'); }
	if (config.module.rules == null) { throw new Error('config.module.rules is null'); }

	config.resolve.extensions.push('.ts', '.tsx');

	config.module.rules.push({
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						declaration: false
					}
				}
			}
		]
	});

	return config;
};

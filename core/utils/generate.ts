export const randomNumber = (): number => {
	const randomNumber = self.crypto.getRandomValues(new Uint8ClampedArray(1))[0];
	return randomNumber;
};

const randomNumberBuffer = (): number => {
	const randomNumber = self.crypto.getRandomValues(new Uint32Array(1))[0];
	const randomNumberBuffer = randomNumber / (0xffffffff + 1);
	return randomNumberBuffer;
};

export const randomTextByLength = (
	length: number = 1,
	character?: string,
): string => {
	const characters =
		character ??
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; ++i) {
		result += characters.charAt(
			Math.floor(randomNumberBuffer() * characters.length),
		);
	}
	return result;
};

export const randomNumberInRange = (
	min: number = 0,
	max: number = 1,
): number => {
	min = Math.ceil(min);
	max = Math.ceil(max);
	const randomNumber = Math.floor(randomNumberBuffer() * (max - min + 1)) + min;
	return randomNumber;
};

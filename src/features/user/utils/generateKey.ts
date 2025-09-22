/**
 * Генерирует случайный пароль заданной длины
 * @param length Длина пароля (по умолчанию 30)
 * @param options Настройки генерации пароля
 * @returns Строка с паролем
 */
export function generateKey(
    length: number = 30,
    options: {
        includeUppercase?: boolean;
        includeLowercase?: boolean;
        includeNumbers?: boolean;
        includeSymbols?: boolean;
    } = {
            includeUppercase: true,
            includeLowercase: true,
            includeNumbers: true,
            includeSymbols: true,
        }
): string {
    const {
        includeUppercase = true,
        includeLowercase = true,
        includeNumbers = true,
        includeSymbols = true,
    } = options;

    // Проверка минимальных требований
    if (length < 8) {
        throw new Error('Длина пароля должна быть не менее 8 символов');
    }

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        throw new Error('Должен быть включен хотя бы один набор символов');
    }

    // Наборы символов
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Собираем доступные символы на основе опций
    let availableChars = '';
    if (includeUppercase) availableChars += uppercase;
    if (includeLowercase) availableChars += lowercase;
    if (includeNumbers) availableChars += numbers;
    if (includeSymbols) availableChars += symbols;

    // Генерация пароля
    let password = '';
    const crypto = window.crypto || (window as any).msCrypto; // Для поддержки старых браузеров

    // Используем криптографически безопасный генератор
    const values = new Uint32Array(length);
    crypto.getRandomValues(values);

    for (let i = 0; i < length; i++) {
        password += availableChars[values[i] % availableChars.length];
    }

    // Гарантируем, что пароль содержит хотя бы по одному символу из каждого выбранного набора
    if (includeUppercase && !/[A-Z]/.test(password)) {
        password = password.slice(0, -1) + uppercase[Math.floor(Math.random() * uppercase.length)];
    }
    if (includeLowercase && !/[a-z]/.test(password)) {
        password = password.slice(0, -1) + lowercase[Math.floor(Math.random() * lowercase.length)];
    }
    if (includeNumbers && !/[0-9]/.test(password)) {
        password = password.slice(0, -1) + numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (includeSymbols && !/[\W_]/.test(password)) {
        password = password.slice(0, -1) + symbols[Math.floor(Math.random() * symbols.length)];
    }

    return password;
}
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ code: 405, message: '只允许 POST 请求' })
        };
    }

    try {
        const { username, password } = JSON.parse(event.body);

        if (username === 'HuTao' && password === 'HuTao') {
            return {
                statusCode: 200,
                body: JSON.stringify({ code: 200, message: '登录成功' })
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ code: 401, message: '账号或密码错误' })
            };
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ code: 400, message: '请求数据格式错误' })
        };
    }
};
